/**
 * ABTI 欢迎页面
 * 设计风格：复古报纸 + 现代金融混搭
 * - 报纸头版风格布局
 * - 红黑双色调
 * - 牛熊市装饰元素
 * - 股票跑马灯
 */

import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, TrendingUp } from 'lucide-react';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663537862835/eaSyok3qyjMgCifbiacqmV/abti-hero-bg-V9czHTzxHMDZiLZpMoW4Lg.webp';

// Ticker items with more variety
const TICKER_ITEMS = [
  '🐂 BRHW 永动机牛人 +9.99%',
  '🧘 BRHL 佛系研究员 -2.34%',
  '🎯 BRCW 涨停板猎手 +9.99%',
  '🌱 BRCL 韭菜进化体 -5.67%',
  '🎰 BPHW 情绪化赌神 +3.21%',
  '⛓️ BPHL 套牢专业户 -18.88%',
  '📱 BPCW 消息面冲锋队 +6.54%',
  '👻 BPCL 散户之魂 -9.99%',
  '🐻 SRHW 做空大师 +7.77%',
  '🔍 SRHL 悲观研究员 -1.23%',
  '🔄 SRCW 反向指标大师 -4.56%',
  '🌋 SRCL 末日预言家 +0.01%',
  '🎲 SPHW 空头赌徒 -9.99%',
  '🛋️ SPHL 躺平投资者 -0.88%',
  '✂️ SPCW 割肉专家 -7.77%',
  '☯️ SPCL 佛系空仓侠 +0.00%',
];

interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  const tickerContent = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].join('   ·   ');

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Noto Serif SC', serif" }}>
      {/* Stock Ticker Bar */}
      <div className="ticker-wrap py-1.5 z-50 sticky top-0">
        <div className="ticker-move text-xs font-mono tracking-wide">
          <span className="px-8">{tickerContent}</span>
          <span className="px-8">{tickerContent}</span>
        </div>
      </div>

      {/* Newspaper Header */}
      <header className="bg-[oklch(0.96_0.02_85)] border-b-4 border-[oklch(0.15_0.02_30)] px-4 py-3">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between text-xs text-[oklch(0.45_0.02_30)] mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <span>大A财经日报 · DA FINANCIAL DAILY</span>
            <span>2026年4月10日 · 第 2026 期</span>
            <span>定价：一个涨停板</span>
          </div>
          <div className="newspaper-divider" />
          <div className="text-center py-2">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[oklch(0.15_0.02_30)] leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
              ABTI
            </h1>
            <div className="flex items-center justify-center gap-3 mt-1">
              <div className="h-px flex-1 bg-[oklch(0.15_0.02_30)]" />
              <p className="text-sm md:text-base font-semibold tracking-[0.3em] text-[oklch(0.45_0.02_30)] uppercase">
                大A人格测试系统
              </p>
              <div className="h-px flex-1 bg-[oklch(0.15_0.02_30)]" />
            </div>
          </div>
          <div className="newspaper-divider" />
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        {/* Hero with background image */}
        <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_BG})` }}
          />
          <div className="absolute inset-0 bg-[oklch(0.08_0.02_30_/_0.72)]" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block stamp-effect mb-6 text-[oklch(0.72_0.12_75)] border-[oklch(0.72_0.12_75)] text-lg md:text-xl">
                ⚡ 重磅发布 · BREAKING NEWS
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                你是哪种<span className="text-[oklch(0.72_0.12_75)]">大A</span>人格？
              </h2>
              
              <p className="text-base md:text-xl text-[oklch(0.88_0.02_85)] max-w-2xl mx-auto mb-8 leading-relaxed">
                20道精心设计的股市场景题目，揭示你在大A市场中的真实人格。
                <br />
                <span className="text-[oklch(0.72_0.12_75)] font-semibold">16种独特类型</span>，看看你是"永动机牛人"还是"佛系空仓侠"？
              </p>
              
              <motion.button
                onClick={onStart}
                className="group inline-flex items-center gap-3 bg-[oklch(0.45_0.22_25)] hover:bg-[oklch(0.38_0.22_25)] text-white font-bold text-lg px-8 py-4 transition-all duration-200"
                style={{ 
                  boxShadow: '4px 4px 0 oklch(0.25 0.15 25)',
                  fontFamily: "'Playfair Display', serif"
                }}
                whileHover={{ transform: 'translate(-2px, -2px)', boxShadow: '6px 6px 0 oklch(0.25 0.15 25)' }}
                whileTap={{ transform: 'translate(0, 0)', boxShadow: '2px 2px 0 oklch(0.25 0.15 25)' }}
              >
                开始测试
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <p className="text-[oklch(0.70_0.02_85)] text-sm mt-4">
                约需 3-5 分钟 · 20道题目 · 完全免费
              </p>
            </motion.div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-[oklch(0.96_0.02_85)] py-12 px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Section header */}
            <div className="text-center mb-10">
              <div className="newspaper-divider" />
              <h3 className="text-2xl md:text-3xl font-black text-[oklch(0.15_0.02_30)] my-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                关于 ABTI 测试
              </h3>
              <div className="newspaper-divider" />
            </div>

            {/* Three columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: '📊',
                  title: '科学框架',
                  desc: '参考MBTI理论框架，结合大A市场特色，设计四个核心维度：多空倾向、决策方式、操作风格、风险承受。',
                },
                {
                  icon: '🎭',
                  title: '16种人格',
                  desc: '从"永动机牛人"到"佛系空仓侠"，16种独特的大A人格类型，每种都有专属的幽默描述和投资建议。',
                },
                {
                  icon: '🎲',
                  title: '随机题库',
                  desc: '60道精心设计的股市场景题目，每次测试随机抽取20道，确保每次体验都不重复。',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="border-2 border-[oklch(0.75_0.04_75)] bg-white p-6"
                  style={{ boxShadow: '3px 3px 0 oklch(0.75 0.04 75)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-lg text-[oklch(0.15_0.02_30)] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-[oklch(0.45_0.02_30)] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Personality type preview */}
            <div className="border-2 border-[oklch(0.15_0.02_30)] p-6 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-5 w-1.5 bg-[oklch(0.45_0.22_25)]" />
                <h4 className="font-bold text-lg text-[oklch(0.15_0.02_30)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  16种大A人格预览
                </h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { code: 'BRHW', name: '永动机牛人', emoji: '🐂' },
                  { code: 'BRHL', name: '佛系研究员', emoji: '🧘' },
                  { code: 'BRCW', name: '涨停板猎手', emoji: '🎯' },
                  { code: 'BRCL', name: '韭菜进化体', emoji: '🌱' },
                  { code: 'BPHW', name: '情绪化赌神', emoji: '🎰' },
                  { code: 'BPHL', name: '套牢专业户', emoji: '⛓️' },
                  { code: 'BPCW', name: '消息面冲锋队', emoji: '📱' },
                  { code: 'BPCL', name: '散户之魂', emoji: '👻' },
                  { code: 'SRHW', name: '做空大师', emoji: '🐻' },
                  { code: 'SRHL', name: '悲观研究员', emoji: '🔍' },
                  { code: 'SRCW', name: '反向指标大师', emoji: '🔄' },
                  { code: 'SRCL', name: '末日预言家', emoji: '🌋' },
                  { code: 'SPHW', name: '空头赌徒', emoji: '🎲' },
                  { code: 'SPHL', name: '躺平投资者', emoji: '🛋️' },
                  { code: 'SPCW', name: '割肉专家', emoji: '✂️' },
                  { code: 'SPCL', name: '佛系空仓侠', emoji: '☯️' },
                ].map((type) => (
                  <div
                    key={type.code}
                    className="flex items-center gap-2 p-2 border border-[oklch(0.88_0.03_85)] hover:border-[oklch(0.45_0.22_25)] hover:bg-[oklch(0.97_0.01_85)] transition-colors"
                  >
                    <span className="text-lg">{type.emoji}</span>
                    <div>
                      <div className="text-xs font-mono font-bold text-[oklch(0.45_0.22_25)]">{type.code}</div>
                      <div className="text-xs text-[oklch(0.35_0.02_30)]">{type.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 border border-[oklch(0.75_0.04_75)] bg-[oklch(0.93_0.02_85)]">
              <p className="text-xs text-[oklch(0.50_0.02_30)] leading-relaxed text-center">
                ⚠️ <strong>免责声明：</strong>本测试仅供娱乐参考，不构成任何投资建议。股市有风险，入市需谨慎。
                测试结果中的"投资建议"均为幽默表达，请勿据此进行实际投资操作。
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <TrendingUp className="w-6 h-6 text-[oklch(0.45_0.22_25)]" />
                <span className="text-lg font-bold text-[oklch(0.15_0.02_30)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  准备好发现你的大A人格了吗？
                </span>
                <TrendingDown className="w-6 h-6 text-[oklch(0.35_0.12_160)]" />
              </div>
              <motion.button
                onClick={onStart}
                className="group inline-flex items-center gap-3 bg-[oklch(0.15_0.02_30)] hover:bg-[oklch(0.25_0.02_30)] text-[oklch(0.96_0.02_85)] font-bold text-base px-8 py-3 transition-all duration-200"
                style={{ 
                  boxShadow: '4px 4px 0 oklch(0.45 0.22 25)',
                  fontFamily: "'Playfair Display', serif"
                }}
                whileHover={{ transform: 'translate(-2px, -2px)', boxShadow: '6px 6px 0 oklch(0.45 0.22 25)' }}
                whileTap={{ transform: 'translate(0, 0)', boxShadow: '2px 2px 0 oklch(0.45 0.22 25)' }}
              >
                立即开始测试
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[oklch(0.15_0.02_30)] text-[oklch(0.70_0.02_85)] text-xs py-4 px-4 text-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <p>© 2026 ABTI大A人格测试 · 仅供娱乐 · 不构成投资建议</p>
      </footer>
    </div>
  );
}
