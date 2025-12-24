'use client';

import React, { useState, useEffect } from 'react';
import { quizQuestions, quizResults, calculateTier } from '@/lib/quizData';
import { QuizQuestion } from './QuizQuestion';
import { QuizResult } from './QuizResult';
import { ContactFormStep } from './ContactFormStep';

interface QuizState {
  contactInfoSubmitted: boolean;
  leadId: string | null;
  currentQuestionIndex: number;
  answers: (number | null)[];
  isComplete: boolean;
  score: number | null;
  tier: 1 | 2 | 3 | null;
  leadSaved: boolean;
}

export const SleepAssessmentQuiz: React.FC = () => {
  const [state, setState] = useState<QuizState>({
    contactInfoSubmitted: false,
    leadId: null,
    currentQuestionIndex: 0,
    answers: new Array(quizQuestions.length).fill(null),
    isComplete: false,
    score: null,
    tier: null,
    leadSaved: false,
  });
  const [isLoading, setIsLoading] = useState(false);

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

  // Save progress to localStorage (but not contact info for privacy)
  useEffect(() => {
    if (state.contactInfoSubmitted && state.currentQuestionIndex >= 0) {
      const progressToSave = {
        ...state,
        // Don't save contact info to localStorage
        leadId: null,
      };
      localStorage.setItem('quiz_progress', JSON.stringify(progressToSave));
    }
  }, [state.contactInfoSubmitted, state.currentQuestionIndex, state.answers]);

  // Handle contact form submission - create initial lead
  const handleContactSubmit = async (name: string, phone: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          source: 'sleep_quiz',
          quiz_started_at: new Date().toISOString(),
          current_question_index: 0,
          quiz_completed: false,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'שגיאה בשמירת הפרטים');
      }

      setState({
        ...state,
        contactInfoSubmitted: true,
        leadId: responseData.lead_id,
      });

      // Track event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'sleep_quiz_started', {
          event_category: 'engagement',
        });
      }
    } catch (error) {
      console.error('Failed to save contact info:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

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

  // Update lead progress in database
  const updateLeadProgress = async (questionIndex: number) => {
    if (!state.leadId) return;

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lead_id: state.leadId,
          source: 'sleep_quiz',
          current_question_index: questionIndex,
          quiz_completed: false,
        }),
      });
    } catch (error) {
      console.error('Failed to update lead progress:', error);
      // Don't throw - this is non-critical
    }
  };

  const handleNext = () => {
    if (state.currentQuestionIndex < quizQuestions.length - 1) {
      const nextIndex = state.currentQuestionIndex + 1;
      setState({
        ...state,
        currentQuestionIndex: nextIndex,
      });

      // Update lead progress after moving to next question (non-blocking)
      if (state.leadId) {
        updateLeadProgress(nextIndex).catch((err) => {
          console.error('Failed to update lead progress:', err);
        });
      }
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

  const handleComplete = async () => {
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

    // Update lead with completion status and quiz results
    if (state.leadId) {
      try {
        // Prepare quiz responses
        const quizResponses = state.answers
          .map((answerIndex, questionIndex) => {
            if (answerIndex === null) return null;
            const question = quizQuestions[questionIndex];
            const answer = question.answers[answerIndex];
            return {
              question_index: questionIndex,
              answer_value: answer.text,
              answer_score: answer.score,
            };
          })
          .filter((r): r is { question_index: number; answer_value: string; answer_score: number } => r !== null);

        await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            lead_id: state.leadId,
            source: 'sleep_quiz',
            quiz_score: score,
            quiz_tier: tier,
            quiz_completed: true,
            current_question_index: quizQuestions.length - 1,
            quiz_responses: quizResponses,
          }),
        });
      } catch (error) {
        console.error('Failed to update lead completion:', error);
        // Continue even if update fails
      }
    }

    setState({
      ...state,
      isComplete: true,
      score,
      tier,
      leadSaved: true,
    });

    // Clear localStorage
    localStorage.removeItem('quiz_progress');
  };

  // This function is no longer needed as we save the lead at the start
  // But we keep it for the QuizResult component interface compatibility
  const saveLeadToDatabase = async (name: string, phone: string) => {
    // Lead is already saved, just return success
    return Promise.resolve();
  };

  const handleRetake = () => {
    setState({
      contactInfoSubmitted: false,
      leadId: null,
      currentQuestionIndex: 0,
      answers: new Array(quizQuestions.length).fill(null),
      isComplete: false,
      score: null,
      tier: null,
      leadSaved: false,
    });
    localStorage.removeItem('quiz_progress');
  };

  // Show contact form if not submitted yet
  if (!state.contactInfoSubmitted) {
    return (
      <ContactFormStep onSubmit={handleContactSubmit} isLoading={isLoading} />
    );
  }

  // Show quiz result if completed
  if (state.isComplete && state.tier) {
    return (
      <QuizResult
        result={quizResults[state.tier]}
        score={state.score || 0}
        onRetake={handleRetake}
        onSaveLead={saveLeadToDatabase}
        leadAlreadySaved={true}
      />
    );
  }

  // Show quiz questions
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

