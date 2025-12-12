'use client';

import React from 'react';
import { QuizResult as QuizResultType } from '@/lib/quizData';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface QuizResultProps {
  result: QuizResultType;
  score: number;
  onRetake?: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  result,
  score,
  onRetake,
}) => {
  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '';
  const whatsappUrl = whatsappPhone
    ? `https://wa.me/${whatsappPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(result.whatsappMessage)}`
    : '#';

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact';

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'sleep_quiz_cta_whatsapp', {
        event_category: 'engagement',
        event_label: `tier_${result.tier}`,
      });
    }
  };

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'sleep_quiz_cta_call', {
        event_category: 'engagement',
        event_label: `tier_${result.tier}`,
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="text-center">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-6">
          {result.title}
        </h1>

        <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-8">
          {result.summary}
        </p>

        <div className="bg-accent-sky/10 rounded-lg p-4 mb-8">
          <p className="text-text-dark/70 font-body text-sm mb-2">
            הניקוד שלכם: <span className="font-bold">{score} נקודות</span>
          </p>
          <p className="text-text-dark/70 font-body text-sm">
            רמת מצב: <span className="font-bold">{result.tier}</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button variant="primary" size="lg" asChild onClick={handleWhatsAppClick}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              {result.ctaText.whatsapp}
            </a>
          </Button>
          <Button variant="secondary" size="lg" asChild onClick={handleCallClick}>
            <a href={calendlyUrl} className="w-full sm:w-auto">
              {result.ctaText.call}
            </a>
          </Button>
        </div>

        {onRetake && (
          <button
            onClick={onRetake}
            className="text-accent-sky hover:text-accent-lavender font-body text-sm underline"
          >
            לעשות את השאלון שוב
          </button>
        )}
      </Card>
    </div>
  );
};

