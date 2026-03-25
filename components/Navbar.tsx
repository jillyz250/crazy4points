'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-18 py-4">
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
            <NavLink href="/about-me">About</NavLink>
            <NavLink href="/sign-in">Sign in</NavLink>
            <SubscribeButton />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ backgroundColor: '#4a3a6a' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
              style={{ backgroundColor: '#4a3a6a' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ backgroundColor: '#4a3a6a' }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-purple-100 py-4 flex flex-col gap-4 pb-6">
            <MobileNavLink href="/" onClick={() => setMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/about-me" onClick={() => setMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/sign-in" onClick={() => setMenuOpen(false)}>Sign in</MobileNavLink>
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
      className="text-sm font-medium transition-colors duration-150"
      style={{ color: '#3d3060', fontFamily: 'var(--font-body)' }}
    >
      {children}
    </Link>
  )
}

function SubscribeButton() {
  return (
    <Link
      href="/subscribe"
      className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-150"
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
      style={{ color: '#3d3060' }}
    >
      {children}
    </Link>
  )
}
