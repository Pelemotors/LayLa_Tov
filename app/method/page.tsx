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
          איך בנוי התהליך?
        </h1>

        <Card className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            למה בעצם צריך ייעוץ שינה?
          </h2>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            ייעוץ שינה מעניק להורים ולילדים שקט וביטחון, וכולל יתרונות רבים:
          </p>
          <ul className="space-y-3 text-text-dark/80 font-body text-lg mb-4">
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>שינה טובה תורמת לבריאות, לגדילה ולהתפתחות של הילד.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>שגרה מסודרת מעניקה יציבות וביטחון.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>עצמאות בשינה משפיעה גם על תחומים נוספים בחיים.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>המשפחה כולה נהנית מפחות עייפות, מתח ותסכול.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>נמנעת תלות בהרגלי שינה לא נכונים, שמקשים בטווח הארוך.</span>
            </li>
          </ul>
        </Card>

        <Card className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            מאיזה גיל אפשר להתחיל ייעוץ שינה?
          </h2>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            ניתן להתחיל ייעוץ שינה מגיל 5 חודשים ומעלה.
          </p>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            תהליך הליווי נמשך כ־8 שבועות וכולל:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
                1. פגישת אבחון אישית
              </h3>
              <p className="text-text-dark/80 font-body">
                כשעתיים של היכרות מעמיקה עם הילד והמשפחה.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
                2. בניית תוכנית עבודה מותאמת אישית
              </h3>
              <p className="text-text-dark/80 font-body">
                בהתאם לצרכים, לאופי ולמטרות שלכם.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
                3. ליווי צמוד
              </h3>
              <p className="text-text-dark/80 font-body">
                תמיכה, מעקב והכוונה שוטפת לאורך כל הדרך.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
                4. שלב ההטמעה
              </h3>
              <p className="text-text-dark/80 font-body">
                שבו ההורים מתמודדים באופן עצמאי, עם ביטחון וכלים ברורים.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
                5. שיחת סיכום
              </h3>
              <p className="text-text-dark/80 font-body">
                לסגירת התהליך והמשך כלים לעתיד.
              </p>
            </div>
          </div>
        </Card>

        <Card className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            מה עושה יועצת שינה?
          </h2>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            יועצת שינה מלווה הורים וילדים בתהליך שמטרתו לבסס הרגלי שינה בריאים ונכונים.
          </p>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            התפקיד שלי הוא:
          </p>
          <ul className="space-y-3 text-text-dark/80 font-body text-lg">
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>לאבחן את הקושי ולהבין את שורש הבעיה.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>לבנות תוכנית עבודה מותאמת אישית למשפחה.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>ללוות, להדריך ולעודד את ההורים לאורך כל הדרך.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span>להעניק כלים פרקטיים להתמודדות עצמאית. ובעיקר – להיות שם עם הרבה הקשבה, רגישות.</span>
            </li>
          </ul>
        </Card>

        <Card className="mb-8">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            מי זקוק לייעוץ? ומתי?
          </h2>
          <h3 className="text-2xl font-heading font-semibold text-text-dark mb-4">
            שינה רגועה – זכות של כל משפחה
          </h3>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            שינה טובה היא לא חלום – היא זכות בסיסית של כל ילד וכל משפחה.
            ייעוץ שינה מקצועי מסייע להורים להבין את דפוסי השינה של הילד, להתמודד עם התעוררויות ליליות, רגרסיות או תלות במוצץ, ולבנות שגרות וטקסי שינה שמרגיעים את הילד ומעניקים שקט להורים.
          </p>
          
          <h3 className="text-2xl font-heading font-semibold text-text-dark mb-4 mt-6">
            למה ייעוץ שינה חשוב?
          </h3>
          <ul className="space-y-3 text-text-dark/80 font-body text-lg mb-4">
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span><strong>ליווי אישי:</strong> הורים מקבלים כלים שמתאימים בדיוק לילד ולמשפחה שלהם.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span><strong>שגרות וטקסים ברורים:</strong> יוצרים סביבה רגועה ומוכרת שמקלה על ההירדמות.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-sky text-2xl ml-3">✓</span>
              <span><strong>שיפור איכות השינה:</strong> הפחתת התעוררויות ליליות, עייפות יתר וקשיי הירדמות.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-heading font-semibold text-text-dark mb-4 mt-6">
            למי זה מתאים?
          </h3>
          <ul className="space-y-3 text-text-dark/80 font-body text-lg mb-4">
            <li className="flex items-start">
              <span className="text-accent-pink text-2xl ml-3">•</span>
              <span>תינוקות ופעוטות בגילאי 5 חודשים עד 3.5 שנים.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-pink text-2xl ml-3">•</span>
              <span>משפחות שמעוניינות בלילות שקטים ושגרה מסודרת.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-pink text-2xl ml-3">•</span>
              <span>הורים שרוצים לתמוך בילד שלהם בבניית הרגלי שינה בריאים.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-heading font-semibold text-text-dark mb-4 mt-6">
            איך זה עובד?
          </h3>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
            ייעוץ השינה מתבצע בצורה מקצועית, חמה ואמפתית, עם דגש על:
          </p>
          <ul className="space-y-3 text-text-dark/80 font-body text-lg mb-4">
            <li className="flex items-start">
              <span className="text-accent-lavender text-2xl ml-3">•</span>
              <span>יצירת טקסי שינה עקביים וקצרים.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-lavender text-2xl ml-3">•</span>
              <span>בניית שגרות יום ושינה מותאמות אישית.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent-lavender text-2xl ml-3">•</span>
              <span>תמיכה רגשית והדרכה להורים כיצד לעודד שינה עצמאית בביטחון.</span>
            </li>
          </ul>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed font-semibold">
            בכל גיל, גם לילד שלך וגם לך אפשר ליהנות מלילות רגועים, שגרה מסודרת וביטחון שהשינה היא מקום בטוח ונעים.
          </p>
        </Card>

        <Card className="mb-8 bg-gradient-to-br from-accent-sky/10 to-accent-lavender/10 border-2 border-accent-sky/30">
          <h2 className="text-3xl font-heading font-bold text-text-dark mb-6">
            סבסוד והחזרים על ייעוץ שינה
          </h2>
          <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-6">
            יועצת השינה ליאור מאמינה שכל משפחה זכאית לשקט, למנוחה ולשינה טובה – גם בלי להכביד כלכלית.
            לכן, חשוב לדעת שבמקרים מסוימים ניתן לקבל החזר חלקי או סבסוד על תהליך ייעוץ השינה.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-3">
                דרך קופות החולים
              </h3>
              <p className="text-text-dark/80 font-body leading-relaxed mb-2">
                לקוחות במסלולים המורחבים של קופות החולים (כמו &quot;מכבי שלי&quot;, &quot;כללית מושלם&quot;, &quot;מאוחדת שיא&quot; ו&quot;לאומית זהב&quot;) יכולים לעיתים לקבל החזר על הדרכת הורים או ייעוץ התפתחותי, בתנאי שהיועצת מוסמכת ומנפיקה קבלה כחוק.
              </p>
              <p className="text-text-dark/80 font-body leading-relaxed font-semibold">
                ליאור מספקת קבלות מוכרות לצורך החזרים – מומלץ לבדוק את הזכאות מול הקופה שלך.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-3">
                דרך ביטוחים פרטיים
              </h3>
              <p className="text-text-dark/80 font-body leading-relaxed">
                חלק מהביטוחים הפרטיים מאפשרים החזר חלקי על שירותים בתחום ההורות, השינה וההתפתחות.
                בדקי מול חברת הביטוח שלך אם השירות נכלל תחת סעיף &quot;ייעוץ הורי&quot; או &quot;טיפול התנהגותי&quot;.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold text-text-dark mb-3">
                דרך מרכזי הורות ורשויות מקומיות
              </h3>
              <p className="text-text-dark/80 font-body leading-relaxed">
                בחלק מהערים בארץ מתקיימים פרויקטים מסובסדים להורים לתינוקות ופעוטות, בשיתוף יועצות שינה מוסמכות.
                ליאור משתפת פעולה עם מרכזים קהילתיים במספר רשויות ומעדכנת מעת לעת על סדנאות פתוחות במחירים מסובסדים.
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/contact">לילות רגועים מתחילים כאן</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

