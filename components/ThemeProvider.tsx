'use client'

import { useState, useEffect, ReactNode } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check system preference on mount
    const isDark = localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    setDarkMode(isDark)
    setMounted(true)
    
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
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

  // Prevent flash of unstyled content
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <div data-theme-context="true">
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const isDark = localStorage.getItem('darkMode') === 'true' ||
                (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
              if (isDark) {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
        }}
      />
    </div>
  )
}
