'use client'

import { Menu, X, Moon, Sun, Search, Users, Camera, Info, Book, BookAIcon, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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

  useEffect(() => {
    setMounted(true)
    const isDark = localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', String(newDarkMode))
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MAR</span>
            </div> */}
            <span className="font-semibold text-lg hidden sm:inline">MD ASIF RAZA</span>
          </div>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-6 w-6 text-black" />
                <h3 className="text-2xl">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        {/* <div className="flex items-center space-x-4">
          <button className="hidden sm:inline-flex items-center space-x-2 px-3 py-2 text-sm text-foreground/60 hover:text-foreground border border-border rounded-lg transition-colors">
            <Search size={16} />
            <span>Search</span>
            <span className="text-xs text-foreground/40 ml-2">⌘K</span>
          </button>

          {mounted && (
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
              type="button"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div> */}
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`/${item.href}`}
                className="block text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
