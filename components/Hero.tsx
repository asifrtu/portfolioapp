import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Avatar and Name */}
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                  CD
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Chánh Đại
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70">
                  Design Engineer
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              I build accessible, pixel-perfect digital experiences for the web. Passionate about the intersection of design and code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                Get in touch
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors">
                View my work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-8">
              <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">
                <span className="text-sm font-medium">Twitter</span>
              </a>
              <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">
                <span className="text-sm font-medium">Dribbble</span>
              </a>
            </div>
          </div>

          {/* Right - 3D Illustration Placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              {/* Isometric Shape - Simple CSS based */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Main cube shape using CSS */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl transform -rotate-3"></div>
                  
                  {/* Decorative circles */}
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/3 rounded-full blur-3xl"></div>

                  {/* Center element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/40">∘</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
