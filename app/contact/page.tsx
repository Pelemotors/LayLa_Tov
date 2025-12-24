'use client';

import React from 'react';
import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    childAge: '',
    message: '',
    honeypot: '', // Anti-spam field
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'שם הוא שדה חובה';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'טלפון הוא שדה חובה';
    } else if (!/^0[2-9]\d{7,8}$/.test(formData.phone.replace(/-/g, ''))) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }

    if (!formData.childAge.trim()) {
      newErrors.childAge = 'גיל הילד הוא שדה חובה';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'הודעה היא שדה חובה';
    }

    // Honeypot check
    if (formData.honeypot) {
      newErrors.honeypot = 'Bot detected';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          child_age: formData.childAge,
          message: formData.message,
          source: 'contact_form',
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          phone: '',
          childAge: '',
          message: '',
          honeypot: '',
        });

        // Track event
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit_success', {
            event_category: 'engagement',
            event_label: 'contact_form',
          });
        }
      } else {
        console.error('Form submission error:', response.status, responseData);
        throw new Error(responseData.error || 'שגיאה בשליחת הטופס');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setErrors({ submit: error instanceof Error ? error.message : 'אירעה שגיאה. נסי שוב מאוחר יותר.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <h1 className="text-3xl font-heading font-bold text-text-dark mb-4">
              תודה! קיבלתי את ההודעה
            </h1>
            <p className="text-text-dark/80 font-body text-lg mb-6">
              אחזור אלייך בהקדם האפשרי
            </p>
            <Button variant="primary" size="lg" asChild>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE?.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('שלום, שלחתי הודעה דרך האתר')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                בואי נדבר בוואטסאפ
              </a>
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-8 text-center">
          צור קשר
        </h1>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <Input
              label="שם מלא *"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={errors.name}
              required
            />

            <Input
              label="טלפון *"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="050-1234567"
              error={errors.phone}
              required
            />

            <Input
              label="גיל הילד *"
              type="text"
              value={formData.childAge}
              onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
              placeholder="למשל: 8 חודשים"
              error={errors.childAge}
              required
            />

            <Textarea
              label="הודעה *"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="ספרי לי קצת על המצב..."
              error={errors.message}
              required
            />

            {errors.submit && (
              <p className="text-red-500 text-sm">{errors.submit}</p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <LoadingSpinner size="sm" />
                  שולח...
                </span>
              ) : (
                'שלחי הודעה'
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

