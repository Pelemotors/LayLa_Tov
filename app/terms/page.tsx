import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'תנאי שימוש',
  description: 'תנאי השימוש של אתר ליאור - יועצת שינה',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-8 text-center">
          תנאי שימוש
        </h1>

        <Card>
          <div className="prose prose-lg max-w-none font-body text-text-dark/80">
            <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
              שימוש באתר
            </h2>
            <p className="mb-6">
              השימוש באתר זה כפוף לתנאים המפורטים כאן. על ידי השימוש באתר, את מסכימה
              לתנאים אלה.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
              שירותים
            </h2>
            <p className="mb-6">
              האתר מספק מידע על שירותי ייעוץ שינה. השירותים עצמם ניתנים בהתאם להסכם
              נפרד שייחתם בעת קביעת השירות.
            </p>

            <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
              אחריות
            </h2>
            <p className="mb-6">
              המידע באתר מוצג כמות שהוא, ללא כל אחריות. אנו משתדלים לספק מידע מדויק
              ועדכני, אך לא נוכל להבטיח זאת.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

