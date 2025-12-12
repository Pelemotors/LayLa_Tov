import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { supabaseServer } from '@/lib/supabaseServerClient';

async function getPrograms() {
  try {
    const { data, error } = await supabaseServer
      .from('programs')
      .select('*')
      .eq('active', true)
      .order('display_order', { ascending: true })
      .limit(2);

    if (error) {
      console.error('Error fetching programs:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
}

export default async function Home() {
  const programs = await getPrograms();
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 py-16 bg-gradient-to-b from-accent-sky/30 via-accent-lavender/20 to-accent-pink/30 rounded-3xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-sky/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-pink/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-accent-sky to-accent-lavender rounded-full flex items-center justify-center text-6xl shadow-xl">
              🌙
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-text-dark mb-6 drop-shadow-sm">
            ליאור - יועצת שינה והדרכת הורים
          </h1>
          <p className="text-xl md:text-2xl text-text-dark mb-8 font-body max-w-2xl mx-auto font-semibold">
            בשיטת 'לילה טוב' - ליווי אישי ומותאם להורים לתינוקות ופעוטות
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/assessment">בדיקת מצב שינה</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">בואי נדבר</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="mb-16">
        <Card className="border-2 border-accent-lavender/30 bg-gradient-to-br from-white to-accent-lavender/10">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-gradient-to-br from-accent-lavender to-accent-pink rounded-full flex items-center justify-center text-7xl shadow-lg">
                👩‍⚕️
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-3xl font-heading font-bold text-text-dark mb-4">
                אודות ליאור
              </h2>
              <p className="text-text-dark font-body text-lg leading-relaxed mb-4 font-medium">
                יועצת שינה מקצועית עם ניסיון רב בליווי הורים לתינוקות ופעוטות.
                השיטה 'לילה טוב' מבוססת על גישה אמפתית ומתחשבת בצרכים של כל משפחה.
              </p>
              <Button variant="secondary" size="md" asChild>
                <Link href="/about">קראי עוד</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Method Preview */}
      <section className="mb-16">
        <Card className="border-2 border-accent-pink/30 bg-gradient-to-br from-white to-accent-pink/10">
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-gradient-to-br from-accent-pink to-accent-sky rounded-full flex items-center justify-center text-7xl shadow-lg">
                💤
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-3xl font-heading font-bold text-text-dark mb-4">
                השיטה 'לילה טוב'
              </h2>
              <p className="text-text-dark font-body text-lg leading-relaxed mb-4 font-medium">
                שיטה ייחודית המשלבת הבנה עמוקה של צרכי התינוק עם תמיכה מלאה בהורים.
                תהליך מותאם אישית שמביא לתוצאות מהירות ובר קיימא.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-4 py-2 bg-accent-sky/20 rounded-full text-sm font-body font-medium">אמפתיה</span>
                <span className="px-4 py-2 bg-accent-lavender/20 rounded-full text-sm font-body font-medium">מותאם אישית</span>
                <span className="px-4 py-2 bg-accent-pink/20 rounded-full text-sm font-body font-medium">תמיכה מלאה</span>
              </div>
              <Button variant="secondary" size="md" asChild>
                <Link href="/method">למדי עוד על השיטה</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Programs Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading font-bold text-text-dark mb-8 text-center bg-gradient-to-r from-accent-sky to-accent-lavender bg-clip-text text-transparent">
          המסלולים שלנו
        </h2>
        {programs.length === 0 ? (
          <Card className="text-center py-12">
            <p className="text-text-dark/80 font-body text-lg">
              המסלולים יופיעו כאן בקרוב
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program: any, index: number) => (
              <Card 
                key={program.id}
                className={`border-2 ${index === programs.length - 1 ? 'border-accent-lavender/40 bg-gradient-to-br from-white to-accent-lavender/10' : 'border-accent-sky/40'} hover:shadow-xl transition-shadow relative`}
              >
                {index === programs.length - 1 && (
                  <div className="absolute top-4 left-4 bg-accent-pink text-white px-3 py-1 rounded-full text-sm font-heading font-semibold">
                    מומלץ
                  </div>
                )}
                <div className="text-5xl mb-4">{index === programs.length - 1 ? '✨' : '⭐'}</div>
                <h3 className={`text-2xl font-heading font-bold mb-4 ${index === programs.length - 1 ? 'text-accent-lavender' : 'text-accent-sky'}`}>
                  {program.name_he}
                </h3>
                <ul className={`text-text-dark font-body mb-4 space-y-2`}>
                  {program.features_he?.slice(0, 3).map((feature: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <span className={`text-xl ml-2 ${index === programs.length - 1 ? 'text-accent-lavender' : 'text-accent-sky'}`}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="primary" size="md" asChild>
                  <Link href="/programs">לפרטים נוספים</Link>
                </Button>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Testimonials Preview */}
      <section className="mb-16">
        <h2 className="text-3xl font-heading font-bold text-text-dark mb-8 text-center">
          מה אומרים עלינו
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center border-2 border-accent-sky/30">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-text-dark font-body mb-4 italic">
              "ליאור עזרה לנו להבין את הצרכים של התינוק שלנו. תוך שבוע כבר ראינו שיפור משמעותי!"
            </p>
            <p className="text-accent-sky font-heading font-semibold">שרה, אמא ל-10 חודשים</p>
          </Card>
          <Card className="text-center border-2 border-accent-lavender/30">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-text-dark font-body mb-4 italic">
              "התהליך היה מכבד ומתחשב. ליאור הייתה זמינה לכל שאלה והדרכה. ממליצה בחום!"
            </p>
            <p className="text-accent-lavender font-heading font-semibold">מיכל, אמא ל-1.5 שנים</p>
          </Card>
          <Card className="text-center border-2 border-accent-pink/30">
            <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-text-dark font-body mb-4 italic">
              "לבסוף יש לנו לילות שקטים! התהליך היה הדרגתי ומכבד, בדיוק מה שחיפשנו."
            </p>
            <p className="text-accent-pink font-heading font-semibold">רונית, אמא ל-8 חודשים</p>
          </Card>
        </div>
        <div className="text-center mt-6">
          <Button variant="secondary" size="md" asChild>
            <Link href="/testimonials">קראי עוד המלצות</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mb-16">
        <Card className="bg-gradient-to-r from-accent-sky/40 via-accent-lavender/40 to-accent-pink/40 border-2 border-accent-sky/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="text-6xl mb-4">🌙</div>
            <h2 className="text-3xl font-heading font-bold text-text-dark mb-4">
              מוכנה להתחיל?
            </h2>
            <p className="text-text-dark font-body text-lg mb-6 font-medium">
              בואי נדבר 10 דקות ונראה אם זה מתאים
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild>
                <Link href="/assessment">בדיקת מצב שינה חינם</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">קבעי שיחת אבחון</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
