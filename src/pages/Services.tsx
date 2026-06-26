import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Seo } from '@/components/shared/Seo'
import { PageBanner } from '@/components/shared/PageBanner'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { Contact } from '@/components/sections/Contact'
import { unsplash } from '@/lib/utils'
import { services } from '@/data/services'

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Interior World — Design, Build & Material Supply"
        description="Interior design, construction consulting, material supply, ceiling installation, and gypsum works in Kottayam, Kerala."
        path="/services"
      />
      <PageBanner
        eyebrow="What We Do"
        title="Services for every stage of your build"
        subtitle="One trusted team for design, construction, and genuine materials."
        image="photo-1503387762-592deb58ef4e"
        crumbs={[{ label: 'Services' }]}
      />

      <div className="section-padding">
        <div className="container space-y-24">
          {services.map((service, i) => {
            const Icon = service.icon
            const reversed = i % 2 === 1
            return (
              <div
                key={service.slug}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                <Reveal className={reversed ? 'lg:order-2' : ''}>
                  <div className="overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={unsplash(service.image, 800, 80)}
                      alt={service.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.1} className={reversed ? 'lg:order-1' : ''}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 font-serif text-3xl font-semibold text-warm-white md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-warm-white/70">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-warm-white/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="luxury" className="mt-8" asChild>
                    <Link to={`/services/${service.slug}`}>
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </Reveal>
              </div>
            )
          })}
        </div>
      </div>

      <Contact />
    </>
  )
}
