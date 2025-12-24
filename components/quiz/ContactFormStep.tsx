'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface ContactFormStepProps {
  onSubmit: (name: string, phone: string) => Promise<void>;
  isLoading?: boolean;
}

export const ContactFormStep: React.FC<ContactFormStepProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'שם הוא שדה חובה';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'טלפון הוא שדה חובה';
    } else {
      const phoneRegex = /^0[2-9]\d{7,8}$/;
      if (!phoneRegex.test(formData.phone.replace(/-/g, ''))) {
        newErrors.phone = 'מספר טלפון לא תקין';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await onSubmit(formData.name.trim(), formData.phone.trim());
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setErrors({ submit: 'שגיאה בשליחת הפרטים. נסי שוב מאוחר יותר.' });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-heading font-bold text-text-dark mb-4">
          בואי נתחיל
        </h2>
        <p className="text-text-dark/80 font-body text-lg">
          כדי שנוכל להתאים לך את הפתרון הטוב ביותר, נשמח לקבל את הפרטים הבסיסיים שלך
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="שם מלא *"
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: '' });
          }}
          error={errors.name}
          required
          disabled={isLoading}
        />

        <Input
          label="טלפון *"
          type="tel"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
            if (errors.phone) setErrors({ ...errors, phone: '' });
          }}
          placeholder="050-1234567"
          error={errors.phone}
          required
          disabled={isLoading}
        />

        {errors.submit && (
          <p className="text-red-500 text-sm text-center">{errors.submit}</p>
        )}

        <div className="text-center">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isLoading}
            className="w-full sm:w-auto"
          >
            {isLoading ? 'שומר...' : 'התחילי את השאלון'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

