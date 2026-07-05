export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Navigation */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="h-px w-8 bg-primary"></div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">
                About
              </h2>
            </div>
            <div className="space-y-4">
              <div className="h-px w-8 bg-primary/50"></div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">
                Experience
              </h3>
            </div>
            <div className="space-y-4">
              <div className="h-px w-8 bg-primary/50"></div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">
                Projects
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I&apos;m a design engineer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently, I&apos;m a Senior Design Engineer at Vercel, specializing in design systems and component architecture. I contribute to the creation and maintenance of UI components that power Vercel&apos;s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              In the past, I&apos;ve had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to startups and small digital product studios. Additionally, I released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              In my spare time, I enjoy climbing, reading, spending time with my wife and dogs, or searching for rare plants in hidden gardens.
            </p>

            {/* Skills/Tags */}
            <div className="pt-8 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Figma
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Design Systems
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
