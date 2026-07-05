import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function Outlet() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
       <Header />
      </head>
      <body className="antialiased">
        
      </body>
      <Footer />
    </html>
  )
}

export default Outlet