import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work With Me — Crazy4Points',
  description: 'Partner with Crazy4Points to reach an audience of engaged points and travel enthusiasts.',
}

export default function WorkWithMePage() {
  return (
    <section className="w-full py-24 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5 font-heading"
          style={{ color: '#2a2050' }}
        >
          Work With Me
        </h1>
        <p className="text-lg italic mb-10 font-body" style={{ color: '#5a4e7a' }}>
          Let&apos;s build something together.
        </p>
        <div
          className="rounded-2xl p-8 sm:p-10 text-left"
          style={{
            backgroundColor: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(255,255,255,0.8)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <p className="text-base leading-relaxed mb-4" style={{ color: '#2a2050' }}>
            Interested in sponsorships, content partnerships, or affiliate opportunities? Reach out and let&apos;s talk.
          </p>
          <a
            href="mailto:partnerships@crazy4points.com"
            className="inline-block text-sm font-semibold px-6 py-2.5 rounded-xl transition-all duration-150"
            style={{ backgroundColor: '#d4960a', color: '#ffffff' }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
