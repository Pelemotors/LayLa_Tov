import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { supabaseServer } from '@/lib/supabaseServerClient';

export const metadata: Metadata = {
  title: 'ניהול מסלולים - מנהל',
  description: 'ניהול מסלולים ושירותים',
};

async function getPrograms() {
  try {
    const { data, error } = await supabaseServer
      .from('programs')
      .select('*')
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
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-heading font-bold text-text-dark">
          ניהול מסלולים
        </h1>
        <Button variant="primary" size="md">
          מסלול חדש
        </Button>
      </div>

      {/* Programs List */}
      {programs.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-text-dark/60 font-body mb-4">
            אין מסלולים עדיין
          </p>
          <Button variant="primary" size="md">
            צרי מסלול ראשון
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <Card key={program.id}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-heading font-bold text-text-dark">
                  {program.name_he}
                </h3>
                {program.active ? (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-body">
                    פעיל
                  </span>
                ) : (
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-body">
                    לא פעיל
                  </span>
                )}
              </div>
              <p className="text-text-dark/80 font-body mb-4">{program.description_he}</p>
              <div className="flex gap-4">
                <Button variant="primary" size="sm">
                  עריכה
                </Button>
                <Button variant="secondary" size="sm">
                  מחיקה
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

