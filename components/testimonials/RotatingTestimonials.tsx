'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';

interface Testimonial {
  id: string;
  name: string;
  child_age?: string | null;
  testimonial_text: string;
  rating?: number | null;
}

interface RotatingTestimonialsProps {
  testimonials: Testimonial[];
}

const ROTATION_INTERVAL = 5000; // 5 שניות

export function RotatingTestimonials({ testimonials }: RotatingTestimonialsProps) {
  const [displayedTestimonials, setDisplayedTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) {
      setDisplayedTestimonials([]);
      return;
    }

    // בחירת 3 המלצות ראשונות להתחלה (או פחות אם אין מספיק)
    const initial = testimonials.slice(0, Math.min(3, testimonials.length));
    setDisplayedTestimonials(initial);

    // אם יש יותר מ-3 המלצות, מתחילים את הרוטציה
    if (testimonials.length <= 3) return;

    const interval = setInterval(() => {
      // בחירת 3 המלצות רדנומליות חדשות (לוודא שאין כפילויות)
      const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
      const newSelection: Testimonial[] = [];
      const usedIds = new Set<string>();
      
      for (const testimonial of shuffled) {
        if (!usedIds.has(testimonial.id)) {
          newSelection.push(testimonial);
          usedIds.add(testimonial.id);
          if (newSelection.length === 3) break;
        }
      }
      
      // אם יש פחות מ-3, נשלים עם המלצות שטרם הוצגו
      if (newSelection.length < 3) {
        for (const testimonial of testimonials) {
          if (!usedIds.has(testimonial.id)) {
            newSelection.push(testimonial);
            if (newSelection.length === 3) break;
          }
        }
      }
      
      setDisplayedTestimonials(newSelection);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) {
    return (
      <Card className="text-center py-12">
        <p className="text-text-dark/80 font-body text-lg">
          המלצות יופיעו כאן בקרוב
        </p>
      </Card>
    );
  }

  if (displayedTestimonials.length === 0) {
    // עדיין טוען
    return (
      <Card className="text-center py-12">
        <p className="text-text-dark/80 font-body text-lg">
          טוען המלצות...
        </p>
      </Card>
    );
  }

  const borderColors = [
    'border-accent-sky/30',
    'border-accent-lavender/30',
    'border-accent-pink/30',
  ];
  const textColors = [
    'text-accent-sky',
    'text-accent-lavender',
    'text-accent-pink',
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedTestimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            className={`text-center border-2 ${borderColors[index % 3]}`}
          >
            <div className="text-4xl mb-4">
              {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="text-text-dark font-body mb-4 italic">
              &quot;{testimonial.testimonial_text}&quot;
            </p>
            <p className={`${textColors[index % 3]} font-heading font-semibold`}>
              {testimonial.name}
              {testimonial.child_age && `, ${testimonial.child_age}`}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}

