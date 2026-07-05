'use client'

import { useState, useEffect } from 'react'

export function useTheme() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(isDark)
    setMounted(true)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newDarkMode = !prev
      localStorage.setItem('darkMode', String(newDarkMode))
      
      if (newDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return newDarkMode
    })
  }

  return { darkMode, toggleDarkMode, mounted }
}
