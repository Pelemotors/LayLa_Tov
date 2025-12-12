import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'המלצות - מה אומרים עלינו',
  description: 'המלצות מהורים שעברו את התהליך עם ליאור - יועצת שינה',
};

export default function TestimonialsPage() {
  // TODO: Fetch from Supabase when database is ready
  const testimonials = [
    {
      name: 'שרה',
      childAge: '10 חודשים',
      text: 'ליאור עזרה לנו להבין את הצרכים של התינוק שלנו. תוך שבוע כבר ראינו שיפור משמעותי!',
      rating: 5,
    },
    {
      name: 'מיכל',
      childAge: '1.5 שנים',
      text: 'התהליך היה מכבד ומתחשב. ליאור הייתה זמינה לכל שאלה והדרכה. ממליצה בחום!',
      rating: 5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-12 text-center">
        המלצות
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <div className="mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-text-dark/80 font-body text-lg leading-relaxed mb-4">
              "{testimonial.text}"
            </p>
            <div className="text-text-dark font-heading font-semibold">
              {testimonial.name} - גיל הילד: {testimonial.childAge}
            </div>
          </Card>
        ))}
      </div>

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

