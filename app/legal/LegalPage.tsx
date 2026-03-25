export default function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string
  lastUpdated: string
  children: React.ReactNode
}) {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div
          className="rounded-2xl p-8 sm:p-12"
          style={{
            backgroundColor: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#9b7fc4' }}>
            Legal
          </p>
          <h1
            className="text-3xl sm:text-4xl font-extrabold leading-tight mb-2 font-heading"
            style={{ color: '#2a2050' }}
          >
            {title}
          </h1>
          <p className="text-sm mb-8" style={{ color: '#8a7aaa' }}>
            Last updated: {lastUpdated}
          </p>
          <div
            className="prose max-w-none text-sm leading-relaxed space-y-4 [&_h2]:text-base [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-2 [&_a]:underline [&_a]:decoration-purple-400 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1"
            style={{ color: '#3d3060' }}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
