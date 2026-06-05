import { brandNames } from '@/data/brands'

export function Brands() {
  // Duplicate for seamless infinite marquee
  const loop = [...brandNames, ...brandNames]

  return (
    <section className="border-y border-white/10 bg-graphite/40 py-14">
      <div className="container">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-warm-white/40">
          Authorised dealer for India’s leading brands
        </p>
      </div>

      <div className="group relative mt-10 overflow-hidden">
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-charcoal to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-charcoal to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-serif text-2xl font-semibold text-warm-white/30 grayscale transition-all duration-300 hover:text-copper hover:grayscale-0 md:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
