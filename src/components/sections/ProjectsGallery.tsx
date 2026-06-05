import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { unsplash } from '@/lib/utils'
import { projects, projectCategories } from '@/data/projects'
import type { Project } from '@/types'

interface ProjectsGalleryProps {
  showHeader?: boolean
}

export function ProjectsGallery({ showHeader = true }: ProjectsGalleryProps) {
  const [filter, setFilter] = useState<string>('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  )

  const open = lightbox !== null
  const current: Project | null = open ? filtered[lightbox] : null

  const go = (dir: number) => {
    setLightbox((prev) => {
      if (prev === null) return prev
      const next = (prev + dir + filtered.length) % filtered.length
      return next
    })
  }

  return (
    <section className="section-padding">
      <div className="container">
        {showHeader && (
          <SectionHeader
            eyebrow="Our Work"
            title="Projects that speak for themselves"
            subtitle="A glimpse of recent residential and commercial work across Kottayam."
          />
        )}

        {/* Filters */}
        <div className="mt-12 flex justify-center">
          <Tabs value={filter} onValueChange={(v) => { setFilter(v); setLightbox(null) }}>
            <TabsList>
              {projectCategories.map((c) => (
                <TabsTrigger key={c} value={c}>
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Masonry */}
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((project, i) => (
            <motion.button
              key={project.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              onClick={() => setLightbox(i)}
              className="group relative mb-5 block w-full overflow-hidden rounded-2xl border border-white/10 text-left"
            >
              <img
                src={unsplash(project.image, 700, 80)}
                alt={`${project.title} — ${project.category} project in ${project.location}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-wider text-copper">
                  {project.category}
                </span>
                <h3 className="mt-1 font-serif text-xl font-semibold text-warm-white">
                  {project.title}
                </h3>
                <span className="text-sm text-warm-white/60">
                  {project.location}
                </span>
              </div>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/60 text-warm-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent
          hideClose
          className="max-w-4xl border-white/10 bg-charcoal/95 p-2"
        >
          {current && (
            <>
              <DialogTitle className="sr-only">{current.title}</DialogTitle>
              <img
                src={unsplash(current.image, 1400, 85)}
                alt={current.title}
                className="max-h-[75vh] w-full rounded-lg object-contain"
              />
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <div className="font-serif text-lg text-warm-white">
                    {current.title}
                  </div>
                  <div className="text-sm text-warm-white/50">
                    {current.category} • {current.location}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-warm-white transition hover:border-copper hover:text-copper"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-warm-white transition hover:border-copper hover:text-copper"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
