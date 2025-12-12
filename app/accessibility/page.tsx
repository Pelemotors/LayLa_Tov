import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'הצהרת נגישות',
  description: 'הצהרת הנגישות של אתר ליאור - יועצת שינה',
};

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-8 text-center">
          הצהרת נגישות
        </h1>

        <Card>
          <div className="prose prose-lg max-w-none font-body text-text-dark/80">
            <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
              מחויבות לנגישות
            </h2>
            <p className="mb-6">
              אנו מחויבים להבטיח שהאתר שלנו נגיש ונוח לשימוש עבור כל המשתמשים,
              כולל אנשים עם מוגבלויות.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
              תקנים
            </h2>
            <p className="mb-6">
              האתר נבנה בהתאם לתקן WCAG 2.1 ברמה AA, וכולל תכונות נגישות כגון:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>ניווט מקלדת מלא</li>
              <li>קונטרסט צבעים תקין</li>
              <li>תמיכה בקוראי מסך</li>
              <li>טקסטים חלופיים לתמונות</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
              צור קשר
            </h2>
            <p>
              אם נתקלת בבעיית נגישות באתר, אנא צרי איתנו קשר דרך עמוד צור קשר.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

