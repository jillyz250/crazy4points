import Image from 'next/image'
import Link from 'next/link'

const EXPLORE_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/blog/guides', label: 'Guides' },
  { href: '/tools/transfer-bonus-tracker', label: 'Tools' },
  { href: '/newsletter', label: 'Newsletter' },
]

const COMPANY_LINKS = [
  { href: '/about-me', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/work-with-me', label: 'Work With Me' },
]

const LEGAL_LINKS = [
  { href: '/legal/privacy-policy', label: 'Privacy Policy' },
  { href: '/legal/terms-of-use', label: 'Terms of Use' },
  { href: '/legal/affiliate-disclosure', label: 'Affiliate Disclosure' },
  { href: '/legal/do-not-sell', label: 'Do Not Sell or Share' },
  { href: '/legal/cookie-policy', label: 'Cookie Policy' },
  { href: '/legal/accessibility', label: 'Accessibility Statement' },
]

const SOCIAL_LINKS = [
  {
    href: 'https://instagram.com/crazy4points',
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    href: 'https://tiktok.com/@crazy4points',
    label: 'TikTok',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.77 1.52V6.76a4.84 4.84 0 01-1-.07z"/>
      </svg>
    ),
  },
  {
    href: 'https://youtube.com/@crazy4points',
    label: 'YouTube',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    href: 'https://pinterest.com/crazy4points',
    label: 'Pinterest',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
]

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith('http')
  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="text-sm transition-colors duration-150 hover:text-white"
      style={{ color: '#c4b5e0' }}
    >
      {children}
    </Link>
  )
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#e2d9f3' }}>
      {children}
    </h4>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1e0e3e' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">

          {/* Column 1 — Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.jpeg"
                alt="Crazy4Points logo"
                width={160}
                height={42}
                className="h-10 w-auto object-contain"
                style={{ mixBlendMode: 'screen', filter: 'brightness(1.4)' }}
              />
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#a891cc' }}>
              Points, perks, and travel that hits different. Because epic travel isn&apos;t just for the fancy people.
            </p>
            <p className="text-xs" style={{ color: '#6b5490' }}>
              © 2026 Crazy4Points. All rights reserved.
            </p>
          </div>

          {/* Column 2 — Explore */}
          <div>
            <FooterHeading>Explore</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              {EXPLORE_LINKS.map(({ href, label }) => (
                <li key={href}><FooterLink href={href}>{label}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <FooterHeading>Company</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={href}><FooterLink href={href}>{label}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div>
            <FooterHeading>Legal</FooterHeading>
            <ul className="flex flex-col gap-2.5">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={href}><FooterLink href={href}>{label}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Social */}
          <div>
            <FooterHeading>Social</FooterHeading>
            <ul className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: '#c4b5e0' }}
                  >
                    {icon}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-900/60 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-center sm:text-left" style={{ color: '#6b5490' }}>
              Crazy4Points is a participant in affiliate programs. We may earn a commission when you click links.{' '}
              <Link href="/legal/affiliate-disclosure" className="underline hover:text-purple-300" style={{ color: '#8b6eb0' }}>
                Learn more.
              </Link>
            </p>
            <div className="flex items-center gap-4">
              <FooterLink href="/legal/privacy-policy">Privacy</FooterLink>
              <span style={{ color: '#3d2860' }}>·</span>
              <FooterLink href="/legal/terms-of-use">Terms</FooterLink>
              <span style={{ color: '#3d2860' }}>·</span>
              <FooterLink href="/legal/do-not-sell">Do Not Sell</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
