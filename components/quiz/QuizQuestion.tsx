'use client';

import React from 'react';
import { QuizQuestion as QuizQuestionType } from '@/lib/quizData';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-body text-text-dark/60">
            שאלה {questionNumber} מתוך {totalQuestions}
          </span>
          <span className="text-sm font-body text-text-dark/60">
            {Math.round((questionNumber / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="w-full bg-accent-sky/20 rounded-full h-2">
          <div
            className="bg-accent-sky h-2 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-dark mb-8 text-center">
        {question.text}
      </h2>

      {/* Answers */}
      <div className="space-y-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            className={`w-full p-6 rounded-lg border-2 text-right transition-all duration-300 font-body text-lg ${
              selectedAnswer === index
                ? 'border-accent-sky bg-accent-sky/20 shadow-md'
                : 'border-accent-sky/30 bg-white hover:border-accent-sky hover:bg-accent-sky/10'
            }`}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

