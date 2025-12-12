import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { supabaseServer } from '@/lib/supabaseServerClient';

export const metadata: Metadata = {
  title: 'מסלולי ליווי - ייעוץ שינה לתינוקות',
  description: 'ליווי פרימיום וליווי פרימיום+ - תכניות מותאמות אישית לשינה טובה',
};

async function getPrograms() {
  try {
    const { data, error } = await supabaseServer
      .from('programs')
      .select('*')
      .eq('active', true)
      .order('display_order', { ascending: true });

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

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-12 text-center">
        המסלולים שלנו
      </h1>

      {programs.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-text-dark/80 font-body text-lg">
            המסלולים יופיעו כאן בקרוב
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program: any, index: number) => (
            <Card 
              key={program.id} 
              className={`flex flex-col ${index === programs.length - 1 ? 'border-2 border-accent-sky' : ''}`}
            >
              {index === programs.length - 1 && (
                <div className="mb-4">
                  <span className="bg-accent-pink text-text-dark px-3 py-1 rounded-full text-sm font-heading font-medium">
                    מומלץ
                  </span>
                </div>
              )}
              <h2 className="text-3xl font-heading font-bold text-text-dark mb-4">
                {program.name_he}
              </h2>
              <p className="text-text-dark/80 font-body text-lg mb-4 flex-grow">
                {program.description_he}
              </p>
              <ul className="space-y-2 text-text-dark/80 font-body mb-6">
                {program.features_he?.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent-sky text-xl ml-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" size="lg" asChild className="mt-auto">
                <Link href="/contact">לפרטים נוספים</Link>
              </Button>
            </Card>
          ))}
        </div>
      )}

      <div className="text-center mt-12">
        <p className="text-text-dark/80 font-body text-lg mb-6">
          לא בטוחים איזה מסלול מתאים לכם?
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link href="/assessment">בדיקת מצב שינה חינם</Link>
        </Button>
      </div>
    </div>
  );
}

