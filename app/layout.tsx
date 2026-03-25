import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Crazy4Points — Earn More. Travel Free.',
  description:
    'Real strategies, tools, and deals to help everyday travelers earn more points and fly for free.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <body className="min-h-screen font-body p-3 sm:p-5 md:p-8" style={{ backgroundColor: '#ede8df', color: '#1A1A2E' }}>
        <div
          className="flex flex-col rounded-3xl overflow-hidden min-h-[calc(100vh-1.5rem)] sm:min-h-[calc(100vh-2.5rem)] md:min-h-[calc(100vh-4rem)]"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, #faf8ff 0%, #ece4f8 45%, #c9b8e8 100%)',
          }}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
