import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Reveal } from '@/components/shared/Reveal'
import { WhatsAppIcon } from '@/components/shared/SocialIcons'
import { site, branches } from '@/data/site'

export function Contact() {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let’s plan your space"
          subtitle="Reach out and we’ll arrange a free consultation."
        />

        <div className="mt-16">
          {/* Info */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard
                  icon={Mail}
                  label="Email Us"
                  value={site.email}
                  href={`mailto:${site.email}`}
                />
                <InfoCard icon={Clock} label="Hours" value={site.hours} />
              </div>

              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-medium text-white transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat with us on WhatsApp
              </a>

              {/* Branches */}
              <div className="grid gap-6 lg:grid-cols-2">
                {branches.map((b) => (
                  <BranchCard key={b.name} branch={b} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function BranchCard({ branch }: { branch: (typeof branches)[number] }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-graphite/40">
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-warm-white">
          {branch.name}
        </h3>
        <div className="mt-4 flex items-start gap-3 text-sm text-warm-white/80">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
          <span>{branch.address}</span>
        </div>
        <div className="mt-4 flex items-start gap-3 text-sm">
          <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {branch.phones.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="text-warm-white/80 transition-colors hover:text-copper"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
        <a
          href={branch.mapLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-copper transition-all hover:gap-3"
        >
          Open in Google Maps <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <div className="flex-1 overflow-hidden border-t border-white/10">
        <iframe
          title={`${branch.name} location map`}
          src={branch.mapEmbed}
          className="h-full min-h-[220px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin
  label: string
  value: string
  href?: string
}) {
  const body = (
    <div className="h-full rounded-xl border border-white/10 bg-graphite/40 p-5 transition-colors hover:border-copper/40">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-copper/10 text-copper">
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-3 text-xs uppercase tracking-wider text-warm-white/50">
        {label}
      </div>
      <div className="mt-1 text-sm text-warm-white/90">{value}</div>
    </div>
  )
  return href ? (
    <a href={href} className="block">
      {body}
    </a>
  ) : (
    body
  )
}
