import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Crazy4Points',
  description: 'Tips, strategies, and guides for earning more points and traveling free.',
}

export default function BlogPage() {
  return (
    <section className="w-full py-24 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5 font-heading"
          style={{ color: '#2a2050' }}
        >
          Blog
        </h1>
        <p className="text-lg italic mb-8 font-body" style={{ color: '#5a4e7a' }}>
          Tips, strategies, and guides for earning more points and traveling free.
        </p>
        <div
          className="rounded-2xl p-10"
          style={{
            backgroundColor: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(255,255,255,0.8)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <p className="text-base font-medium" style={{ color: '#5a4e7a' }}>
            Posts coming soon. Subscribe to get notified when we publish.
          </p>
        </div>
      </div>
    </section>
  )
}
