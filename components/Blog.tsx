export default function Blog() {
  const posts = [
    {
      title: 'Building Accessible React Components',
      excerpt:
        'A deep dive into creating React components with accessibility in mind. Learn about ARIA attributes, keyboard navigation, and screen reader testing.',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'React',
      link: '#',
    },
    {
      title: 'Design Systems at Scale',
      excerpt:
        'Strategies for maintaining and scaling design systems across large organizations. Best practices for documentation, versioning, and team collaboration.',
      date: 'March 8, 2024',
      readTime: '12 min read',
      category: 'Design Systems',
      link: '#',
    },
    {
      title: 'The Future of Web Performance',
      excerpt:
        'Exploring emerging technologies and techniques for optimizing web performance. Core Web Vitals, resource loading, and rendering optimization.',
      date: 'March 1, 2024',
      readTime: '10 min read',
      category: 'Performance',
      link: '#',
    },
    {
      title: 'Component Testing Best Practices',
      excerpt:
        'Comprehensive guide to testing React components. Unit tests, integration tests, and visual regression testing strategies for robust components.',
      date: 'February 22, 2024',
      readTime: '9 min read',
      category: 'Testing',
      link: '#',
    },
    {
      title: 'Mastering CSS Grid Layout',
      excerpt:
        'An in-depth exploration of CSS Grid and its capabilities. Learn how to create complex layouts with Grid and combine it with Flexbox.',
      date: 'February 15, 2024',
      readTime: '11 min read',
      category: 'CSS',
      link: '#',
    },
    {
      title: 'TypeScript Tips and Tricks',
      excerpt:
        'Advanced TypeScript patterns and techniques to write safer, more maintainable code. Generics, utility types, and advanced type inference.',
      date: 'February 8, 2024',
      readTime: '7 min read',
      category: 'TypeScript',
      link: '#',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Latest Articles
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Thoughts on design, code, and everything in between.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="group flex flex-col space-y-4 p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-all h-full"
            >
              {/* Category Tag */}
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded uppercase tracking-wider font-semibold">
                  {post.category}
                </span>
                <span className="text-xs text-foreground/50">{post.readTime}</span>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs text-foreground/50">{post.date}</span>
                <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View All Articles */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <span>Read all articles</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
