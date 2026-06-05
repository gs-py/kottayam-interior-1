import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '@/components/shared/Seo'
import { PageBanner } from '@/components/shared/PageBanner'
import { Reveal } from '@/components/shared/Reveal'
import { Badge } from '@/components/ui/badge'
import { cn, unsplash } from '@/lib/utils'
import { products, productCategories } from '@/data/products'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const active = params.get('category') ?? 'all'

  const filtered = useMemo(
    () =>
      active === 'all'
        ? products
        : products.filter((p) => p.category === active),
    [active]
  )

  const setCategory = (slug: string) => {
    if (slug === 'all') {
      setParams({})
    } else {
      setParams({ category: slug })
    }
  }

  return (
    <>
      <Seo
        title="Products | Kottayam Interiors — Gypsum, Drywall & Building Materials"
        description="Browse genuine gypsum boards, metal channels, fibre cement, insulation, drywall systems, and decorative panels from trusted brands in Kottayam, Kerala."
        path="/products"
      />
      <PageBanner
        eyebrow="Materials"
        title="Genuine building materials"
        subtitle="Warranty-backed products from the brands professionals trust."
        image="photo-1581094794329-c8112a89af12"
        crumbs={[{ label: 'Products' }]}
      />

      <div className="section-padding">
        <div className="container grid gap-10 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-serif text-lg font-semibold text-warm-white">
              Categories
            </h2>
            <ul className="mt-4 space-y-1">
              <li>
                <button
                  onClick={() => setCategory('all')}
                  className={cn(
                    'w-full rounded-lg px-4 py-2.5 text-left text-sm transition-colors',
                    active === 'all'
                      ? 'bg-copper/15 text-copper'
                      : 'text-warm-white/60 hover:bg-white/5 hover:text-warm-white'
                  )}
                >
                  All Products
                </button>
              </li>
              {productCategories.map((c) => (
                <li key={c.slug}>
                  <button
                    onClick={() => setCategory(c.slug)}
                    className={cn(
                      'w-full rounded-lg px-4 py-2.5 text-left text-sm transition-colors',
                      active === c.slug
                        ? 'bg-copper/15 text-copper'
                        : 'text-warm-white/60 hover:bg-white/5 hover:text-warm-white'
                    )}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Grid */}
          <div>
            <p className="mb-6 text-sm text-warm-white/50">
              Showing {filtered.length} product
              {filtered.length !== 1 ? 's' : ''}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-graphite/40 transition-all hover:-translate-y-1 hover:border-copper/40"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={unsplash(p.image, 500, 80)}
                        alt={p.name}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <Badge variant="outline" className="w-fit">
                        {p.brand}
                      </Badge>
                      <h3 className="mt-3 font-serif text-lg font-semibold text-warm-white">
                        {p.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-warm-white/60">
                        {p.short}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-copper transition-all group-hover:gap-3">
                        View details <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
