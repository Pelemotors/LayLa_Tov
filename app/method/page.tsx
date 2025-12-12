import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'השיטה &quot;לילה טוב&quot; - ייעוץ שינה לתינוקות',
  description: 'שיטה ייחודית לייעוץ שינה המשלבת הבנה עמוקה של צרכי התינוק עם תמיכה מלאה בהורים',
};

export default function MethodPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-8 text-center">
          השיטה &quot;לילה טוב&quot;
        </h1>

        <Card className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            מהי השיטה?
          </h2>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            השיטה &quot;לילה טוב&quot; היא גישה ייחודית לייעוץ שינה שמבוססת על הבנה עמוקה של צרכי התינוק
            וההורים. השיטה משלבת טכניקות מוכחות עם גישה אמפתית ומכבדת.
          </p>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed">
            כל תהליך מותאם אישית למשפחה שלכם, תוך התחשבות בערכים שלכם, באורח החיים שלכם,
            ובצרכים הייחודיים של התינוק שלכם.
          </p>
        </Card>

        <Card className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            עקרונות השיטה
          </h2>
          <ul className="space-y-4 text-text-dark/80 font-body text-lg">
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>הבנה עמוקה של צרכי התינוק וההורים</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>תהליך הדרגתי ומכבד</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>תמיכה מלאה וליווי צמוד</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>התאמה אישית לכל משפחה</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>תוצאות מהירות ובר קיימא</span>
            </li>
          </ul>
        </Card>

        <Card className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            איך זה עובד?
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
                1. שיחת היכרות
              </h3>
              <p className="text-text-dark/80 font-body">
                נכיר, נבין את המצב הנוכחי, ואתאים את התהליך בדיוק למשפחה שלכם.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
                2. תכנית מותאמת
              </h3>
              <p className="text-text-dark/80 font-body">
                נבנה יחד תכנית מותאמת אישית שמתאימה לערכים שלכם ולצרכים של התינוק.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
                3. ליווי צמוד
              </h3>
              <p className="text-text-dark/80 font-body">
                אני אהיה איתכם בכל שלב, אתן תמיכה, עצות, ואענה על כל שאלה.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
                4. תוצאות
              </h3>
              <p className="text-text-dark/80 font-body">
                תוך זמן קצר תגיעו לשינה טובה ושלווה, עם כלים שילוו אתכם הלאה.
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">בואי נתחיל</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

