import Image from 'next/image'

export const metadata = {
  title: 'About Me — Crazy4Points',
  description: 'Meet Jill — the person behind crazy4points and 20+ years of points-and-miles strategy.',
}

export default function AboutMePage() {
  return (
    <section className="w-full py-16 px-4" style={{ backgroundColor: '#F9F8FF' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT — Photo */}
          <div className="flex justify-center md:justify-start">
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

          {/* RIGHT — Bio */}
          <div>
            <h1
              className="text-4xl sm:text-5xl font-extrabold mb-8"
              style={{ color: '#5B2D8E', fontFamily: 'var(--font-heading)' }}
            >
              About Me
            </h1>

            <div
              className="space-y-5 leading-8 text-base"
              style={{ color: '#1A1A2E', fontFamily: 'var(--font-body)', maxWidth: '56ch' }}
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
                The strategy, the timing, the moving pieces. For me, points and miles have never
                just been about travel—they&apos;re about understanding how the system works and
                using it to your advantage.
              </p>

              <p>
                I&apos;m Jill. I discovered this world over 20 years ago while planning a cruise,
                when I came across a credit card offer tied to a cruise discount. What started as a
                simple way to save a few hundred dollars quickly turned into something much bigger.
                I began digging deeper, learning how rewards worked, and building strategies to get
                the most value possible.
              </p>

              <p>
                Over time, that curiosity became lived experience. I&apos;ve used points and miles
                to travel to places like Napa, France, Greece, Jamaica, the Bahamas, Arizona—and
                many more exciting places—experiencing everything from lie-flat seats and high-end
                stays to more practical, budget-friendly trips when it made sense. The common thread
                has always been value.
              </p>

              <p>
                Somewhere along the way, I became the person my friends always come to for travel
                advice. I love the research, the strategy, and finding the best options—uncovering
                deals most people wouldn&apos;t think to look for. There&apos;s something
                incredibly satisfying about helping someone take a better trip than they thought
                was possible.
              </p>

              <p>
                I bought the crazy4points domain over 15 years ago with the idea of building a
                blog around this space. Life got busy, priorities shifted, and the idea stayed on
                the shelf. Now, with my kids older, it feels like the right time to bring it to
                life.
              </p>

              <p>
                More recently, my interest in AI—and figuring out how to apply it to this
                space—has completely changed the landscape for me. It&apos;s added a new layer of
                strategy, efficiency, and opportunity, and brought a renewed level of focus and
                energy to something I&apos;ve always enjoyed.
              </p>

              <p>
                This site reflects everything I&apos;ve learned over the years—real strategies,
                practical tools, and a straightforward approach to using points, miles, and credit
                card benefits effectively.
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
        </div>
      </div>
    </section>
  )
}
