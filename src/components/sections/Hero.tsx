import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { unsplash } from '@/lib/utils'
import { site, stats } from '@/data/site'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[700px] items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={unsplash('photo-1600585154340-be6161a56a0c', 1920, 80)}
          alt="Luxury interior designed by Interior World"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-copper" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-copper">
              Interior Design • Kottayam, Kerala
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-serif text-5xl font-bold leading-[1.05] text-warm-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Spaces that feel
            <span className="block text-gradient-gold">crafted, not built.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-warm-white/70"
          >
            Premium interior design, architecture, and genuine building materials —
            delivered with two decades of craftsmanship across central Kerala.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/contact">
                Get a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={site.phoneHref}>
                <Phone className="h-4 w-4" /> {site.phone}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 1 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 glass sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-5 py-5 text-center">
              <div className="font-serif text-2xl font-bold text-warm-white md:text-3xl">
                {s.value}
                {s.suffix}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-warm-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-warm-white/30 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-2 w-1 rounded-full bg-copper"
          />
        </div>
      </div>
    </section>
  )
}
