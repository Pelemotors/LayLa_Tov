import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות',
  description: 'מדיניות הפרטיות של אתר ליאור - יועצת שינה',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-8 text-center">
          מדיניות פרטיות
        </h1>

        <Card>
          <div className="prose prose-lg max-w-none font-body text-text-dark/80">
            <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
              איסוף מידע
            </h2>
            <p className="mb-6">
              אנו אוספים מידע שאת מספקת לנו ישירות, כגון שם, מספר טלפון, ופרטים נוספים
              שתמלאי בטופס יצירת הקשר או בשאלון בדיקת השינה.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
              שימוש במידע
            </h2>
            <p className="mb-6">
              המידע שאת מספקת משמש אותנו ליצירת קשר איתך, לספק שירותים, ולשפר את
              החוויה באתר.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
              אבטחת מידע
            </h2>
            <p className="mb-6">
              אנו נוקטים אמצעים מתאימים להגנה על המידע האישי שלך מפני גישה לא מורשית,
              שימוש לרעה, או חשיפה.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
              צור קשר
            </h2>
            <p>
              אם יש לך שאלות לגבי מדיניות הפרטיות, את מוזמנת ליצור איתנו קשר דרך
              עמוד צור קשר.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

