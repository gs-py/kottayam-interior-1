import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Seo } from '@/components/shared/Seo'
import { PageBanner } from '@/components/shared/PageBanner'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getProduct, getCategoryName, products } from '@/data/products'
import { img } from '@/lib/utils'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = slug ? getProduct(slug) : undefined

  if (!product) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 pt-24 text-center">
        <h1 className="font-serif text-3xl text-warm-white">Product not found</h1>
        <Button variant="luxury" asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    )
  }

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3)

  return (
    <>
      <Seo
        title={`${product.name} — ${product.brand} | Kottayam Interiors`}
        description={product.short}
        path={`/products/${product.slug}`}
        image={img(product.image, 1200, 80)}
      />
      <PageBanner
        eyebrow={product.brand}
        title={product.name}
        image={product.image}
        crumbs={[
          { label: 'Products', to: '/products' },
          { label: product.name },
        ]}
      />

      <div className="section-padding">
        <div className="container grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={img(product.image, 900, 85)}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Badge>{getCategoryName(product.category)}</Badge>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-warm-white md:text-4xl">
              {product.name}
            </h2>
            <p className="mt-2 text-copper">{product.brand}</p>
            <p className="mt-5 leading-relaxed text-warm-white/70">
              {product.description ?? product.short}
            </p>

            {/* Spec table */}
            <h3 className="mt-8 font-serif text-xl font-semibold text-warm-white">
              Specifications
            </h3>
            <table className="mt-4 w-full overflow-hidden rounded-xl border border-white/10 text-sm">
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i % 2 === 0 ? 'bg-graphite/60' : 'bg-graphite/30'}
                  >
                    <td className="w-1/2 px-5 py-3 text-warm-white/50">
                      {spec.label}
                    </td>
                    <td className="px-5 py-3 font-medium text-warm-white">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex items-center gap-2 text-sm text-warm-white/60">
              <Check className="h-4 w-4 text-copper" /> Genuine, warranty-backed
              stock
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="luxury" size="lg" asChild>
                <Link to="/contact">
                  Inquire Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products">
                  <ArrowLeft className="h-4 w-4" /> All Products
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="container mt-20">
            <h3 className="font-serif text-2xl font-semibold text-warm-white">
              Related products
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-graphite/40 transition-colors hover:border-copper/40"
                >
                  <img
                    src={img(p.image, 500, 80)}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h4 className="font-serif text-lg font-semibold text-warm-white">
                      {p.name}
                    </h4>
                    <p className="mt-1 text-sm text-warm-white/50">{p.brand}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
