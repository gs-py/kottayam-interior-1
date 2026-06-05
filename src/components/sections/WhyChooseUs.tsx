import {
  Clock,
  ShieldCheck,
  Boxes,
  Headphones,
  BadgeIndianRupee,
  CalendarCheck,
} from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Reveal } from '@/components/shared/Reveal'

const reasons = [
  {
    icon: Clock,
    title: '20+ Years of Experience',
    text: 'Two decades designing, supplying, and installing across central Kerala.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Workmanship',
    text: 'Trained, certified crews and a workmanship warranty on every install.',
  },
  {
    icon: Boxes,
    title: 'Trusted Brands',
    text: 'Authorised, genuine materials with full manufacturer warranties.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    text: 'Technical guidance from specification to handover, and beyond.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Fair, Transparent Pricing',
    text: 'Itemised quotes, trade pricing on materials, no hidden charges.',
  },
  {
    icon: CalendarCheck,
    title: 'On-Time Delivery',
    text: 'Clear schedules and reliable crews that finish when we say we will.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="The difference is in the details"
          subtitle="A partner you can trust from first sketch to final finish."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <Reveal key={r.title} delay={i * 0.07}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-graphite/40 p-8 transition-colors hover:border-copper/40">
                  <span className="absolute left-0 top-8 h-10 w-0.5 rounded-full bg-gradient-to-b from-copper to-transparent" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-warm-white">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-white/60">
                    {r.text}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
