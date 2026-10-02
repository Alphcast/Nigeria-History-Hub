import React, { useState } from 'react';
import { LEARN_NIGERIA_QUIZ } from '../../data/education';
import { GraduationCap, CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw, BookOpen } from 'lucide-react';

export const LearnNigeriaSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = LEARN_NIGERIA_QUIZ[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < LEARN_NIGERIA_QUIZ.length - 1) {
      setCurrentIdx((c) => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section id="learn" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-[#0a1810] via-[#07110c] to-[#0d3d2e] p-6 sm:p-10 md:p-12 relative">
        {/* Header */}
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs text-emerald-300 mb-3">
            <GraduationCap className="h-3.5 w-3.5 text-emerald-400" />
            <span className="font-semibold uppercase tracking-wider">Education Mode · Learn Nigeria</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Independence & Heritage Quiz Challenge
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-2">
            Test your knowledge of the people, movements, and milestones that shaped 66 years of sovereign Nigerian history.
          </p>
        </div>

        {/* Quiz Stage */}
        {!quizFinished ? (
          <div className="rounded-2xl border border-white/10 bg-[#145742] p-6 sm:p-8 max-w-3xl shadow-xl">
            {/* Progress Counter */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-stone-400 mb-6">
              <span>Question {currentIdx + 1} of {LEARN_NIGERIA_QUIZ.length}</span>
              <span className="font-mono text-emerald-400">Score: {score}</span>
            </div>

            {/* Question Text */}
            <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-6 leading-snug">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, idx) => {
                let btnStyle = 'border-white/10 bg-black/40 text-stone-200 hover:bg-white/5 hover:border-white/20';

                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'border-emerald-500 bg-emerald-950/80 text-emerald-200 font-semibold';
                  } else if (idx === selectedOption) {
                    btnStyle = 'border-rose-500 bg-rose-950/80 text-rose-200';
                  } else {
                    btnStyle = 'border-white/5 bg-black/20 text-stone-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswered && idx === currentQ.correctIndex && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    )}
                    {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                      <XCircle className="h-4 w-4 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Source Feedback */}
            {isAnswered && (
              <div className="rounded-xl border border-white/10 bg-[#0a2e21]/50 p-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-1">
                  <HelpCircle className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Historical Explanation & Citation</span>
                </div>
                <p className="text-xs text-stone-200 leading-relaxed font-editorial">
                  {currentQ.explanation}
                </p>
                <div className="mt-3 pt-2 border-t border-white/5 text-[10px] text-stone-400 flex items-center gap-1.5">
                  <BookOpen className="h-3 w-3 text-emerald-400" />
                  <span>Verified Source: {currentQ.source}</span>
                </div>
              </div>
            )}

            {/* Next Button */}
            {isAnswered && (
              <button
                onClick={handleNext}
                className="flex items-center justify-center gap-2 w-full sm:w-auto ml-auto rounded-xl bg-[#008751] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#009b5d] transition-colors"
              >
                <span>{currentIdx < LEARN_NIGERIA_QUIZ.length - 1 ? 'Next Question' : 'View Results'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#145742] p-8 max-w-xl text-center shadow-xl">
            <span className="text-4xl mb-3 block">🇳🇬</span>
            <h3 className="font-display text-2xl font-bold text-white">Quiz Completed!</h3>
            <p className="text-sm text-stone-300 mt-2">
              You scored <span className="font-bold text-emerald-400 font-mono text-lg">{score}</span> out of {LEARN_NIGERIA_QUIZ.length}
            </p>
            <p className="text-xs text-stone-400 mt-2 font-editorial italic">
              {score >= 6
                ? 'Outstanding mastery of Nigerian constitutional history and national records!'
                : 'Great effort! Review the archive biographies to discover even more about Nigeria @ 66.'}
            </p>
            <button
              onClick={resetQuiz}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#008751] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#009b5d] transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Retake Quiz</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
