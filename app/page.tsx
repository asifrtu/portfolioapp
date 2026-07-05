'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Components from '@/components/Components'
import Experience from '@/components/Experience'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
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
