import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { supabaseServer } from '@/lib/supabaseServerClient';

export const metadata: Metadata = {
  title: 'המלצות - מה אומרים עלינו',
  description: 'המלצות מהורים שעברו את התהליך עם ליאור - יועצת שינה',
};

async function getTestimonials() {
  try {
    const { data, error } = await supabaseServer
      .from('testimonials')
      .select('*')
      .eq('published', true)
      .order('display_order', { ascending: true, nullsFirst: false })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-12 text-center">
        המלצות
      </h1>

      {testimonials.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-text-dark/80 font-body text-lg">
            אין המלצות זמינות כרגע
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <div className="mb-4">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
                &quot;{testimonial.testimonial_text}&quot;
              </p>
              <div className="text-text-dark font-heading font-semibold">
                {testimonial.name}
                {testimonial.child_age && ` - גיל הילד: ${testimonial.child_age}`}
              </div>
            </Card>
          ))}
        </div>
      )}

      <div className="text-center mt-12">
        <p className="text-text-dark/80 font-body text-lg mb-6">
          רוצה להיות הבאה? בואי נתחיל
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent-sky hover:bg-accent-lavender text-text-dark px-8 py-4 rounded-lg font-heading font-medium transition-all"
        >
          צרי קשר
        </a>
      </div>
    </div>
  );
}

