import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { Reveal } from '@/components/shared/Reveal'
import { useToast } from '@/components/ui/use-toast'
import { WhatsAppIcon } from '@/components/shared/SocialIcons'
import { site } from '@/data/site'
import { services } from '@/data/services'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState(initialForm)
  const { toast } = useToast()

  const update =
    (field: keyof typeof initialForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      variant: 'success',
      title: 'Message sent!',
      description: `Thanks ${form.name || 'there'} — we’ll be in touch within one business day.`,
    })
    setForm(initialForm)
  }

  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let’s plan your space"
          subtitle="Tell us about your project and we’ll arrange a free consultation."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-graphite/60 p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+91 ..."
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@email.com"
                />
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="service">Service</Label>
                <select
                  id="service"
                  value={form.service}
                  onChange={update('service')}
                  className="flex h-11 w-full rounded-md border border-white/10 bg-graphite-light/40 px-4 text-sm text-warm-white focus-visible:border-copper focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-copper"
                >
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us about your project…"
                />
              </div>

              <Button
                type="submit"
                variant="luxury"
                size="lg"
                className="mt-6 w-full"
              >
                Send Message <Send className="h-4 w-4" />
              </Button>
            </form>
          </Reveal>

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
