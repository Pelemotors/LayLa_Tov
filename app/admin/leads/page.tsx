import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'ניהול לידים - מנהל',
  description: 'ניהול לידים',
};

export default async function LeadsPage() {
  // TODO: Fetch leads from Supabase
  const leads: any[] = [];

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'new':
        return 'info';
      case 'contacted':
        return 'default';
      case 'converted':
        return 'success';
      case 'archived':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new':
        return 'חדש';
      case 'contacted':
        return 'נוצר קשר';
      case 'converted':
        return 'הומר';
      case 'archived':
        return 'בארכיון';
      default:
        return status;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-heading font-bold text-text-dark">
          ניהול לידים
        </h1>
        <button className="bg-accent-sky hover:bg-accent-lavender text-text-dark px-6 py-3 rounded-lg font-heading font-medium transition-all">
          ייצוא ל-CSV
        </button>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <div className="flex flex-wrap gap-4">
          <select className="px-4 py-2 rounded-lg border-2 border-accent-sky bg-white">
            <option value="">כל הסטטוסים</option>
            <option value="new">חדש</option>
            <option value="contacted">נוצר קשר</option>
            <option value="converted">הומר</option>
            <option value="archived">בארכיון</option>
          </select>
          <input
            type="text"
            placeholder="חיפוש לפי שם או טלפון..."
            className="px-4 py-2 rounded-lg border-2 border-accent-sky bg-white flex-grow"
          />
        </div>
      </Card>

      {/* Leads Table */}
      {leads.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-text-dark/60 font-body">
            אין לידים להצגה
          </p>
        </Card>
      ) : (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-accent-sky/20">
                  <th className="text-right py-4 px-4 font-heading font-semibold text-text-dark">
                    שם
                  </th>
                  <th className="text-right py-4 px-4 font-heading font-semibold text-text-dark">
                    טלפון
                  </th>
                  <th className="text-right py-4 px-4 font-heading font-semibold text-text-dark">
                    גיל הילד
                  </th>
                  <th className="text-right py-4 px-4 font-heading font-semibold text-text-dark">
                    מקור
                  </th>
                  <th className="text-right py-4 px-4 font-heading font-semibold text-text-dark">
                    תאריך
                  </th>
                  <th className="text-right py-4 px-4 font-heading font-semibold text-text-dark">
                    סטטוס
                  </th>
                  <th className="text-right py-4 px-4 font-heading font-semibold text-text-dark">
                    פעולות
                  </th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="border-b border-accent-sky/10 hover:bg-accent-sky/5">
                    <td className="py-4 px-4 font-body text-text-dark">{lead.name}</td>
                    <td className="py-4 px-4 font-body text-text-dark">{lead.phone}</td>
                    <td className="py-4 px-4 font-body text-text-dark">{lead.child_age || '-'}</td>
                    <td className="py-4 px-4 font-body text-text-dark">
                      {lead.source === 'sleep_quiz' ? (
                        <span className="text-accent-sky">שאלון</span>
                      ) : (
                        <span>טופס</span>
                      )}
                      {lead.quiz_tier && (
                        <span className="mr-2 text-accent-lavender">(Tier {lead.quiz_tier})</span>
                      )}
                    </td>
                    <td className="py-4 px-4 font-body text-text-dark">
                      {new Date(lead.created_at).toLocaleDateString('he-IL')}
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant={getStatusBadgeVariant(lead.status)}>
                        {getStatusLabel(lead.status)}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <button className="text-accent-sky hover:text-accent-lavender font-body">
                        צפייה
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}

