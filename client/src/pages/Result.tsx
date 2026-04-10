/**
 * ABTI 结果页面
 * 设计风格：复古报纸 + 现代金融混搭
 * - 报纸头版风格的人格揭示
 * - 印章效果的人格类型展示
 * - 详细的人格分析和投资建议
 * - 分享功能
 */

import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, Share2, TrendingDown, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { PersonalityType } from '../lib/abtiData';
import { getTestHistory } from '../lib/abtiData';

const CARD_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537862835/eaSyok3qyjMgCifbiacqmV/abti-personality-card-bg-AivgdCWUhJAYtry6meNphs.webp';

interface ResultProps {
  personality: PersonalityType;
  onRetake: () => void;
  onHome: () => void;
}

// Dimension labels
const DIMENSION_LABELS: Record<string, { label: string; desc: string; icon: string }> = {
  B: { label: '多头倾向', desc: '看多市场，积极参与', icon: '🐂' },
  S: { label: '空头倾向', desc: '谨慎保守，规避风险', icon: '🐻' },
  R: { label: '研究驱动', desc: '数据分析，理性决策', icon: '📊' },
  P: { label: '情绪驱动', desc: '直觉感性，情绪化操作', icon: '💭' },
  H: { label: '持有风格', desc: '长期持有，耐心等待', icon: '⏳' },
  C: { label: '追涨风格', desc: '快进快出，追逐热点', icon: '⚡' },
  W: { label: '赢家心态', desc: '追求高收益，承受高风险', icon: '🏆' },
  L: { label: '亏损接受', desc: '接受亏损，注重风控', icon: '🛡️' },
};

export default function Result({ personality, onRetake, onHome }: ResultProps) {
  const [showStamp, setShowStamp] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [copied, setCopied] = useState(false);
  const history = getTestHistory();

  useEffect(() => {
    const t1 = setTimeout(() => setShowStamp(true), 400);
    const t2 = setTimeout(() => setShowContent(true), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleShare = async () => {
    const text = `我的ABTI大A人格测试结果：${personality.emoji} ${personality.name}（${personality.code}）\n"${personality.tagline}"\n快来测测你是哪种大A人格！`;
    
    if (navigator.share) {
      try {
        await navigator.share({ title: 'ABTI大A人格测试', text });
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {}
    }
  };

  // Parse dimensions from code
  const dims = personality.code.split('');
  const dim1 = dims[0]; // B or S
  const dim2 = dims[1]; // R or P
  const dim3 = dims[2]; // H or C
  const dim4 = dims[3]; // W or L

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Noto Serif SC', serif" }}>
      {/* Header */}
      <header className="bg-[oklch(0.15_0.02_30)] text-[oklch(0.96_0.02_85)] px-4 py-3 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onHome}
            className="flex items-center gap-1.5 text-sm text-[oklch(0.72_0.12_75)] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </button>
          <span className="text-xs font-mono text-[oklch(0.70_0.02_85)]">ABTI 测试结果</span>
          <button
            onClick={onRetake}
            className="flex items-center gap-1.5 text-sm text-[oklch(0.72_0.12_75)] hover:text-white transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            重新测试
          </button>
        </div>
      </header>

      <main className="flex-1 bg-[oklch(0.96_0.02_85)]">
        <div className="max-w-4xl mx-auto px-4 py-8">
          
          {/* Newspaper headline */}
          <div className="text-center mb-6">
            <div className="newspaper-divider" />
            <p className="text-xs font-mono text-[oklch(0.55_0.02_30)] uppercase tracking-widest my-2">
              大A财经日报 · 人格特刊 · 独家报道
            </p>
            <div className="newspaper-divider" />
            <h2 className="text-2xl md:text-4xl font-black text-[oklch(0.15_0.02_30)] my-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              测试结果已出炉！
            </h2>
            <div className="newspaper-divider" />
          </div>

          {/* Main Result Card */}
          <motion.div
            className="relative overflow-hidden border-2 border-[oklch(0.15_0.02_30)] mb-8"
            style={{ boxShadow: '6px 6px 0 oklch(0.15 0.02 30)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Card background */}
            <div className="relative min-h-[280px] md:min-h-[320px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${CARD_BG})` }}
              />
              <div className="absolute inset-0 bg-[oklch(0.08_0.02_30_/_0.82)]" />
              
              <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Emoji & Code */}
                <div className="text-center flex-shrink-0">
                  <motion.div
                    className="text-7xl md:text-8xl mb-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    {personality.emoji}
                  </motion.div>
                  
                  {showStamp && (
                    <motion.div
                      className="inline-block border-3 border-[oklch(0.72_0.12_75)] px-4 py-2 stamp-animate"
                      style={{ 
                        border: '3px solid oklch(0.72 0.12 75)',
                        transform: 'rotate(-3deg)',
                        color: 'oklch(0.72 0.12 75)',
                      }}
                    >
                      <div className="text-2xl md:text-3xl font-black font-mono tracking-widest">
                        {personality.code}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Name & Description */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-[oklch(0.72_0.12_75)] text-sm font-mono uppercase tracking-widest mb-2">
                    你的大A人格类型
                  </p>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {personality.name}
                  </h3>
                  <div className="inline-block bg-[oklch(0.45_0.22_25_/_0.9)] px-4 py-2 mb-4">
                    <p className="text-white text-sm md:text-base italic font-medium">
                      "{personality.tagline}"
                    </p>
                  </div>
                  <p className="text-[oklch(0.82_0.02_85)] text-sm md:text-base leading-relaxed">
                    {personality.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Dimension Analysis */}
              <div className="bg-white border-2 border-[oklch(0.15_0.02_30)] mb-6" style={{ boxShadow: '4px 4px 0 oklch(0.75 0.04 75)' }}>
                <div className="bg-[oklch(0.15_0.02_30)] px-5 py-3">
                  <h4 className="text-white font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    📐 人格维度分析
                  </h4>
                </div>
                <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[dim1, dim2, dim3, dim4].map((dim, idx) => {
                    const dimInfo = DIMENSION_LABELS[dim];
                    const opposites: Record<string, string> = { B: 'S', S: 'B', R: 'P', P: 'R', H: 'C', C: 'H', W: 'L', L: 'W' };
                    const opposite = DIMENSION_LABELS[opposites[dim]];
                    const labels = [
                      ['多头 B', '空头 S'],
                      ['研究 R', '情绪 P'],
                      ['持有 H', '追涨 C'],
                      ['赢家 W', '接受 L'],
                    ];
                    
                    return (
                      <div key={idx} className="border border-[oklch(0.85_0.03_75)] p-3">
                        <div className="text-2xl mb-1">{dimInfo.icon}</div>
                        <div className="text-xs font-mono text-[oklch(0.45_0.22_25)] font-bold mb-1">
                          维度 {idx + 1}
                        </div>
                        <div className="font-bold text-[oklch(0.15_0.02_30)] text-sm mb-1">
                          {dimInfo.label}
                        </div>
                        <div className="text-xs text-[oklch(0.55_0.02_30)]">{dimInfo.desc}</div>
                        
                        {/* Mini bar */}
                        <div className="mt-2 flex items-center gap-1">
                          <span className="text-xs font-mono text-[oklch(0.55_0.02_30)]">{labels[idx][0]}</span>
                          <div className="flex-1 h-1.5 bg-[oklch(0.88_0.03_85)] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[oklch(0.45_0.22_25)] rounded-full"
                              style={{ width: ['B', 'R', 'H', 'W'].includes(dim) ? '70%' : '30%' }}
                            />
                          </div>
                          <span className="text-xs font-mono text-[oklch(0.55_0.02_30)]">{labels[idx][1]}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Strengths */}
                <div className="bg-white border-2 border-[oklch(0.15_0.02_30)]" style={{ boxShadow: '3px 3px 0 oklch(0.75 0.04 75)' }}>
                  <div className="bg-[oklch(0.35_0.12_160)] px-5 py-3">
                    <h4 className="text-white font-bold flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      <TrendingUp className="w-4 h-4" />
                      优势特质
                    </h4>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2">
                      {personality.strengths.map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[oklch(0.25_0.02_30)]">
                          <span className="text-[oklch(0.35_0.12_160)] font-bold mt-0.5">▲</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Weaknesses */}
                <div className="bg-white border-2 border-[oklch(0.15_0.02_30)]" style={{ boxShadow: '3px 3px 0 oklch(0.75 0.04 75)' }}>
                  <div className="bg-[oklch(0.45_0.22_25)] px-5 py-3">
                    <h4 className="text-white font-bold flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      <TrendingDown className="w-4 h-4" />
                      需要注意
                    </h4>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2">
                      {personality.weaknesses.map((w, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[oklch(0.25_0.02_30)]">
                          <span className="text-[oklch(0.45_0.22_25)] font-bold mt-0.5">▼</span>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Investing Style & Advice */}
              <div className="bg-white border-2 border-[oklch(0.15_0.02_30)] mb-6" style={{ boxShadow: '4px 4px 0 oklch(0.75 0.04 75)' }}>
                <div className="bg-[oklch(0.72_0.12_75)] px-5 py-3">
                  <h4 className="text-[oklch(0.15_0.02_30)] font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    💼 投资风格 & 专属建议
                  </h4>
                </div>
                <div className="p-5 space-y-4">
                  <div className="border-l-4 border-[oklch(0.72_0.12_75)] pl-4">
                    <p className="text-xs font-mono text-[oklch(0.55_0.02_30)] uppercase tracking-wider mb-1">投资风格</p>
                    <p className="text-[oklch(0.20_0.02_30)] leading-relaxed">{personality.investingStyle}</p>
                  </div>
                  <div className="border-l-4 border-[oklch(0.45_0.22_25)] pl-4">
                    <p className="text-xs font-mono text-[oklch(0.55_0.02_30)] uppercase tracking-wider mb-1">专属建议</p>
                    <p className="text-[oklch(0.20_0.02_30)] leading-relaxed">{personality.stockAdvice}</p>
                  </div>
                </div>
              </div>

              {/* Famous Quote */}
              <div className="bg-[oklch(0.15_0.02_30)] border-2 border-[oklch(0.15_0.02_30)] mb-6 p-6" style={{ boxShadow: '4px 4px 0 oklch(0.45 0.22 25)' }}>
                <p className="text-xs font-mono text-[oklch(0.72_0.12_75)] uppercase tracking-widest mb-3">
                  — 你最可能说的话 —
                </p>
                <blockquote className="text-xl md:text-2xl text-white font-bold italic leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {personality.famousQuote}
                </blockquote>
              </div>

              {/* Compatibility */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border-2 border-[oklch(0.75_0.04_75)] p-4">
                  <p className="text-xs font-mono text-[oklch(0.55_0.02_30)] uppercase tracking-wider mb-2">💚 最佳搭档</p>
                  <p className="font-bold text-[oklch(0.35_0.12_160)] text-lg font-mono">{personality.compatibleWith}</p>
                  <p className="text-xs text-[oklch(0.55_0.02_30)] mt-1">互补型人格，共同进步</p>
                </div>
                <div className="bg-white border-2 border-[oklch(0.75_0.04_75)] p-4">
                  <p className="text-xs font-mono text-[oklch(0.55_0.02_30)] uppercase tracking-wider mb-2">❤️ 最大天敌</p>
                  <p className="font-bold text-[oklch(0.45_0.22_25)] text-lg font-mono">{personality.incompatibleWith}</p>
                  <p className="text-xs text-[oklch(0.55_0.02_30)] mt-1">相克型人格，观点相左</p>
                </div>
              </div>

              {/* History */}
              {history.length > 1 && (
                <div className="bg-white border-2 border-[oklch(0.75_0.04_75)] mb-6 p-5">
                  <h4 className="font-bold text-[oklch(0.15_0.02_30)] mb-3 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    📋 历史测试记录
                  </h4>
                  <div className="space-y-2">
                    {history.slice(0, 5).map((h, i) => (
                      <div key={i} className="flex items-center justify-between text-sm border-b border-[oklch(0.92_0.02_85)] pb-2 last:border-0">
                        <span className="font-mono font-bold text-[oklch(0.45_0.22_25)]">{h.code}</span>
                        <span className="text-[oklch(0.55_0.02_30)] text-xs">{h.date}</span>
                        {i === 0 && <span className="text-xs bg-[oklch(0.45_0.22_25)] text-white px-2 py-0.5">最新</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={onRetake}
                  className="flex items-center justify-center gap-2 bg-[oklch(0.15_0.02_30)] text-[oklch(0.96_0.02_85)] font-bold px-8 py-3 hover:bg-[oklch(0.25_0.02_30)] transition-colors"
                  style={{ 
                    boxShadow: '4px 4px 0 oklch(0.45 0.22 25)',
                    fontFamily: "'Playfair Display', serif"
                  }}
                  whileHover={{ transform: 'translate(-2px, -2px)', boxShadow: '6px 6px 0 oklch(0.45 0.22 25)' }}
                  whileTap={{ transform: 'translate(0, 0)', boxShadow: '2px 2px 0 oklch(0.45 0.22 25)' }}
                >
                  <RefreshCw className="w-4 h-4" />
                  重新测试
                </motion.button>
                
                <motion.button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 bg-[oklch(0.45_0.22_25)] text-white font-bold px-8 py-3 hover:bg-[oklch(0.38_0.22_25)] transition-colors"
                  style={{ 
                    boxShadow: '4px 4px 0 oklch(0.25 0.15 25)',
                    fontFamily: "'Playfair Display', serif"
                  }}
                  whileHover={{ transform: 'translate(-2px, -2px)', boxShadow: '6px 6px 0 oklch(0.25 0.15 25)' }}
                  whileTap={{ transform: 'translate(0, 0)', boxShadow: '2px 2px 0 oklch(0.25 0.15 25)' }}
                >
                  <Share2 className="w-4 h-4" />
                  {copied ? '已复制到剪贴板！' : '分享结果'}
                </motion.button>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 p-4 border border-[oklch(0.75_0.04_75)] bg-[oklch(0.93_0.02_85)]">
                <p className="text-xs text-[oklch(0.50_0.02_30)] leading-relaxed text-center">
                  ⚠️ <strong>免责声明：</strong>本测试仅供娱乐，不构成任何投资建议。股市有风险，入市需谨慎。
                  测试结果中的所有"投资建议"均为幽默表达，请勿据此进行实际投资操作。
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[oklch(0.15_0.02_30)] text-[oklch(0.70_0.02_85)] text-xs py-4 px-4 text-center font-mono">
        <p>© 2026 ABTI大A人格测试 · 仅供娱乐 · 不构成投资建议</p>
      </footer>
    </div>
  );
}
