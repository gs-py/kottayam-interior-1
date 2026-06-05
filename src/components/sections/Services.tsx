import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Reveal } from '@/components/shared/Reveal'
import { services } from '@/data/services'

export function Services() {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="What We Do"
          title="Services built around your space"
          subtitle="Design, build, and supply — every part of your project handled by one trusted team."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.slug} delay={i * 0.08}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-graphite/60 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-copper/50 hover:bg-graphite"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-copper/10 text-copper transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-warm-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-white/60">
                    {service.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-copper transition-all group-hover:gap-3">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
