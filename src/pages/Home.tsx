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
        title="Premium Gypsum Boards for Walls & Ceilings in Kerala | Interior World"
        description="Our gypsum wall panels and gypsum false ceilings provide superior fire resistance, effective sound insulation, and long lasting durability."
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
