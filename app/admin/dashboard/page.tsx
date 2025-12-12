import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'לוח בקרה - מנהל',
  description: 'לוח בקרה לניהול האתר',
};

export default function DashboardPage() {
  // TODO: Fetch real data from Supabase
  const stats = {
    newLeadsToday: 0,
    newLeadsThisWeek: 0,
    newLeadsThisMonth: 0,
    totalLeads: 0,
    publishedPosts: 0,
    activeTestimonials: 0,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-heading font-bold text-text-dark">
          לוח בקרה
        </h1>
        <form action="/api/admin/auth/logout" method="POST">
          <button
            type="submit"
            className="text-text-dark/60 hover:text-text-dark font-body"
          >
            התנתקי
          </button>
        </form>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <h3 className="text-lg font-heading font-semibold text-text-dark mb-2">
            לידים חדשים היום
          </h3>
          <p className="text-3xl font-heading font-bold text-accent-sky">
            {stats.newLeadsToday}
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-heading font-semibold text-text-dark mb-2">
            לידים חדשים השבוע
          </h3>
          <p className="text-3xl font-heading font-bold text-accent-lavender">
            {stats.newLeadsThisWeek}
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-heading font-semibold text-text-dark mb-2">
            לידים חדשים החודש
          </h3>
          <p className="text-3xl font-heading font-bold text-accent-pink">
            {stats.newLeadsThisMonth}
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-heading font-semibold text-text-dark mb-2">
            סה"כ לידים
          </h3>
          <p className="text-3xl font-heading font-bold text-text-dark">
            {stats.totalLeads}
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-heading font-semibold text-text-dark mb-2">
            מאמרים שפורסמו
          </h3>
          <p className="text-3xl font-heading font-bold text-text-dark">
            {stats.publishedPosts}
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-heading font-semibold text-text-dark mb-2">
            המלצות פעילות
          </h3>
          <p className="text-3xl font-heading font-bold text-text-dark">
            {stats.activeTestimonials}
          </p>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/admin/leads">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center">
            <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
              ניהול לידים
            </h3>
            <p className="text-text-dark/60 font-body">צפייה וניהול לידים</p>
          </Card>
        </Link>

        <Link href="/admin/blog">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center">
            <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
              ניהול בלוג
            </h3>
            <p className="text-text-dark/60 font-body">יצירה ועריכה של מאמרים</p>
          </Card>
        </Link>

        <Link href="/admin/testimonials">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center">
            <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
              ניהול המלצות
            </h3>
            <p className="text-text-dark/60 font-body">הוספה ועריכה של המלצות</p>
          </Card>
        </Link>

        <Link href="/admin/programs">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer text-center">
            <h3 className="text-xl font-heading font-semibold text-text-dark mb-2">
              ניהול מסלולים
            </h3>
            <p className="text-text-dark/60 font-body">עדכון מסלולים ושירותים</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}

