-- Enable RLS for blog_categories table
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read blog categories (public data)
CREATE POLICY "Anyone can read blog categories"
  ON public.blog_categories
  FOR SELECT
  TO public
  USING (true);

-- Policy: Authenticated users can manage categories (for admin panel)
CREATE POLICY "Authenticated users can manage blog categories"
  ON public.blog_categories
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Enable RLS for blog_tags table
ALTER TABLE public.blog_tags ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read blog tags (public data)
CREATE POLICY "Anyone can read blog tags"
  ON public.blog_tags
  FOR SELECT
  TO public
  USING (true);

-- Policy: Authenticated users can manage tags (for admin panel)
CREATE POLICY "Authenticated users can manage blog tags"
  ON public.blog_tags
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

