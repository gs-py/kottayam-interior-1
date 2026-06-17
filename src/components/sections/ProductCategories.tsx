import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { m, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { unsplash } from '@/lib/utils'
import { productCategories } from '@/data/products'

function ParallaxCard({
  slug,
  name,
  image,
  index,
}: {
  slug: string
  name: string
  image: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const dir = index % 2 === 0 ? 1 : -1
  const y = useTransform(scrollYProgress, [0, 1], [24 * dir, -24 * dir])

  return (
    <div ref={ref}>
      <Link
        to={`/products?category=${slug}`}
        className="group relative block h-72 overflow-hidden rounded-2xl border border-white/10"
      >
        <m.img
          style={{ y }}
          src={unsplash(image, 800, 80)}
          alt={name}
          loading="lazy"
          className="absolute inset-0 h-[120%] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-copper/0 transition-colors duration-300 group-hover:bg-copper/20" />
        <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6">
          <h3 className="translate-y-1 font-serif text-xl font-semibold text-warm-white transition-transform duration-300 group-hover:translate-y-0">
            {name}
          </h3>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-warm-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </div>
  )
}

export function ProductCategories() {
  return (
    <section className="section-padding marble-bg">
      <div className="container">
        <SectionHeader
          eyebrow="Materials"
          title="Genuine products, trusted brands"
          subtitle="Everything your build needs — stocked, warranty-backed, and delivered across Kerala."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat, i) => (
            <ParallaxCard key={cat.slug} {...cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
