export default function Footer() {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Navigate',
      links: ['Home', 'About', 'Work', 'Blog', 'Contact'],
    },
    {
      title: 'Connect',
      links: ['Twitter', 'GitHub', 'LinkedIn', 'Dribbble', 'Email'],
    },
    {
      title: 'Resources',
      links: ['Components', 'Design System', 'Snippets', 'Tools', 'Inspiration'],
    },
  ]

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MAR</span>
              </div>
              <span className="font-semibold">MD ASIF RAZA</span>
            </div>
            <p className="text-sm text-foreground/60">
              Senior Full Stack Developer
            </p>
          </div>

          {/* Links Sections */}
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <div>
            © {currentYear} MD ASIF RAZA. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
