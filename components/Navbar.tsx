'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-white border-b border-gray-200"
      style={{ borderBottomColor: '#e5e7eb' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="crazy4points logo"
              width={180}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about-me">About Me</NavLink>
            <NavLink href="/tools/transfer-bonus-tracker">Tools</NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ backgroundColor: '#5B2D8E' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
              style={{ backgroundColor: '#5B2D8E' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ backgroundColor: '#5B2D8E' }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-4">
            <MobileNavLink href="/" onClick={() => setMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/about-me" onClick={() => setMenuOpen(false)}>About Me</MobileNavLink>
            <MobileNavLink href="/tools/transfer-bonus-tracker" onClick={() => setMenuOpen(false)}>Tools</MobileNavLink>
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
      className="text-sm font-medium transition-colors duration-150 relative group"
      style={{ color: '#5B2D8E', fontFamily: 'var(--font-body)' }}
    >
      {children}
      <span
        className="absolute -bottom-0.5 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
        style={{ backgroundColor: '#F5A623' }}
      />
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-base font-medium px-2 py-1 rounded transition-colors"
      style={{ color: '#5B2D8E' }}
    >
      {children}
    </Link>
  )
}
