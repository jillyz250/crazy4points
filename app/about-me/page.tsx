import Image from 'next/image';

const aboutParagraphs = [
  'I’m addicted.',
  'The strategy, the timing, the moving pieces. For me, points and miles have never just been about travel—they’re about understanding how the system works and using it to your advantage.',
  'I’m Jill. I discovered this world over 20 years ago while planning a cruise, when I came across a credit card offer tied to a cruise discount. What started as a simple way to save a few hundred dollars quickly turned into something much bigger. I began digging deeper, learning how rewards worked, and building strategies to get the most value possible.',
  'Over time, that curiosity became lived experience. I’ve used points and miles to travel to places like Napa, France, Greece, Jamaica, the Bahamas, Arizona—and many more exciting places—experiencing everything from lie-flat seats and high-end stays to more practical, budget-friendly trips when it made sense. The common thread has always been value.',
  'Somewhere along the way, I became the person my friends always come to for travel advice. I love the research, the strategy, and finding the best options—uncovering deals most people wouldn’t think to look for.',
  'I bought the crazy4points domain over 15 years ago with the idea of building a blog around this space. Now feels like the right time to bring it to life.',
  'More recently, my interest in AI—and figuring out how to apply it to this space—has added a new level of strategy, efficiency, and opportunity.',
  'This site reflects everything I’ve learned over the years.',
  'It’s a game. And I’m all in.',
];

export default function AboutMePage() {
  return (
    <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--muted)] shadow-sm">
        <Image
          src="/jill-portrait.svg"
          alt="Portrait illustration of Jill from Crazy4Points"
          width={900}
          height={1100}
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="space-y-5">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">About Me</p>
          <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--primary)]">A lifelong points strategist.</h1>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
