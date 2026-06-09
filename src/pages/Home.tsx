import { Seo } from '@/components/shared/Seo'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { ProductCategories } from '@/components/sections/ProductCategories'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Brands } from '@/components/sections/Brands'
import { ProjectsGallery } from '@/components/sections/ProjectsGallery'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Seo
        title="Interior World | Luxury Interior Design & Building Materials in Kerala"
        description="Premium interior design, architecture, and genuine building material supply in Kottayam, Kerala. 20+ years of craftsmanship across residential & commercial projects."
        path="/"
      />
      <Hero />
      <About />
      <Services />
      <ProductCategories />
      <WhyChooseUs />
      <Brands />
      <ProjectsGallery />
      <Testimonials />
      <Contact />
    </>
  )
}
