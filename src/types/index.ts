import type { LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  title: string
  icon: LucideIcon
  short: string
  description: string
  features: string[]
  image: string // unsplash photo id
}

export interface ProductCategory {
  slug: string
  name: string
  image: string
}

export interface Product {
  slug: string
  name: string
  brand: string
  category: string
  image: string
  short: string
  description?: string
  specs: { label: string; value: string }[]
}

export type ProjectCategory =
  | 'Residential'
  | 'Commercial'
  | 'Ceiling Works'
  | 'Gypsum'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  location: string
  image: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  rating: number
  image: string
}

export interface Brand {
  slug: string
  name: string
  highlight: string // bold first word(s) shown in accent
  category: string
  description: string
  image: string // unsplash photo id
  lines?: string[] // sub-brands / product lines
}

export interface Faq {
  question: string
  answer: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}
