'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Book, BookAIcon, Briefcase, ChevronDown, Info } from 'lucide-react'
import Link from 'next/link'
 const navItems = [
    {
      icon: Info,
      title: "About",
      description:
        "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
      href: "/about",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description:
        "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
      href: "/experience",
    },
    {
      icon: BookAIcon,
      title: "Projects",
      description:
        "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
      href: "/projects",
    },
    {
      icon: Book,
      title: "Blog",
      description:
        "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
      href: "/blog",
    },

  ]
export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* Full-Screen Cover Page */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-background/95">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl w-full text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs sm:text-sm text-foreground/70 font-medium">Welcome to my digital space</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight">
                <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground via-foreground to-foreground/70">
                  Sr Full Stack Software Developer
                </span>
              </h1>
              
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 font-light">
                | ReactJS | NodeJS | Mern Stack | AWS | Lambda | S3 | Cloudflare | Learning AI/ML | MongoDB | Microservices | SQL | Docker
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-4xl mx-auto">
              Software Engineer with a proven track record of delivering modern, scalable web applications across the full development lifecycle. Skilled in React.js, Next.js, Node.js, Express.js, MongoDB, and TypeScript, with expertise in building performant frontends, robust backend APIs, and database-driven applications. Strong engineering professional with a Bachelor of Technology (B.Tech.).
            
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold overflow-hidden hover:shadow-lg transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start a project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
              </button>
              
              <button className="px-8 py-4 border border-border rounded-xl font-semibold hover:bg-muted/50 transition-colors duration-300">
                Explore my work
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12 animate-bounce">
              <ChevronDown size={24} className="mx-auto text-foreground/40" />
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        {/* <div className="absolute bottom-12 left-8 right-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto w-full">
          <div className="group p-4 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-background/80 transition-all cursor-pointer hover:shadow-lg">
            <div className="text-2xl font-bold text-primary">50+</div>
            <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">Projects Completed</p>
          </div>
          
          <div className="group p-4 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-background/80 transition-all cursor-pointer hover:shadow-lg">
            <div className="text-2xl font-bold text-primary">8+</div>
            <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">Years Experience</p>
          </div>
          
          <div className="group p-4 rounded-lg border border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-background/80 transition-all cursor-pointer hover:shadow-lg">
            <div className="text-2xl font-bold text-primary">100%</div>
            <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">Client Satisfaction</p>
          </div>
        </div> */}
      </section>

      {/* Social Links Bar */}
      <div className="sticky bottom-0 left-0 right-0 z-40 border-t border-border bg-background/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <p className="text-sm text-foreground/60">Get in touch</p>
          <div className="flex items-center gap-6">
           <Link
              href="https://x.com/_mdasifraza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 transition-colors hover:text-foreground"
            >
              <span className="text-sm font-medium">Twitter</span>
            </Link>

            <Link
              href="https://github.com/asifrtu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 transition-colors hover:text-foreground"
            >
              <span className="text-sm font-medium">GitHub</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/mdasifraza/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 transition-colors hover:text-foreground"
            >
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>

            <Link
              href="https://medium.com/@asifrazartu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 transition-colors hover:text-foreground"
            >
              <span className="text-sm font-medium">Medium</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
