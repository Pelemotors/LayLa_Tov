'use client';

import React from 'react';
import { QuizResult as QuizResultType } from '@/lib/quizData';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface QuizResultProps {
  result: QuizResultType;
  score: number;
  onRetake?: () => void;
  onSaveLead?: (name: string, phone: string) => void;
  leadAlreadySaved?: boolean;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  result,
  score,
  onRetake,
  onSaveLead,
  leadAlreadySaved = false,
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

        {/* Detailed Explanation */}
        <div className="bg-gradient-to-br from-accent-lavender/10 to-accent-pink/10 rounded-lg p-6 mb-8 text-right">
          <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
            מה זה אומר עבורכם?
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
                המשמעות של רמה {result.tier}
              </h3>
              <p className="text-text-dark/80 font-body leading-relaxed">
                {result.detailedExplanation.meaning}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
                מה תוכלו לצפות לקבל?
              </h3>
              <p className="text-text-dark/80 font-body leading-relaxed">
                {result.detailedExplanation.whatToExpect}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
                מה השלב הבא המומלץ?
              </h3>
              <p className="text-text-dark/80 font-body leading-relaxed">
                {result.detailedExplanation.nextSteps}
              </p>
            </div>
          </div>
        </div>

        {/* Show success message if lead already saved */}
        {leadAlreadySaved && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-center">
            <p className="text-green-700 font-body">
              ✓ הפרטים נשמרו בהצלחה! ניצור איתך קשר בקרוב.
            </p>
          </div>
        )}

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

