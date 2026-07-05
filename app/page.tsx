'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Components from '@/components/Components'
import Experience from '@/components/Experience'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
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
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main className="pt-16">
        <Hero />
        <About />
        <Components />
        <Experience />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
