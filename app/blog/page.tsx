import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'בלוג - טיפים ומידע על שינה לתינוקות',
  description: 'מאמרים מקצועיים על שינה לתינוקות, טיפים והדרכות',
};

export default function BlogPage() {
  // TODO: Fetch from Supabase when database is ready
  const posts: any[] = [];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-12 text-center">
        בלוג
      </h1>

      {posts.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-text-dark/80 font-body text-lg">
            המאמרים הראשונים יופיעו כאן בקרוב
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <h2 className="text-2xl font-heading font-bold text-text-dark mb-4">
                  {post.title}
                </h2>
                <p className="text-text-dark/80 font-body">{post.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

