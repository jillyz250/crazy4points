import Image from 'next/image'

export const metadata = {
  title: 'About Me — Crazy4Points',
  description: 'Meet Jill — the person behind crazy4points and 20+ years of points-and-miles strategy.',
}

export default function AboutMePage() {
  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: '#F9F8FF' }}>
      <div className="max-w-2xl mx-auto">
        {/* Photo — top, centered */}
        <div className="flex justify-center mb-10">
          <div
            className="relative w-full max-w-sm rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 8px 40px rgba(91,45,142,0.15)' }}
          >
            <Image
              src="/jill.jpg"
              alt="Jill — crazy4points"
              width={480}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Bio — below photo */}
        <div
          className="space-y-5 leading-8 text-base"
          style={{ color: '#1A1A2E', fontFamily: 'var(--font-body)' }}
        >
              <p>
                <em
                  className="text-2xl font-bold not-italic"
                  style={{ color: '#5B2D8E', fontFamily: 'var(--font-heading)' }}
                >
                  I&apos;m addicted.
                </em>
              </p>

              <p>
                The strategy, the timing, the moving pieces. For me, points and miles have never just been about travel. They&apos;re about understanding how the system works and using it to my advantage.
              </p>

              <p>
                I&apos;m Jill. I stumbled into this world over 20 years ago while planning a cruise. A credit card offer caught my eye, and what started as a way to save a few hundred dollars quickly turned into something much bigger. I started digging deeper, learning how rewards actually worked, and building strategies to squeeze out as much value as possible.
              </p>

              <p>
                Over the years, I&apos;ve put that curiosity to work. I&apos;ve used points and miles to get to Napa, France, Greece, Jamaica, the Bahamas, Arizona, and plenty of other places, sometimes in lie-flat seats and high-end hotels, sometimes on perfectly practical trips where the math just made sense. The through-line has always been value.
              </p>

              <p>
                Somewhere along the way, I became the person my friends call when they&apos;re planning a trip. I love the research, the strategy, the hunt for options most people wouldn&apos;t think to look for. There&apos;s something satisfying about helping someone take a trip they didn&apos;t think they could afford.
              </p>

              <p>
                I bought the crazy4points domain over 15 years ago thinking I&apos;d build a blog around it. Life had other plans. With my kids older now, it finally feels like the right time.
              </p>

              <p>
                More recently, my obsession with AI has completely changed how I approach travel. It&apos;s added a new layer of strategy and efficiency, and honestly reignited my obsession with something I&apos;ve always loved.
              </p>

              <p>
                This site is everything I&apos;ve learned over the years: real strategies, practical tools, and a no-nonsense approach to getting the most out of your points, miles, and credit card benefits.
              </p>

              <p>
                <strong
                  className="text-lg"
                  style={{ color: '#1A1A2E', fontFamily: 'var(--font-heading)' }}
                >
                  It&apos;s a game. And I&apos;m all in.
                </strong>
              </p>
        </div>
      </div>
    </section>
  )
}
