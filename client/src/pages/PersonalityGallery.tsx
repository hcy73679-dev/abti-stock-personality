/**
 * 人格卡片展示页面
 * 展示所有16种人格类型的详细信息
 */

import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { useState } from 'react';
import PersonalityCard from '../components/PersonalityCard';
import { personalityTypes } from '../lib/abtiData';

interface PersonalityGalleryProps {
  onBack: () => void;
}

export default function PersonalityGallery({ onBack }: PersonalityGalleryProps) {
  const [expandedCode, setExpandedCode] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDim, setFilterDim] = useState<string | null>(null);

  const personalitiesList = Object.values(personalityTypes);

  // Filter personalities based on search and dimension
  const filteredPersonalities = personalitiesList.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDim = !filterDim || p.code.includes(filterDim);

    return matchesSearch && matchesDim;
  });

  const dimensions = [
    { key: 'B', label: '🐂 多头', color: 'oklch(0.45 0.22 25)' },
    { key: 'S', label: '🐻 空头', color: 'oklch(0.35 0.12 160)' },
    { key: 'R', label: '📊 研究', color: 'oklch(0.72 0.12 75)' },
    { key: 'P', label: '💭 情绪', color: 'oklch(0.72 0.12 75)' },
    { key: 'H', label: '⏳ 持有', color: 'oklch(0.72 0.12 75)' },
    { key: 'C', label: '⚡ 追涨', color: 'oklch(0.72 0.12 75)' },
    { key: 'W', label: '🏆 赢家', color: 'oklch(0.72 0.12 75)' },
    { key: 'L', label: '🛡️ 接受', color: 'oklch(0.72 0.12 75)' },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Noto Serif SC', serif" }}>
      {/* Header */}
      <header className="bg-[oklch(0.15_0.02_30)] text-[oklch(0.96_0.02_85)] px-4 py-3 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-sm text-[oklch(0.72_0.12_75)] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </button>
          <span className="text-xs font-mono text-[oklch(0.70_0.02_85)]">16种人格类型图鉴</span>
          <div className="w-20" />
        </div>
      </header>

      <main className="flex-1 bg-[oklch(0.96_0.02_85)] px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <div className="newspaper-divider" />
            <h2 className="text-3xl md:text-4xl font-black text-[oklch(0.15_0.02_30)] my-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              16种大A人格类型
            </h2>
            <p className="text-[oklch(0.55_0.02_30)] text-sm mb-4">
              点击卡片展开详细信息，发现你最感兴趣的人格类型
            </p>
            <div className="newspaper-divider" />
          </div>

          {/* Search Bar */}
          <motion.div
            className="mb-6 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[oklch(0.55_0.02_30)]" />
              <input
                type="text"
                placeholder="搜索人格名称或代码..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[oklch(0.82_0.03_75)] bg-white text-[oklch(0.15_0.02_30)] placeholder-[oklch(0.55_0.02_30)] focus:outline-none focus:border-[oklch(0.45_0.22_25)]"
              />
            </div>
          </motion.div>

          {/* Dimension Filters */}
          <motion.div
            className="mb-6 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <button
              onClick={() => setFilterDim(null)}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-all ${
                filterDim === null
                  ? 'bg-[oklch(0.15_0.02_30)] text-white'
                  : 'bg-white border border-[oklch(0.82_0.03_75)] text-[oklch(0.55_0.02_30)] hover:border-[oklch(0.45_0.22_25)]'
              }`}
            >
              全部
            </button>
            {dimensions.slice(0, 4).map((dim) => (
              <button
                key={dim.key}
                onClick={() => setFilterDim(filterDim === dim.key ? null : dim.key)}
                className={`px-3 py-1.5 text-xs font-mono rounded transition-all ${
                  filterDim === dim.key
                    ? 'text-white'
                    : 'bg-white border border-[oklch(0.82_0.03_75)] text-[oklch(0.55_0.02_30)] hover:border-[oklch(0.45_0.22_25)]'
                }`}
                style={{
                  backgroundColor: filterDim === dim.key ? dim.color : undefined,
                }}
              >
                {dim.label}
              </button>
            ))}
          </motion.div>

          {/* Personalities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {filteredPersonalities.map((personality, index) => (
              <PersonalityCard
                key={personality.code}
                personality={personality}
                index={index}
                isExpanded={expandedCode === personality.code}
                onToggle={() =>
                  setExpandedCode(expandedCode === personality.code ? null : personality.code)
                }
              />
            ))}
          </div>

          {/* No Results */}
          {filteredPersonalities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[oklch(0.55_0.02_30)] text-sm">
                未找到匹配的人格类型，试试其他搜索词？
              </p>
            </div>
          )}

          {/* Stats */}
          <div className="bg-white border-2 border-[oklch(0.15_0.02_30)] p-6 text-center">
            <p className="text-sm text-[oklch(0.55_0.02_30)] mb-2">
              显示 {filteredPersonalities.length} / {personalitiesList.length} 种人格类型
            </p>
            <p className="text-xs text-[oklch(0.70_0.02_85)] font-mono">
              每种人格都是独特的，没有好坏之分，只有不同的选择和风格。
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[oklch(0.15_0.02_30)] text-[oklch(0.70_0.02_85)] text-xs py-4 px-4 text-center font-mono">
        <p>© 2026 ABTI大A人格测试 · 仅供娱乐 · 不构成投资建议</p>
      </footer>
    </div>
  );
}
