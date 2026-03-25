'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about-me', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/tools/transfer-bonus-tracker', label: 'Tools' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo — mix-blend-mode:multiply makes white bg transparent over the gradient */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="Crazy4Points logo"
              width={180}
              height={48}
              className="h-12 w-auto object-contain"
              style={{ mixBlendMode: 'multiply' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ href, label }) => (
              <NavLink key={href} href={href}>{label}</NavLink>
            ))}
            <SubscribeButton />
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#3d3060] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#3d3060] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#3d3060] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-purple-200/50 py-5 flex flex-col gap-3 pb-6">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium px-2 py-1.5 rounded transition-colors"
                style={{ color: '#3d3060', fontFamily: 'var(--font-body)' }}
              >
                {label}
              </Link>
            ))}
            <div className="px-2 pt-2">
              <SubscribeButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium transition-colors duration-150 hover:text-purple-800"
      style={{ color: '#3d3060', fontFamily: 'var(--font-body)' }}
    >
      {children}
    </Link>
  )
}

function SubscribeButton() {
  return (
    <Link
      href="/newsletter"
      className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-150 hover:shadow-md"
      style={{
        backgroundColor: '#ffffff',
        color: '#1A1A2E',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        fontFamily: 'var(--font-body)',
      }}
    >
      Subscribe
    </Link>
  )
}
