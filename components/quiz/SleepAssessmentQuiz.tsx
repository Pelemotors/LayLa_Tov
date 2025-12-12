'use client';

import React, { useState, useEffect } from 'react';
import { quizQuestions, quizResults, calculateTier } from '@/lib/quizData';
import { QuizQuestion } from './QuizQuestion';
import { QuizResult } from './QuizResult';

interface QuizState {
  currentQuestionIndex: number;
  answers: (number | null)[];
  isComplete: boolean;
  score: number | null;
  tier: 1 | 2 | 3 | null;
}

export const SleepAssessmentQuiz: React.FC = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: new Array(quizQuestions.length).fill(null),
    isComplete: false,
    score: null,
    tier: null,
  });

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('quiz_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setState(parsed);
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (state.currentQuestionIndex > 0) {
      localStorage.setItem('quiz_progress', JSON.stringify(state));
    }
  }, [state]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...state.answers];
    newAnswers[state.currentQuestionIndex] = answerIndex;

    // Track event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'sleep_quiz_question_answered', {
        event_category: 'engagement',
        event_label: `question_${state.currentQuestionIndex + 1}`,
      });
    }

    setState({
      ...state,
      answers: newAnswers,
    });
  };

  const handleNext = () => {
    if (state.currentQuestionIndex < quizQuestions.length - 1) {
      setState({
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      });
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (state.currentQuestionIndex > 0) {
      setState({
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
      });
    }
  };

  const handleComplete = () => {
    // Calculate score (only questions 2-7, skip question 1)
    let score = 0;
    for (let i = 1; i < quizQuestions.length; i++) {
      const answerIndex = state.answers[i];
      if (answerIndex !== null) {
        score += quizQuestions[i].answers[answerIndex].score;
      }
    }

    const tier = calculateTier(score);

    // Track events
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'sleep_quiz_completed', {
        event_category: 'engagement',
        event_label: `tier_${tier}`,
      });

      window.gtag('event', `sleep_quiz_result_tier_${tier}`, {
        event_category: 'engagement',
        event_label: `score_${score}`,
      });
    }

    // Save lead to database
    saveLeadToDatabase(score, tier);

    setState({
      ...state,
      isComplete: true,
      score,
      tier,
    });

    // Clear localStorage
    localStorage.removeItem('quiz_progress');
  };

  const saveLeadToDatabase = async (score: number, tier: 1 | 2 | 3) => {
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'שאלון אנונימי',
          phone: '',
          child_age: state.answers[0] !== null ? quizQuestions[0].answers[state.answers[0]].text : '',
          message: '',
          source: 'sleep_quiz',
          quiz_score: score,
          quiz_tier: tier,
        }),
      });
    } catch (error) {
      // Silently fail - don't interrupt user experience
      console.error('Failed to save quiz result:', error);
    }
  };

  const handleRetake = () => {
    setState({
      currentQuestionIndex: 0,
      answers: new Array(quizQuestions.length).fill(null),
      isComplete: false,
      score: null,
      tier: null,
    });
    localStorage.removeItem('quiz_progress');
  };

  // Track quiz start
  useEffect(() => {
    if (state.currentQuestionIndex === 0 && !state.isComplete) {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'sleep_quiz_started', {
          event_category: 'engagement',
        });
      }
    }
  }, [state.currentQuestionIndex, state.isComplete]);

  if (state.isComplete && state.tier) {
    return (
      <QuizResult
        result={quizResults[state.tier]}
        score={state.score || 0}
        onRetake={handleRetake}
      />
    );
  }

  const currentQuestion = quizQuestions[state.currentQuestionIndex];
  const hasSelectedAnswer = state.answers[state.currentQuestionIndex] !== null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <QuizQuestion
        question={currentQuestion}
        selectedAnswer={state.answers[state.currentQuestionIndex]}
        onAnswerSelect={handleAnswerSelect}
        questionNumber={state.currentQuestionIndex + 1}
        totalQuestions={quizQuestions.length}
      />

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePrevious}
          disabled={state.currentQuestionIndex === 0}
          className={`px-6 py-3 rounded-lg font-heading font-medium transition-all ${
            state.currentQuestionIndex === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-accent-lavender text-text-dark hover:bg-accent-pink'
          }`}
        >
          חזרה
        </button>

        <button
          onClick={handleNext}
          disabled={!hasSelectedAnswer}
          className={`px-6 py-3 rounded-lg font-heading font-medium transition-all ${
            !hasSelectedAnswer
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-accent-sky text-text-dark hover:bg-accent-lavender'
          }`}
        >
          {state.currentQuestionIndex === quizQuestions.length - 1 ? 'סיום' : 'הבא'}
        </button>
      </div>
    </div>
  );
};

