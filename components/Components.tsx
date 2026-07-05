export default function Components() {
  const components = [
    {
      title: 'Button Component',
      description: 'Flexible button component with multiple variants and sizes for consistent UI patterns.',
      tags: ['React', 'Accessible'],
    },
    {
      title: 'Form Input',
      description: 'Validated form input with error states, labels, and helper text for seamless user input.',
      tags: ['React', 'Forms'],
    },
    {
      title: 'Card Layout',
      description: 'Reusable card component for displaying content with consistent spacing and styling.',
      tags: ['React', 'Layout'],
    },
    {
      title: 'Modal Dialog',
      description: 'Accessible modal component with focus management and keyboard navigation support.',
      tags: ['Accessible', 'Interactive'],
    },
    {
      title: 'Navigation Menu',
      description: 'Dropdown navigation menu with support for nested items and keyboard shortcuts.',
      tags: ['React', 'Navigation'],
    },
    {
      title: 'Tooltip',
      description: 'Lightweight tooltip component for providing contextual help and information.',
      tags: ['React', 'Interactive'],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Components
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            A collection of reusable, accessible components built with React and modern design principles.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {components.map((component, index) => (
            <div
              key={index}
              className="group p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-all cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {component.title}
              </h3>
              <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                {component.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {component.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <span>View all components</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
