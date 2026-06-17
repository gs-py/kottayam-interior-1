import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { unsplash } from '@/lib/utils'
import { cn } from '@/lib/utils'
import { testimonials } from '@/data/testimonials'

const AUTO_MS = 6000

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (dir: number) =>
      setIndex((i) => (i + dir + testimonials.length) % testimonials.length),
    []
  )

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), AUTO_MS)
    return () => clearInterval(id)
  }, [paused, go])

  const t = testimonials[index]

  return (
    <section className="section-padding marble-bg">
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by homeowners & builders"
          subtitle="The relationships we build matter as much as the spaces we create."
        />

        <div
          className="relative mx-auto mt-16 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="absolute -top-6 left-0 h-16 w-16 text-copper/15" />

          <AnimatePresence mode="wait">
            <m.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl border border-white/10 bg-graphite/60 p-8 md:p-12"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>

              <blockquote className="mt-6 font-serif text-xl italic leading-relaxed text-warm-white/90 md:text-2xl">
                “{t.quote}”
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={unsplash(t.image, 120, 80)}
                  alt={t.name}
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-copper/40"
                />
                <div>
                  <div className="font-semibold text-warm-white">{t.name}</div>
                  <div className="text-sm text-warm-white/50">{t.role}</div>
                </div>
              </div>
            </m.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-warm-white transition hover:border-copper hover:text-copper"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    i === index ? 'w-6 bg-copper' : 'w-2 bg-white/20'
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-warm-white transition hover:border-copper hover:text-copper"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
