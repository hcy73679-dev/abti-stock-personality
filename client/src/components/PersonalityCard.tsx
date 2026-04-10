/**
 * 人格卡片组件
 * 用于展示单个ABTI人格类型的卡片
 */

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { PersonalityType } from '../lib/abtiData';

interface PersonalityCardProps {
  personality: PersonalityType;
  index?: number;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export default function PersonalityCard({
  personality,
  index = 0,
  isExpanded = false,
  onToggle,
}: PersonalityCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      <div
        className={`border-2 transition-all duration-300 ${
          isExpanded
            ? 'border-[oklch(0.45_0.22_25)] bg-[oklch(0.98_0.01_30)]'
            : 'border-[oklch(0.82_0.03_75)] bg-white hover:border-[oklch(0.72_0.12_75)]'
        }`}
        style={{
          boxShadow: isExpanded ? '4px 4px 0 oklch(0.45 0.22 25)' : isHovered ? '2px 2px 0 oklch(0.75 0.04 75)' : 'none',
        }}
      >
        {/* Card Header */}
        <div className="flex items-start justify-between p-3 md:p-4">
          <div className="flex items-start gap-3 flex-1">
            <span className="text-3xl md:text-4xl flex-shrink-0">{personality.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono font-bold text-xs md:text-sm text-[oklch(0.45_0.22_25)]">
                  {personality.code}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: `${personality.color}20`, color: personality.color }}>
                  {personality.englishName}
                </span>
              </div>
              <h4 className="font-bold text-sm md:text-base text-[oklch(0.15_0.02_30)] truncate" style={{ fontFamily: "'Playfair Display', serif" }}>
                {personality.name}
              </h4>
              <p className="text-xs md:text-sm text-[oklch(0.55_0.02_30)] italic truncate">
                {personality.tagline}
              </p>
            </div>
          </div>

          {/* Expand indicator */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="flex-shrink-0 ml-2 text-[oklch(0.55_0.02_30)]"
          >
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
          </motion.div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[oklch(0.82_0.03_75)]"
          >
            <div className="p-3 md:p-4 space-y-3">
              {/* Description */}
              <div>
                <p className="text-xs font-mono text-[oklch(0.55_0.02_30)] uppercase tracking-wider mb-1">
                  人格描述
                </p>
                <p className="text-xs md:text-sm text-[oklch(0.25_0.02_30)] leading-relaxed">
                  {personality.description}
                </p>
              </div>

              {/* Investing Style */}
              <div>
                <p className="text-xs font-mono text-[oklch(0.55_0.02_30)] uppercase tracking-wider mb-1">
                  投资风格
                </p>
                <p className="text-xs md:text-sm text-[oklch(0.25_0.02_30)] leading-relaxed">
                  {personality.investingStyle}
                </p>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-mono text-[oklch(0.35_0.12_160)] uppercase tracking-wider mb-1">
                    ✓ 优势
                  </p>
                  <ul className="text-xs text-[oklch(0.25_0.02_30)] space-y-0.5">
                    {personality.strengths.map((s, i) => (
                      <li key={i} className="truncate">• {s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-mono text-[oklch(0.45_0.22_25)] uppercase tracking-wider mb-1">
                    ✗ 弱点
                  </p>
                  <ul className="text-xs text-[oklch(0.25_0.02_30)] space-y-0.5">
                    {personality.weaknesses.map((w, i) => (
                      <li key={i} className="truncate">• {w}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Famous Quote */}
              <div className="bg-[oklch(0.93_0.02_85)] p-2 md:p-3 border-l-3" style={{ borderColor: personality.color }}>
                <p className="text-xs md:text-sm italic text-[oklch(0.25_0.02_30)]">
                  {personality.famousQuote}
                </p>
              </div>

              {/* Compatibility */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[oklch(0.35_0.12_160_/_0.1)] p-2 rounded">
                  <p className="text-[oklch(0.35_0.12_160)] font-bold mb-0.5">💚 最佳搭档</p>
                  <p className="text-[oklch(0.25_0.02_30)] font-mono">{personality.compatibleWith}</p>
                </div>
                <div className="bg-[oklch(0.45_0.22_25_/_0.1)] p-2 rounded">
                  <p className="text-[oklch(0.45_0.22_25)] font-bold mb-0.5">❤️ 天敌</p>
                  <p className="text-[oklch(0.25_0.02_30)] font-mono">{personality.incompatibleWith}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
