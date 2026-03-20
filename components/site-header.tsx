import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-me', label: 'About' },
  { href: '/tools/transfer-bonus-tracker', label: 'Tools' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide text-[color:var(--primary)]">
          <Image
            src="/logo-mark.svg"
            alt="Crazy4Points logo"
            width={48}
            height={48}
            priority
            className="h-12 w-12"
          />
          <span className="hidden text-base sm:inline">Crazy4Points</span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[color:var(--primary)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
