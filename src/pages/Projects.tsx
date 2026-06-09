import { Seo } from '@/components/shared/Seo'
import { PageBanner } from '@/components/shared/PageBanner'
import { ProjectsGallery } from '@/components/sections/ProjectsGallery'
import { Contact } from '@/components/sections/Contact'

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects | Interior World — Our Work in Kerala"
        description="Explore residential, commercial, ceiling, and gypsum projects completed by Interior World across central Kerala."
        path="/projects"
      />
      <PageBanner
        eyebrow="Portfolio"
        title="Work we’re proud of"
        subtitle="Residential, commercial, ceiling, and gypsum projects across central Kerala."
        image="photo-1600607687939-ce8a6c25118c"
        crumbs={[{ label: 'Projects' }]}
      />
      <ProjectsGallery showHeader={false} />
      <Contact />
    </>
  )
}
