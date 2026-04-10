/**
 * ABTI 测试页面
 * 设计风格：复古报纸 + 现代金融混搭
 * - 报纸专栏式题目展示
 * - 进度条和题目编号
 * - 选项卡片动画效果
 * - 平滑题目切换动画
 */

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { Question } from '../lib/abtiData';

interface QuizProps {
  questions: Question[];
  onComplete: (answers: Record<number, 'A' | 'B'>) => void;
  onBack: () => void;
}

export default function Quiz({ questions, onComplete, onBack }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({});
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;

  useEffect(() => {
    // Restore answer if going back
    const existingAnswer = answers[currentQuestion.id];
    setSelectedOption(existingAnswer || null);
  }, [currentIndex, currentQuestion.id, answers]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleSelect = (option: 'A' | 'B') => {
    if (isAnimating) return;
    setSelectedOption(option);
    
    const newAnswers = { ...answers, [currentQuestion.id]: option };
    setAnswers(newAnswers);

    // Auto-advance after a short delay
    timerRef.current = setTimeout(() => {
      if (isLastQuestion) {
        onComplete(newAnswers);
      } else {
        setDirection('forward');
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setIsAnimating(false);
        }, 300);
      }
    }, 500);
  };

  const handlePrev = () => {
    if (currentIndex > 0 && !isAnimating) {
      if (timerRef.current) clearTimeout(timerRef.current);
      setDirection('back');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (selectedOption && !isAnimating) {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (isLastQuestion) {
        onComplete(answers);
      } else {
        setDirection('forward');
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setIsAnimating(false);
        }, 300);
      }
    }
  };

  const variants = {
    enter: (dir: string) => ({
      x: dir === 'forward' ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: string) => ({
      x: dir === 'forward' ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Noto Serif SC', serif" }}>
      {/* Header */}
      <header className="bg-[oklch(0.15_0.02_30)] text-[oklch(0.96_0.02_85)] px-4 py-3 sticky top-0 z-40">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-sm text-[oklch(0.72_0.12_75)] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </button>
          <div className="text-center">
            <span className="text-xs font-mono text-[oklch(0.70_0.02_85)]">ABTI 大A人格测试</span>
          </div>
          <div className="text-sm font-mono text-[oklch(0.72_0.12_75)]">
            {currentIndex + 1} / {questions.length}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-[oklch(0.88_0.03_85)] h-2">
        <div
          className="progress-fill h-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Steps */}
      <div className="bg-[oklch(0.96_0.02_85)] border-b border-[oklch(0.85_0.03_75)] px-4 py-2">
        <div className="max-w-3xl mx-auto flex items-center gap-1 overflow-x-auto">
          {questions.map((_, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 h-1.5 rounded-full transition-all duration-300 ${
                idx < currentIndex
                  ? 'bg-[oklch(0.45_0.22_25)] w-4'
                  : idx === currentIndex
                  ? 'bg-[oklch(0.45_0.22_25)] w-6'
                  : 'bg-[oklch(0.82_0.03_75)] w-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            >
              {/* Question Card */}
              <div className="bg-white border-2 border-[oklch(0.15_0.02_30)]" style={{ boxShadow: '5px 5px 0 oklch(0.15 0.02 30)' }}>
                {/* Card Header */}
                <div className="bg-[oklch(0.15_0.02_30)] px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[oklch(0.72_0.12_75)] font-mono text-sm font-bold">
                      Q.{String(currentIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="text-white text-sm">{currentQuestion.scenario}</span>
                  </div>
                  <span className="text-[oklch(0.55_0.02_85)] text-xs font-mono">
                    剩余 {questions.length - currentIndex - 1} 题
                  </span>
                </div>

                {/* Question Text */}
                <div className="px-6 py-6 border-b-2 border-dashed border-[oklch(0.82_0.03_75)]">
                  <p className="text-xl md:text-2xl font-bold text-[oklch(0.15_0.02_30)] leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {currentQuestion.text}
                  </p>
                </div>

                {/* Options */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-[oklch(0.55_0.02_30)] font-mono mb-4 uppercase tracking-widest">
                    — 请选择最符合你的选项 —
                  </p>
                  
                  {(['A', 'B'] as const).map((option) => {
                    const isSelected = selectedOption === option;
                    const optionData = currentQuestion.options[option];
                    
                    return (
                      <motion.button
                        key={option}
                        onClick={() => handleSelect(option)}
                        className={`option-btn w-full text-left p-4 md:p-5 flex items-start gap-4 ${isSelected ? 'selected' : ''}`}
                        whileTap={{ scale: 0.99 }}
                      >
                        {/* Option Label */}
                        <div className={`flex-shrink-0 w-9 h-9 flex items-center justify-center font-black text-base border-2 transition-colors ${
                          isSelected 
                            ? 'border-white text-white bg-transparent' 
                            : 'border-[oklch(0.45_0.22_25)] text-[oklch(0.45_0.22_25)]'
                        }`} style={{ fontFamily: "'Playfair Display', serif" }}>
                          {option}
                        </div>
                        
                        {/* Option Text */}
                        <div className="flex-1 pt-1">
                          <p className={`text-base leading-relaxed font-medium ${
                            isSelected ? 'text-white' : 'text-[oklch(0.20_0.02_30)]'
                          }`}>
                            {optionData.text}
                          </p>
                        </div>

                        {/* Check indicator */}
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mt-1"
                          >
                            <div className="w-3 h-3 rounded-full bg-[oklch(0.45_0.22_25)]" />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 bg-[oklch(0.96_0.02_85)] border-t border-[oklch(0.85_0.03_75)] flex items-center justify-between">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="flex items-center gap-1.5 text-sm text-[oklch(0.50_0.02_30)] hover:text-[oklch(0.15_0.02_30)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    上一题
                  </button>

                  <div className="text-xs text-[oklch(0.55_0.02_30)] font-mono">
                    {selectedOption ? '已选择，自动跳转中...' : '请选择一个选项'}
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={!selectedOption}
                    className="flex items-center gap-1.5 text-sm font-semibold text-[oklch(0.45_0.22_25)] hover:text-[oklch(0.35_0.22_25)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLastQuestion ? '查看结果' : '下一题'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Answered count */}
          <div className="mt-4 text-center">
            <span className="text-xs text-[oklch(0.55_0.02_30)] font-mono">
              已回答 {Object.keys(answers).length} / {questions.length} 题
              {Object.keys(answers).length === questions.length && (
                <span className="text-[oklch(0.45_0.22_25)] ml-2">· 全部完成！</span>
              )}
            </span>
          </div>
        </div>
      </main>

      {/* Bottom hint */}
      <div className="bg-[oklch(0.15_0.02_30)] text-[oklch(0.55_0.02_85)] text-xs py-2 px-4 text-center font-mono">
        选择后自动跳转下一题 · 可随时返回修改答案
      </div>
    </div>
  );
}
