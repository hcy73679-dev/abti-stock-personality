/**
 * ABTI 加载/计算页面
 * 在测试完成后显示，模拟"分析中"效果
 */

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ANALYSIS_STEPS = [
  '正在分析您的多空倾向...',
  '评估决策方式与情绪指数...',
  '计算操作风格特征...',
  '测量风险承受能力...',
  '匹配16种大A人格类型...',
  '生成专属人格报告...',
];

interface LoadingProps {
  onComplete: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= ANALYSIS_STEPS.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return prev;
        }
        return prev + 1;
      });
      setProgress((prev) => Math.min(prev + 100 / ANALYSIS_STEPS.length, 100));
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[oklch(0.15_0.02_30)] px-4">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-black text-[oklch(0.72_0.12_75)] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            ABTI
          </h1>
          <p className="text-[oklch(0.60_0.02_85)] text-sm font-mono">正在分析您的大A人格...</p>
        </motion.div>

        {/* Animated chart */}
        <div className="flex items-end justify-center gap-1 h-16 mb-8">
          {[3, 7, 5, 9, 4, 8, 6, 10, 5, 7, 3, 8, 6, 9, 4].map((h, i) => (
            <motion.div
              key={i}
              className="w-3 rounded-sm"
              style={{ 
                backgroundColor: i % 3 === 0 ? 'oklch(0.45 0.22 25)' : 'oklch(0.35 0.12 160)',
                height: `${h * 5}%`,
              }}
              animate={{ 
                height: [`${h * 5}%`, `${(h + Math.random() * 3 - 1.5) * 5}%`, `${h * 5}%`],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ 
                duration: 0.8 + Math.random() * 0.4,
                repeat: Infinity,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>

        {/* Progress */}
        <div className="bg-[oklch(0.25_0.02_30)] h-2 mb-4 overflow-hidden">
          <motion.div
            className="h-full bg-[oklch(0.72_0.12_75)]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Current step */}
        <motion.p
          key={step}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[oklch(0.80_0.02_85)] text-sm font-mono"
        >
          {ANALYSIS_STEPS[step]}
        </motion.p>

        {/* Steps list */}
        <div className="mt-6 space-y-1.5">
          {ANALYSIS_STEPS.map((s, i) => (
            <div key={i} className={`flex items-center gap-2 text-xs font-mono transition-colors ${
              i < step ? 'text-[oklch(0.72_0.12_75)]' : i === step ? 'text-white' : 'text-[oklch(0.40_0.02_85)]'
            }`}>
              <span>{i < step ? '✓' : i === step ? '▶' : '○'}</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
