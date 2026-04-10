/**
 * ABTI 大A人格测试 - 主应用
 * 设计风格：复古报纸 + 现代金融混搭
 * 
 * 页面流程：Welcome → Quiz → Loading → Result
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import {
  calculatePersonality,
  getPersonalityType,
  getRandomQuestions,
  saveTestResult,
  type PersonalityType,
  type Question
} from "./lib/abtiData";
import Loading from "./pages/Loading";
import NotFound from "./pages/NotFound";
import PersonalityGallery from "./pages/PersonalityGallery";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Welcome from "./pages/Welcome";

type AppPage = 'welcome' | 'quiz' | 'loading' | 'result' | 'gallery';

function AppContent() {
  const [page, setPage] = useState<AppPage>('welcome');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [result, setResult] = useState<PersonalityType | null>(null);
  const [pendingAnswers, setPendingAnswers] = useState<Record<number, 'A' | 'B'>>({});

  const handleStart = () => {
    const randomQuestions = getRandomQuestions(20);
    setQuestions(randomQuestions);
    setPage('quiz');
  };

  const handleComplete = (answers: Record<number, 'A' | 'B'>) => {
    setPendingAnswers(answers);
    setPage('loading');
  };

  const handleLoadingComplete = () => {
    const code = calculatePersonality(pendingAnswers, questions);
    const personality = getPersonalityType(code);
    setResult(personality);
    
    // Save to local storage
    saveTestResult({
      code,
      date: new Date().toLocaleDateString('zh-CN'),
      answers: pendingAnswers,
    });
    
    setPage('result');
  };

  const handleRetake = () => {
    const randomQuestions = getRandomQuestions(20);
    setQuestions(randomQuestions);
    setResult(null);
    setPendingAnswers({});
    setPage('quiz');
  };

  const handleHome = () => {
    setPage('welcome');
    setResult(null);
    setQuestions([]);
    setPendingAnswers({});
  };

  const handleViewGallery = () => {
    setPage('gallery');
  };

  return (
    <AnimatePresence mode="wait">
      {page === 'welcome' && (
        <motion.div
          key="welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Welcome onStart={handleStart} onViewGallery={handleViewGallery} />
        </motion.div>
      )}
      
      {page === 'quiz' && questions.length > 0 && (
        <motion.div
          key="quiz"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
        >
          <Quiz
            questions={questions}
            onComplete={handleComplete}
            onBack={handleHome}
          />
        </motion.div>
      )}

      {page === 'loading' && (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Loading onComplete={handleLoadingComplete} />
        </motion.div>
      )}
      
      {page === 'result' && result && (
        <motion.div
          key="result"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Result
            personality={result}
            onRetake={handleRetake}
            onHome={handleHome}
          />
        </motion.div>
      )}

      {page === 'gallery' && (
        <motion.div
          key="gallery"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.3 }}
        >
          <PersonalityGallery onBack={handleHome} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Switch>
            <Route path="/" component={AppContent} />
            <Route component={NotFound} />
          </Switch>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
