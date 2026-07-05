export default function Projects() {
  const projects = [
    {
      title: 'Craft',
      description: 'Interactive design system documentation with live component demos and best practices guide.',
      image: '🎨',
      tags: ['Design Systems', 'React', 'Documentation'],
      link: '#',
      year: '2024',
    },
    {
      title: 'Blocks',
      description: 'Pre-built component blocks for rapid UI development and prototyping. Includes 50+ ready-to-use blocks.',
      image: '🧩',
      tags: ['Components', 'Next.js', 'Tailwind CSS'],
      link: '#',
      year: '2024',
    },
    {
      title: 'Icon Set',
      description: 'Comprehensive icon library with 300+ optimized SVGs for web and mobile applications.',
      image: '⚡',
      tags: ['Icons', 'Design', 'Web'],
      link: '#',
      year: '2023',
    },
    {
      title: 'Payment Dashboard',
      description: 'Real-time payment analytics dashboard with charts, filters, and transaction management.',
      image: '💳',
      tags: ['React', 'TypeScript', 'Data Visualization'],
      link: '#',
      year: '2023',
    },
    {
      title: 'Design Tools',
      description: 'Browser-based design tool with collaborative features and real-time synchronization.',
      image: '🎯',
      tags: ['Web App', 'Collaboration', 'WebSockets'],
      link: '#',
      year: '2023',
    },
    {
      title: 'Content Studio',
      description: 'CMS for managing digital content with rich text editor, media library, and publishing workflow.',
      image: '📝',
      tags: ['CMS', 'Full-stack', 'Node.js'],
      link: '#',
      year: '2022',
    },
    {
      title: 'Analytics Platform',
      description: 'Business intelligence platform for tracking metrics, generating reports, and forecasting trends.',
      image: '📊',
      tags: ['Data Analytics', 'React', 'Backend'],
      link: '#',
      year: '2022',
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application for productivity with offline support and sync capabilities.',
      image: '📱',
      tags: ['React Native', 'iOS', 'Android'],
      link: '#',
      year: '2022',
    },
  ]

  const categories = ['All', 'Design Systems', 'React', 'Next.js', 'Full-stack']

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Projects
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            A showcase of projects I&apos;ve designed and built. Each represents significant learning and creative problem-solving.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group h-full flex flex-col p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-muted/30 transition-all cursor-pointer"
            >
              {/* Image/Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {project.image}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-foreground/50 font-medium">
                    {project.year}
                  </span>
                </div>
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link Arrow */}
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                <span>View project</span>
                <span className="ml-2">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* View More */}
        <div className="mt-16 text-center">
          <p className="text-foreground/60 mb-4">
            Interested in working together?
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <span>Get in touch</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
