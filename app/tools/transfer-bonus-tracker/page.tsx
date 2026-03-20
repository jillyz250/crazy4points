import bonuses from '@/data/transfer-bonuses.json'

export const metadata = {
  title: 'Transfer Bonus Tracker — Crazy4Points',
  description: 'Current and recent transfer bonuses across major points programs — updated regularly.',
}

type Bonus = {
  program: string
  partner: string
  bonus: string
  date: string
  status: string
  notes: string
}

export default function TransferBonusTrackerPage() {
  const data = bonuses as Bonus[]

  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: '#F9F8FF' }}>
      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <div className="mb-10">
          <h1
            className="text-4xl sm:text-5xl font-extrabold mb-3 font-heading"
            style={{ color: '#5B2D8E' }}
          >
            Transfer Bonus Tracker
          </h1>
          <p className="text-base font-body" style={{ color: '#4a4a6a' }}>
            Current and recent transfer bonuses across major points programs.
          </p>
        </div>

        {/* Table — scrollable on mobile */}
        <div
          className="overflow-x-auto rounded-2xl"
          style={{ boxShadow: '0 4px 24px rgba(91,45,142,0.08)' }}
        >
          <table className="w-full min-w-[640px] bg-white text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: '#5B2D8E' }}>
                <Th>Program</Th>
                <Th>Partner</Th>
                <Th>Bonus</Th>
                <Th>Date</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className="border-b tracker-row"
                  style={{ borderBottomColor: '#f0edf8' }}
                >
                  <Td>{row.program}</Td>
                  <Td>{row.partner}</Td>
                  <Td>
                    <span className="font-bold" style={{ color: '#5B2D8E' }}>
                      {row.bonus}
                    </span>
                  </Td>
                  <Td>{formatDate(row.date)}</Td>
                  <Td>
                    <StatusBadge status={row.status} />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <p className="mt-4 text-xs italic font-body" style={{ color: '#9e94b8' }}>
          Updated regularly. Verified against official bank sources.
        </p>
      </div>

      {/* CSS hover via style tag — keeps this a pure server component */}
      <style>{`
        .tracker-row { background-color: #ffffff; }
        .tracker-row:nth-child(even) { background-color: #fdfcff; }
        .tracker-row:hover { background-color: #EDE7F6 !important; }
      `}</style>
    </section>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      className="px-5 py-4 text-left text-xs font-bold tracking-wider uppercase"
      style={{ color: '#ffffff' }}
    >
      {children}
    </th>
  )
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-5 py-4 font-body" style={{ color: '#1A1A2E' }}>
      {children}
    </td>
  )
}

function StatusBadge({ status }: { status: string }) {
  const isActive = status === 'Active'
  return (
    <span className="inline-flex items-center gap-1.5 font-bold text-xs">
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: isActive ? '#16a34a' : '#9ca3af' }}
      />
      <span
        style={{
          color: isActive ? '#16a34a' : '#9ca3af',
          textDecoration: isActive ? 'none' : 'line-through',
        }}
      >
        {status}
      </span>
    </span>
  )
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
