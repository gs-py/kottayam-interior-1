import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Reveal } from '@/components/shared/Reveal'
import { WhatsAppIcon } from '@/components/shared/SocialIcons'
import { site } from '@/data/site'

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
                <InfoCard icon={MapPin} label="Visit Us" value={site.address} />
                <InfoCard
                  icon={Phone}
                  label="Call Us"
                  value={site.phone}
                  href={site.phoneHref}
                />
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

              <div className="flex-1 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Kottayam Interiors location map"
                  src={site.mapEmbed}
                  className="h-full min-h-[260px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
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
