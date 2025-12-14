'use client';

import React, { useState } from 'react';
import { QuizResult as QuizResultType } from '@/lib/quizData';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

interface QuizResultProps {
  result: QuizResultType;
  score: number;
  onRetake?: () => void;
  onSaveLead?: (name: string, phone: string) => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  result,
  score,
  onRetake,
  onSaveLead,
}) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const whatsappPhone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '';
  const whatsappUrl = whatsappPhone
    ? `https://wa.me/${whatsappPhone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(result.whatsappMessage)}`
    : '#';

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact';

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    if (!contactData.name.trim()) {
      newErrors.name = 'שם הוא שדה חובה';
    }
    if (!contactData.phone.trim()) {
      newErrors.phone = 'טלפון הוא שדה חובה';
    } else if (!/^0[2-9]\d{7,8}$/.test(contactData.phone.replace(/-/g, ''))) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSaving(true);
    try {
      if (onSaveLead) {
        await onSaveLead(contactData.name.trim(), contactData.phone.trim());
      }
      setIsSaved(true);
      setShowContactForm(false);
    } catch (error) {
      console.error('Error saving contact:', error);
      setErrors({ submit: 'שגיאה בשמירת הפרטים. נסי שוב מאוחר יותר.' });
    } finally {
      setIsSaving(false);
    }
  };

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

        {/* Contact Form */}
        {!isSaved && (
          <div className="mb-6">
            {!showContactForm ? (
              <div className="text-center">
                <p className="text-text-dark/70 font-body mb-4">
                  כדי שנוכל ליצור איתך קשר, נשמח לקבל את הפרטים שלך:
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setShowContactForm(true)}
                  className="w-full sm:w-auto"
                >
                  השאירי פרטים ליצירת קשר
                </Button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 max-w-md mx-auto">
                <Input
                  label="שם מלא *"
                  type="text"
                  value={contactData.name}
                  onChange={(e) => {
                    setContactData({ ...contactData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  error={errors.name}
                  required
                />
                <Input
                  label="טלפון *"
                  type="tel"
                  value={contactData.phone}
                  onChange={(e) => {
                    setContactData({ ...contactData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  placeholder="050-1234567"
                  error={errors.phone}
                  required
                />
                {errors.submit && (
                  <p className="text-red-500 text-sm text-center">{errors.submit}</p>
                )}
                <div className="flex gap-3 justify-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSaving}
                  >
                    {isSaving ? 'שומר...' : 'שמור פרטים'}
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    size="md"
                    onClick={() => {
                      setShowContactForm(false);
                      setErrors({});
                    }}
                    disabled={isSaving}
                  >
                    ביטול
                  </Button>
                </div>
              </form>
            )}
          </div>
        )}

        {isSaved && (
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

