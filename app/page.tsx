'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HeroSection from '@/components/hero/hero'
import PostCard from '@/components/post-card'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <HeroSection />
      </main>
    </div>
  )
}
