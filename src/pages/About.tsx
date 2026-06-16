import { Target, Eye, Award, Check } from 'lucide-react'
import { Seo } from '@/components/shared/Seo'
import { PageBanner } from '@/components/shared/PageBanner'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Reveal } from '@/components/shared/Reveal'
import { Counter } from '@/components/shared/Counter'
import { Brands } from '@/components/sections/Brands'
import { Contact } from '@/components/sections/Contact'
import { unsplash } from '@/lib/utils'
import { stats } from '@/data/site'
import team1 from '@/assets/team/team-1.jpg'
import team2 from '@/assets/team/team-2.jpg'

const milestones = [
  { year: '2003', title: 'Founded', text: 'Opened as a small building-materials shop in Kottayam.' },
  { year: '2009', title: 'Into Interiors', text: 'Expanded into false ceiling and gypsum installation.' },
  { year: '2015', title: 'Design Studio', text: 'Launched full interior design and architecture services.' },
  { year: '2020', title: 'Authorised Dealer', text: 'Became authorised dealer for leading national brands.' },
  { year: '2024', title: '850+ Projects', text: 'Crossed 850 completed projects across central Kerala.' },
]

const team = [
 
  { name: 'Santhosh Abraham', image: team2, role: 'Proprietor' },
   { name: 'Abraham Santhosh', image: team1 },
]

const certifications = [
  'Authorised Saint-Gobain Gyproc dealer',
  'ISO-aligned quality processes',
  
]

export default function About() {
  return (
    <>
      <Seo
        title="About | Interior World — 20+ Years of Craftsmanship"
        description="Learn the story of Interior World — two decades of interior design, construction, and genuine material supply across Kerala."
        path="/about"
      />
      <PageBanner
        eyebrow="Our Story"
        title="Crafting Kerala’s finest interiors since 2003"
        subtitle="From a small materials shop to a full design-and-build studio."
        image="photo-1497366216548-37526070297c"
        crumbs={[{ label: 'About' }]}
      />

      {/* Story */}
      <section className="section-padding">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src={unsplash('photo-1600585154340-be6161a56a0c', 800, 80)}
                alt="A Interior World project"
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl font-semibold text-warm-white md:text-4xl">
              Built on craft, trust, and consistency.
            </h2>
            <p className="mt-5 leading-relaxed text-warm-white/70">
              For over twenty years we’ve helped families and businesses across
              central Kerala build spaces they’re proud of. Our roots in material
              supply mean we know exactly what goes into a great finish — and our
              design studio means we know how to make it beautiful.
            </p>
            <p className="mt-4 leading-relaxed text-warm-white/70">
              We keep our crews trained, our materials genuine, and our promises
              realistic. The result is work that lasts and clients who come back.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-graphite/30">
        <div className="container grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-graphite/60 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-warm-white">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-warm-white/70">
                To deliver luxurious, lasting interiors and genuine building
                materials at fair value — making great design accessible across
                Kerala.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-white/10 bg-graphite/60 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-warm-white">
                Our Vision
              </h3>
              <p className="mt-3 leading-relaxed text-warm-white/70">
                To be central Kerala’s most trusted name in interiors and building
                materials — known for craft, integrity, and care on every project.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader eyebrow="Our Journey" title="Two decades of milestones" />
          <div className="relative mx-auto mt-16 max-w-3xl">
            <span className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-copper via-bronze to-transparent md:left-1/2" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.05}>
                  <div
                    className={`relative flex items-start gap-6 md:w-1/2 ${
                      i % 2 === 0
                        ? 'md:ml-0 md:pr-12 md:text-right'
                        : 'md:ml-auto md:flex-row-reverse md:pl-12 md:text-left'
                    }`}
                  >
                    <span className="absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-copper ring-4 ring-charcoal md:left-auto md:right-0 md:translate-x-1/2" />
                    <div className="ml-10 md:ml-0">
                      <span className="font-serif text-xl font-bold text-gradient-gold">
                        {m.year}
                      </span>
                      <h4 className="mt-1 font-semibold text-warm-white">
                        {m.title}
                      </h4>
                      <p className="mt-1 text-sm text-warm-white/60">{m.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-graphite/30">
        <div className="container">
          <SectionHeader
            eyebrow="Our Team"
            title="The people behind the work"
            subtitle="Experienced designers, architects, and crew who care about the details."
          />
          <div className="mx-auto mt-16 grid max-w-2xl gap-6 sm:grid-cols-2">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.07} className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-graphite/60">
                  <div className="overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h4 className="font-serif text-lg font-semibold text-warm-white">
                      {member.name}
                    </h4>
                    {member.role && (
                      <p className="mt-1 text-sm text-copper">{member.role}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader eyebrow="Credentials" title="Certified & accountable" />
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-graphite/40 p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-copper/10 text-copper">
                    <Award className="h-5 w-5" />
                  </span>
                  <span className="text-sm text-warm-white/80">{c}</span>
                  <Check className="ml-auto h-4 w-4 text-copper" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Brands />
      <Contact />
    </>
  )
}
