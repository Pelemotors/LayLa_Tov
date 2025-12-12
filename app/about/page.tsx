import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'אודות ליאור - יועצת שינה והדרכת הורים',
  description: 'ליאור - יועצת שינה מקצועית עם ניסיון רב בליווי הורים לתינוקות ופעוטות בשיטת "לילה טוב"',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-8 text-center">
          אודות ליאור
        </h1>

        <Card className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            מי אני?
          </h2>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            אני ליאור, יועצת שינה מקצועית עם ניסיון רב בליווי הורים לתינוקות ופעוטות.
            השיטה שלי, "לילה טוב", מבוססת על גישה אמפתית ומתחשבת בצרכים של כל משפחה.
          </p>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            אני מאמינה שכל תינוק הוא ייחודי, וכל משפחה זקוקה לגישה מותאמת אישית.
            המטרה שלי היא לעזור לכם להשיג שינה טובה ושלווה, תוך שמירה על הקשר החם והקרוב עם התינוק.
          </p>
        </Card>

        <Card className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            ההכשרה שלי
          </h2>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            אני בעלת הכשרה מקצועית בייעוץ שינה לתינוקות ופעוטות, עם התמחות בגילאי 4 חודשים עד 3.5 שנים.
            אני ממשיכה להתעדכן בטכניקות החדשות ביותר ומשתתפת בהכשרות מקצועיות על בסיס קבוע.
          </p>
        </Card>

        <Card>
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            השיטה שלי
          </h2>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            השיטה "לילה טוב" משלבת הבנה עמוקה של צרכי התינוק עם תמיכה מלאה בהורים.
            אני מאמינה בתהליך הדרגתי ומכבד, שמביא לתוצאות מהירות ובר קיימא.
          </p>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed">
            כל תהליך מותאם אישית למשפחה שלכם, תוך התחשבות בערכים שלכם, באורח החיים שלכם,
            ובצרכים הייחודיים של התינוק שלכם.
          </p>
        </Card>
      </div>
    </div>
  );
}

