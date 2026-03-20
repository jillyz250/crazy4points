import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://crazy4points.com'),
  title: 'Crazy4Points',
  description: 'Earn more points and travel for free using smarter strategies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-white text-slate-900 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">{children}</div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
