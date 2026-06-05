import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/shared/Reveal'
import { Counter } from '@/components/shared/Counter'
import { unsplash } from '@/lib/utils'
import { stats } from '@/data/site'

export function About() {
  return (
    <section className="section-padding">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        {/* Image */}
        <Reveal className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={unsplash('photo-1581094794329-c8112a89af12', 900, 80)}
              alt="Kottayam Interiors design studio at work"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-copper/30 bg-graphite p-6 shadow-xl sm:block">
            <div className="font-serif text-4xl font-bold text-gradient-gold">
              20+
            </div>
            <div className="text-xs uppercase tracking-wider text-warm-white/60">
              Years of Craft
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-copper" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
                Our Story
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-warm-white md:text-4xl lg:text-5xl">
              Two decades of building beautiful, lasting interiors in Kerala.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-warm-white/70">
              Kottayam Interiors began with a simple belief — that a well-made
              space should feel as good as it looks, and last for generations.
              From a small materials shop to a full design-and-build studio, we
              have stayed close to the craft and closer to our clients.
            </p>
            <p className="mt-4 leading-relaxed text-warm-white/70">
              Today we design, supply, and install across central Kerala — pairing
              the warmth of traditional workmanship with the precision of modern
              systems and genuine, warranty-backed materials.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <Counter
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <Button variant="luxury" size="lg" className="mt-10" asChild>
              <Link to="/about">
                More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
