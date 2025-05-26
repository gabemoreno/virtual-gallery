import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Virtual Art Gallery',
  description: 'Explore brushstrokes through time',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-700`}>
        {/* Static background gradient layer */}
        <div className="fixed inset-0 -z-10" />

        {/* Page wrapper with full-height column flex layout */}
        <div className="flex flex-col min-h-screen">
          <Analytics />
          <SpeedInsights />
          <Navbar />
          <main className="flex-grow text-gray-700">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
