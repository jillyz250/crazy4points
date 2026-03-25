import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Crazy4Points',
  description: 'Get in touch with Crazy4Points.',
}

export default function ContactPage() {
  return (
    <section className="w-full py-24 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5 font-heading"
          style={{ color: '#2a2050' }}
        >
          Contact
        </h1>
        <p className="text-lg italic mb-10 font-body" style={{ color: '#5a4e7a' }}>
          Questions, partnerships, or just want to say hi?
        </p>
        <div
          className="rounded-2xl p-8 sm:p-10 text-left"
          style={{
            backgroundColor: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(255,255,255,0.8)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <p className="text-base font-medium mb-4" style={{ color: '#2a2050' }}>
            Reach out at:{' '}
            <a
              href="mailto:hello@crazy4points.com"
              className="underline hover:opacity-70 transition-opacity"
              style={{ color: '#5B2D8E' }}
            >
              hello@crazy4points.com
            </a>
          </p>
          <p className="text-sm" style={{ color: '#5a4e7a' }}>
            For press, partnerships, or brand collaborations, please include details about your proposal.
          </p>
        </div>
      </div>
    </section>
  )
}
