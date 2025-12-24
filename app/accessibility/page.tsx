
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'הצהרת נגישות',
  description: 'הצהרת נגישות אתר ליאור יועצת שינה והדרכת הורים',
};

export default function AccessibilityPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl text-right">
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-8">
        הצהרת נגישות
      </h1>

      <section className="space-y-4 mb-8">
        <p className="text-text-dark/80 font-body text-lg leading-relaxed">
          באתר זה אנו רואים חשיבות רבה בהנגשת התוכן והשירותים הדיגיטליים לכלל
          המשתמשים, כולל אנשים עם מוגבלות. ההנגשה מתבצעת בהתאם לתקן הישראלי 5568
          המבוסס על הנחיות WCAG 2.0/2.1 ברמה AA.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-2xl font-heading font-semibold text-text-dark">
          חובות חוקיות ותקנים
        </h2>
        <ul className="list-disc pr-5 space-y-2 text-text-dark/80 font-body leading-relaxed">
          <li>
            <strong>חובת פרסום הצהרת נגישות</strong> – האתר כולל דף ייעודי
            המסביר אילו התאמות נגישות בוצעו, אילו חלקים עדיין אינם נגישים ודרכי
            יצירת קשר.
          </li>
          <li>
            <strong>תקן ישראלי 5568</strong> – האתר שואף לעמוד בהנחיות תקן זה,
            המבוסס על WCAG 2.0/2.1 ברמה AA.
          </li>
          <li>
            <strong>נגישות שירות</strong> – מעבר להנגשה הטכנית של האתר, אנו
            פועלים להנגשת שירותי הייעוץ גם באמצעים טלפוניים ודיגיטליים.
          </li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-2xl font-heading font-semibold text-text-dark">
          התאמות נגישות שבוצעו באתר
        </h2>
        <ul className="list-disc pr-5 space-y-2 text-text-dark/80 font-body leading-relaxed">
          <li>תמיכה מלאה בשפה עברית ו‑RTL.</li>
          <li>תיאורי ALT לתמונות ואייקונים משמעותיים.</li>
          <li>טפסים נגישים הכוללים תוויות (labels) והודעות שגיאה ברורות.</li>
          <li>אפשרות ניווט באתר באמצעות מקלדת (TAB, Shift+TAB, Enter, Esc).</li>
          <li>כפתורי פעולה וכפתורים צפים עם aria-label תיאורי, במידת הצורך.</li>
          <li>
            התאמות ניגודיות צבעים בין טקסט לרקע בהתאם להנחיות AA ברוב הרכיבים
            באתר.
          </li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-2xl font-heading font-semibold text-text-dark">
          אזורים שעשויים להיות פחות נגישים
        </h2>
        <p className="text-text-dark/80 font-body leading-relaxed">
          ייתכן שחלק מתכני הצד השלישי (כגון הטמעות חיצוניות, סרטונים או רכיבי צד
          שלישי) אינם נגישים במלואם. במקרים אלו אנו פועלים ככל האפשר לספק חלופות
          נגישות ולשפר את ההנגשה באופן מתמשך.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h2 className="text-2xl font-heading font-semibold text-text-dark">
          יצירת קשר בנושאי נגישות
        </h2>
        <p className="text-text-dark/80 font-body leading-relaxed">
          אם נתקלתם בבעיית נגישות באתר, או אם יש לכם הצעה לשיפור, נשמח שתפנו
          אלינו:
        </p>
        <ul className="list-disc pr-5 space-y-1 text-text-dark/80 font-body leading-relaxed">
          <li>טלפון: 054-4595999</li>
          <li>אימייל: lioralmos@gmail.com</li>
        </ul>
        <p className="text-text-dark/80 font-body leading-relaxed">
          אנו מתחייבים לבחון כל פנייה ולחזור אליכם בהקדם, עד 7 ימי עבודה לכל
          היותר.
        </p>
      </section>

      <p className="text-sm text-text-dark/60 font-body mt-8">
        תאריך עדכון אחרון של ההצהרה:{' '}
        {new Date().toLocaleDateString('he-IL')}
      </p>
    </main>
  );
}
