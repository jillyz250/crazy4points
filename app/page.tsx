import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="w-full py-24 px-4 text-center"
        style={{
          background: 'linear-gradient(135deg, #F9F8FF 0%, #EDE7F6 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: '#F5A623', color: '#ffffff' }}
          >
            COMING SOON
          </span>
          <h1
            className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 font-heading"
            style={{ color: '#5B2D8E' }}
          >
            Earn More. Travel Free.
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed max-w-xl mx-auto font-body"
            style={{ color: '#4a4a6a' }}
          >
            Simple strategies, tools, and real deals to maximize your points.
          </p>
        </div>
      </section>

      {/* ACTION FEED SECTION */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-bold tracking-widest mb-5"
            style={{ color: '#F5A623' }}
          >
            BEST MOVE THIS WEEK
          </p>
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              boxShadow: '0 4px 24px rgba(91,45,142,0.08)',
              border: '1px solid #f0edf8',
            }}
          >
            <p
              className="text-lg sm:text-xl font-bold leading-snug mb-4 font-heading"
              style={{ color: '#1A1A2E' }}
            >
              Transfer Amex points to Flying Blue with a 30% bonus (limited time)
            </p>
            <Link
              href="/tools/transfer-bonus-tracker"
              className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
              style={{ color: '#F5A623' }}
            >
              View Transfer Bonus Tracker →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CRAZY4POINTS SECTION */}
      <section className="w-full py-16 px-4" style={{ backgroundColor: '#F9F8FF' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FeatureCard
              emoji="📡"
              title="Live Bonus Tracking"
              body="We scan the web daily so you never miss a transfer bonus."
            />
            <FeatureCard
              emoji="🎯"
              title="Real Strategies"
              body="Not generic advice. Specific moves based on what's happening right now."
            />
            <FeatureCard
              emoji="🔓"
              title="No Login Required"
              body="All tools are free and read-only. No account, no personal data."
            />
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA SECTION */}
      <section
        className="w-full py-20 px-4 text-center"
        style={{ backgroundColor: '#5B2D8E' }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4 font-heading"
            style={{ color: '#ffffff' }}
          >
            Get the Best Deals in Your Inbox
          </h2>
          <p className="text-base mb-8 font-body" style={{ color: '#d4c4f0' }}>
            Weekly transfer bonuses, sweet spots, and strategies. Free.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}

function FeatureCard({
  emoji,
  title,
  body,
}: {
  emoji: string
  title: string
  body: string
}) {
  return (
    <div
      className="rounded-2xl p-6 bg-white"
      style={{
        border: '1px solid #e8e2f5',
        boxShadow: '0 2px 12px rgba(91,45,142,0.06)',
      }}
    >
      <div className="text-3xl mb-3">{emoji}</div>
      <h3
        className="text-lg font-bold mb-2 font-heading"
        style={{ color: '#5B2D8E' }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed font-body" style={{ color: '#4a4a6a' }}>
        {body}
      </p>
    </div>
  )
}
