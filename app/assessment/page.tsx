import { Metadata } from 'next';
import { SleepAssessmentQuiz } from '@/components/quiz/SleepAssessmentQuiz';

export const metadata: Metadata = {
  title: 'בדיקת מצב שינה - שאלון אבחון חינם',
  description: 'ענו על 7 שאלות קצרות וקבלו הערכה מותאמת אישית על מצב השינה בבית',
};

export default function AssessmentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-4">
          בדיקת מצב שינה
        </h1>
        <p className="text-xl text-text-dark/80 font-body max-w-2xl mx-auto">
          ענו על 7 שאלות קצרות וקבלו הערכה מותאמת אישית על מצב השינה בבית
        </p>
      </div>

      <SleepAssessmentQuiz />
    </div>
  );
}

