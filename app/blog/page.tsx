import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { supabaseServer } from '@/lib/supabaseServerClient';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'מאמרים - טיפים ומידע על שינה לתינוקות',
  description: 'מאמרים מקצועיים על שינה לתינוקות, טיפים והדרכות',
};

async function getPublishedPosts() {
  try {
    const { data, error } = await supabaseServer
      .from('blog_posts')
      .select(`
        id,
        title_he,
        excerpt_he,
        slug,
        featured_image_url,
        published_at,
        blog_categories (
          name_he,
          slug
        )
      `)
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Helper function to get default image for posts without featured image
function getDefaultImage(index: number): string {
  const images = [
    '/071e80cd-504a-4b37-b245-9d04b0a15433.jpeg',
    '/2c30980c-7f21-4992-8962-19feefc79968.jpeg',
    '/bc0eae9e-37a7-4101-857a-d2976f2cfbe1.jpeg',
    '/f9632597-4203-424c-b071-f7a7272e2a20.jpeg',
  ];
  return images[index % images.length];
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-4">
          מאמרים וטיפים מקצועיים
        </h1>
        <p className="text-xl text-text-dark/70 font-body max-w-2xl mx-auto">
          מדריכים מקיפים, טיפים מעשיים וכל מה שצריך לדעת על שינה בריאה לתינוקות ופעוטות
        </p>
      </div>

      {posts.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-text-dark/80 font-body text-lg">
            המאמרים הראשונים יופיעו כאן בקרוב
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any, index: number) => {
            const imageUrl = post.featured_image_url || getDefaultImage(index);
            return (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col overflow-hidden group border-2 border-transparent hover:border-accent-sky/30">
                  {/* Image */}
                  <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-accent-sky/10 to-accent-lavender/10">
                    <Image
                      src={imageUrl}
                      alt={post.title_he}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Category Badge */}
                    {post.blog_categories && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-accent-sky font-body text-sm font-semibold rounded-full shadow-md">
                          {post.blog_categories.name_he}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-xl font-heading font-bold text-text-dark mb-3 line-clamp-2 group-hover:text-accent-sky transition-colors">
                      {post.title_he}
                    </h2>
                    {post.excerpt_he && (
                      <p className="text-text-dark/70 font-body mb-4 flex-grow line-clamp-3 text-sm leading-relaxed">
                        {post.excerpt_he}
                      </p>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-accent-sky/10">
                      {post.published_at && (
                        <p className="text-xs text-text-dark/50 font-body">
                          {new Date(post.published_at).toLocaleDateString('he-IL', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      )}
                      <span className="text-accent-sky font-body text-sm font-semibold group-hover:translate-x-[-4px] transition-transform">
                        קראי עוד →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

