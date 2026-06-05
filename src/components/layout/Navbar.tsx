import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { site } from '@/data/site'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock body scroll while drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Kottayam Interiors"
            className="h-10 w-10 shrink-0 rounded-full md:h-11 md:w-11"
          />
          <span className="font-serif text-xl font-bold tracking-tight text-warm-white md:text-2xl">
            Kottayam
            <span className="text-gradient-gold"> Interiors</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative text-sm font-medium transition-colors hover:text-warm-white',
                    isActive ? 'text-warm-white' : 'text-warm-white/60'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 h-px w-full bg-gradient-to-r from-bronze to-gold"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-warm-white/80 transition-colors hover:text-copper"
          >
            <Phone className="h-4 w-4 text-copper" />
            {site.phone}
          </a>
          <Button variant="luxury" size="sm" asChild>
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-warm-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 flex h-screen flex-col bg-charcoal/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'block py-3 font-serif text-3xl font-medium transition-colors',
                        isActive ? 'text-gradient-gold' : 'text-warm-white/80'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
            <div className="space-y-4 border-t border-white/10 px-8 py-8">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-lg text-warm-white"
              >
                <Phone className="h-5 w-5 text-copper" />
                {site.phone}
              </a>
              <Button variant="luxury" size="lg" className="w-full" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
