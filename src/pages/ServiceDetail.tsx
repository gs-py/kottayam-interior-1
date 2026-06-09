import { Link, useParams } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { Seo } from '@/components/shared/Seo'
import { PageBanner } from '@/components/shared/PageBanner'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { getService, services } from '@/data/services'
import { unsplash } from '@/lib/utils'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = slug ? getService(slug) : undefined

  if (!service) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 pt-24 text-center">
        <h1 className="font-serif text-3xl text-warm-white">Service not found</h1>
        <Button variant="luxury" asChild>
          <Link to="/services">Back to Services</Link>
        </Button>
      </div>
    )
  }

  const Icon = service.icon
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <Seo
        title={`${service.title} | Interior World`}
        description={service.short}
        path={`/services/${service.slug}`}
      />
      <PageBanner
        eyebrow="Service"
        title={service.title}
        subtitle={service.short}
        image={service.image}
        crumbs={[
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />

      <div className="section-padding">
        <div className="container grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-copper/10 text-copper">
                <Icon className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-serif text-3xl font-semibold text-warm-white">
                About this service
              </h2>
              <p className="mt-4 leading-relaxed text-warm-white/70">
                {service.description}
              </p>

              <h3 className="mt-10 font-serif text-2xl font-semibold text-warm-white">
                What’s included
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 rounded-lg border border-white/10 bg-graphite/40 p-4 text-sm text-warm-white/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sidebar CTA */}
          <Reveal delay={0.1}>
            <div className="sticky top-28 rounded-2xl border border-copper/30 bg-graphite p-8">
              <h3 className="font-serif text-2xl font-semibold text-warm-white">
                Start your project
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-warm-white/60">
                Book a free consultation and let’s discuss how we can help with{' '}
                {service.title.toLowerCase()}.
              </p>
              <Button variant="luxury" size="lg" className="mt-6 w-full" asChild>
                <Link to="/contact">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="mt-3 w-full" asChild>
                <Link to="/services">
                  <ArrowLeft className="h-4 w-4" /> All Services
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Related */}
        <div className="container mt-20">
          <h3 className="font-serif text-2xl font-semibold text-warm-white">
            Other services
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => {
              const OIcon = s.icon
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-graphite/40 transition-colors hover:border-copper/40"
                >
                  <img
                    src={unsplash(s.image, 500, 80)}
                    alt={s.title}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <OIcon className="h-5 w-5 text-copper" />
                      <h4 className="font-serif text-lg font-semibold text-warm-white">
                        {s.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-sm text-warm-white/60">{s.short}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
