import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-[color:var(--muted)] via-white to-orange-50 px-8 py-16 shadow-sm sm:px-12">
        <span className="inline-flex rounded-full border border-orange-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
          Coming Soon
        </span>
        <div className="mt-6 max-w-3xl space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--primary)] sm:text-6xl">
            Earn More. Travel Free.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Simple strategies, tools, and real deals to maximize your points.
          </p>
        </div>
      </section>

      <section className="max-w-3xl rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-sm">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Best Move This Week
          </p>
          <h2 className="text-2xl font-semibold text-slate-900">
            Transfer Amex points to Flying Blue with a 30% bonus (limited time)
          </h2>
          <Link
            href="/tools/transfer-bonus-tracker"
            className="inline-flex text-sm font-semibold text-[color:var(--primary)] transition hover:text-[color:var(--accent)]"
          >
            View Transfer Bonus Tracker →
          </Link>
        </div>
      </section>
    </div>
  );
}
