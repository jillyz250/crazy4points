import transferBonuses from '@/data/transfer-bonuses.json';

type TransferBonus = {
  program: string;
  partner: string;
  bonus: string;
  date: string;
  status: 'Active' | 'Expired';
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function TransferBonusTrackerPage() {
  const rows = transferBonuses as TransferBonus[];

  return (
    <section className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">Tools</p>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--primary)]">Transfer Bonus Tracker</h1>
        <p className="text-lg leading-8 text-slate-600">
          Current and recent transfer bonuses across major programs
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[color:var(--border)] text-left">
            <thead className="bg-[color:var(--muted)]">
              <tr className="text-sm uppercase tracking-[0.18em] text-slate-500">
                <th className="px-6 py-4 font-semibold">Program</th>
                <th className="px-6 py-4 font-semibold">Partner</th>
                <th className="px-6 py-4 font-semibold">Bonus</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--border)] bg-white text-sm text-slate-700 sm:text-base">
              {rows.map((row) => (
                <tr key={`${row.program}-${row.partner}-${row.date}`} className="transition hover:bg-orange-50/50">
                  <td className="px-6 py-4 font-medium text-slate-900">{row.program}</td>
                  <td className="px-6 py-4">{row.partner}</td>
                  <td className="px-6 py-4 font-semibold text-[color:var(--primary)]">{row.bonus}</td>
                  <td className="px-6 py-4">{formatDate(row.date)}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      row.status === 'Active' ? 'text-emerald-600' : 'text-slate-400'
                    }`}
                  >
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-sm text-slate-500">Updated regularly. Verified with official sources.</p>
    </section>
  );
}
