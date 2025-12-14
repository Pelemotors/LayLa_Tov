import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { supabaseServer } from '@/lib/supabaseServerClient';
import Image from 'next/image';
import Link from 'next/link';

async function getPostBySlug(slug: string) {
  try {
    const { data, error } = await supabaseServer
      .from('blog_posts')
      .select(`
        *,
        blog_categories (
          name_he,
          slug
        ),
        blog_post_tags (
          blog_tags (
            name_he,
            slug
          )
        )
      `)
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error || !data) {
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'מאמר לא נמצא',
    };
  }

  return {
    title: post.meta_title_he || post.title_he,
    description: post.meta_description_he || post.excerpt_he || '',
    keywords: post.meta_keywords_he || '',
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Increment view count (non-blocking)
  supabaseServer
    .from('blog_posts')
    .update({ view_count: (post.view_count || 0) + 1 })
    .eq('id', post.id)
    .then(() => {
      // Silently update view count
    })
    .catch((error) => {
      console.error('Error updating view count:', error);
    });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back to blog */}
        <Link
          href="/blog"
          className="text-accent-sky hover:text-accent-lavender font-body mb-6 inline-block"
        >
          ← חזרה למאמרים
        </Link>

        {/* Article Header */}
        <article>
          {post.featured_image_url && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.featured_image_url}
                alt={post.title_he}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          )}

          <div className="mb-6">
            {post.blog_categories && (
              <span className="text-accent-sky font-body mb-4 inline-block">
                {post.blog_categories.name_he}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-4">
              {post.title_he}
            </h1>
            {post.excerpt_he && (
              <p className="text-xl text-text-dark/80 font-body mb-4">
                {post.excerpt_he}
              </p>
            )}
            <div className="flex items-center gap-4 text-text-dark/60 font-body text-sm">
              <span>מאת {post.author_name || 'ליאור'}</span>
              {post.published_at && (
                <>
                  <span>•</span>
                  <span>
                    {new Date(post.published_at).toLocaleDateString('he-IL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Article Content */}
          <Card className="prose prose-lg max-w-none">
            <div
              className="text-text-dark/90 font-body leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content_he }}
            />
          </Card>

          {/* Tags */}
          {post.blog_post_tags && post.blog_post_tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {post.blog_post_tags.map((pt: any) => (
                <span
                  key={pt.blog_tags.id}
                  className="px-3 py-1 bg-accent-sky/10 text-accent-sky rounded-full text-sm font-body"
                >
                  {pt.blog_tags.name_he}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

