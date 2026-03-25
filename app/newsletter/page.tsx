import type { Metadata } from 'next'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Newsletter — Crazy4Points',
  description: 'Get weekly transfer bonuses, sweet spots, and strategies delivered free to your inbox.',
}

export default function NewsletterPage() {
  return (
    <section className="w-full py-24 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5 font-heading"
          style={{ color: '#2a2050' }}
        >
          Subscribe to Crazy4Points
        </h1>
        <p className="text-lg italic mb-10 font-body" style={{ color: '#5a4e7a' }}>
          Weekly transfer bonuses, sweet spots, and strategies. Free.
        </p>
        <div
          className="rounded-2xl p-8 sm:p-10"
          style={{
            backgroundColor: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(255,255,255,0.8)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <NewsletterForm />
        </div>
      </div>
    </section>
  )
}
