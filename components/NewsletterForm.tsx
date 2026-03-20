'use client'

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 rounded-lg text-sm outline-none max-w-xs sm:max-w-none"
        style={{
          border: '1px solid rgba(255,255,255,0.3)',
          backgroundColor: 'rgba(255,255,255,0.12)',
          color: '#ffffff',
        }}
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#F5A623', color: '#ffffff' }}
      >
        Subscribe
      </button>
    </form>
  )
}
