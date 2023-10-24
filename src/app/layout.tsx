import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Smart Fit',
  description: 'Challenge smart fit front-end',
  icons: {
    icon: '/assets/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${inter.variable}`}>
      <body>
        <Header />
        <main className="container my-24 min-h-[calc(100vh_-_26.3rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
