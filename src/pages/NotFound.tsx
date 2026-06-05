import { Link } from 'react-router-dom'
import { Home, ArrowRight } from 'lucide-react'
import { Seo } from '@/components/shared/Seo'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Kottayam Interiors"
        description="The page you’re looking for doesn’t exist."
        path="/404"
      />
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center marble-bg">
        <span className="font-serif text-8xl font-bold text-gradient-gold md:text-9xl">
          404
        </span>
        <h1 className="mt-6 font-serif text-3xl font-semibold text-warm-white md:text-4xl">
          This space is still under design
        </h1>
        <p className="mt-4 max-w-md text-warm-white/60">
          The page you’re looking for has moved or never existed. Let’s get you
          back to something beautiful.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button variant="luxury" size="lg" asChild>
            <Link to="/">
              <Home className="h-4 w-4" /> Back Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
