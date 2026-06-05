import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { unsplash } from '@/lib/utils'

interface Crumb {
  label: string
  to?: string
}

interface PageBannerProps {
  eyebrow?: string
  title: string
  subtitle?: string
  image: string
  crumbs?: Crumb[]
}

export function PageBanner({
  eyebrow,
  title,
  subtitle,
  image,
  crumbs = [],
}: PageBannerProps) {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src={unsplash(image, 1920, 80)}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/50" />
      </div>

      <div className="container relative z-10 py-16">
        {crumbs.length > 0 && (
          <nav className="mb-5 flex items-center gap-2 text-sm text-warm-white/50">
            <Link to="/" className="hover:text-copper">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <ChevronRight className="h-3.5 w-3.5" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-copper">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-warm-white/80">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-copper" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
                {eyebrow}
              </span>
            </div>
          )}
          <h1 className="font-serif text-4xl font-bold leading-tight text-warm-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg leading-relaxed text-warm-white/70">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
