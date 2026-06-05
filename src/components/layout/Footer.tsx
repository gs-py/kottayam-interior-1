import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { site } from '@/data/site'
import { productCategories } from '@/data/products'
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from '@/components/shared/SocialIcons'

const quickLinks = [
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    toast({
      variant: 'success',
      title: 'Subscribed!',
      description: 'Thanks for joining our newsletter.',
    })
    setEmail('')
  }

  return (
    <footer className="relative border-t border-white/10 bg-graphite">
      {/* Marble gradient top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-copper to-transparent" />

      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="font-serif text-2xl font-bold text-warm-white">
            Kottayam<span className="text-gradient-gold"> Interiors</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-warm-white/60">
            {site.tagline} Crafting refined spaces and supplying genuine building
            materials across Kottayam and central Kerala for over two decades.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-warm-white/70 transition-all hover:border-copper hover:text-copper"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-warm-white/70 transition-all hover:border-copper hover:text-copper"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-warm-white/70 transition-all hover:border-copper hover:text-copper"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-warm-white/70 transition-all hover:border-copper hover:text-copper"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-warm-white">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-warm-white/60 transition-colors hover:text-copper"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-warm-white">
            Products
          </h3>
          <ul className="mt-5 space-y-3">
            {productCategories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/products?category=${c.slug}`}
                  className="text-sm text-warm-white/60 transition-colors hover:text-copper"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + newsletter */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-warm-white">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-warm-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-copper" />
              <a href={site.phoneHref} className="hover:text-copper">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-copper" />
              <a href={`mailto:${site.email}`} className="hover:text-copper">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-copper" />
              <span>{site.hours}</span>
            </li>
          </ul>

          <form onSubmit={onSubscribe} className="mt-6">
            <label className="text-xs uppercase tracking-wider text-warm-white/50">
              Newsletter
            </label>
            <div className="mt-2 flex gap-2">
              <Input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10"
              />
              <Button type="submit" size="icon" variant="luxury" aria-label="Subscribe">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-xs text-warm-white/50 md:flex-row">
          <p>
            © {2026} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-copper">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-copper">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
