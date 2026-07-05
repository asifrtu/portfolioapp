export default function Experience() {
  const experiences = [
    {
      title: 'Senior Design Engineer',
      company: 'Vercel',
      period: '2023 — Present',
      description:
        'Building and maintaining critical components for Vercel&apos;s platform. Leading design system initiatives and collaborating with cross-functional teams on component architecture and accessibility.',
      highlights: ['Design Systems', 'Component Architecture', 'Accessibility'],
    },
    {
      title: 'Design Engineer',
      company: 'Stripe',
      period: '2021 — 2023',
      description:
        'Developed high-quality UI components and design system documentation. Focused on creating accessible, performant interfaces for payment integration.',
      highlights: ['React', 'TypeScript', 'CSS'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2019 — 2021',
      description:
        'Created responsive web applications and component libraries. Worked closely with designers to implement pixel-perfect interfaces.',
      highlights: ['Next.js', 'Tailwind CSS', 'Web Design'],
    },
    {
      title: 'Web Developer',
      company: 'Startup',
      period: '2017 — 2019',
      description:
        'Built full-stack web applications with modern JavaScript frameworks. Contributed to both frontend and backend development.',
      highlights: ['JavaScript', 'React', 'Full-stack'],
    },
  ]

  const projects = [
    {
      title: 'Craft',
      description: 'Interactive design system documentation with live component demos.',
      link: '#',
    },
    {
      title: 'Blocks',
      description: 'Pre-built component blocks for rapid UI development and prototyping.',
      link: '#',
    },
    {
      title: 'Icon Set',
      description: 'Comprehensive icon library with optimized SVGs for web and mobile.',
      link: '#',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Experience
          </h2>
          <p className="text-lg text-foreground/60">
            A timeline of my professional journey in design and development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary/30 pl-8 relative">
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>

              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <div className="flex items-center space-x-2 text-foreground/60 text-sm mb-3">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold tracking-tight">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="group p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-background transition-all"
              >
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-foreground/70 text-sm mb-4">
                  {project.description}
                </p>
                <span className="text-primary text-sm font-medium flex items-center space-x-1 group-hover:space-x-2 transition-all">
                  <span>View project</span>
                  <span>→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
