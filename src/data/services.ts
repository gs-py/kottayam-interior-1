import {
  Sofa,
  Building2,
  HardHat,
  Package,
  PanelTop,
  Layers,
} from 'lucide-react'
import type { Service } from '@/types'

export const services: Service[] = [
  {
    slug: 'interior-design',
    title: 'Interior Design',
    icon: Sofa,
    short:
      'Bespoke residential and commercial interiors crafted around how you live and work.',
    description:
      'From concept to handover, we design interiors that balance warmth, function, and timeless luxury. Space planning, joinery, lighting, and material palettes — all tailored to your taste and budget.',
    features: [
      'Space planning & 3D visualisation',
      'Custom joinery & furniture',
      'Lighting & mood design',
      'Material & finish selection',
      'Turnkey project execution',
    ],
    image: 'photo-1600585154340-be6161a56a0c',
  },
  {
    slug: 'architecture',
    title: 'Architecture',
    icon: Building2,
    short:
      'Thoughtful architecture rooted in Kerala’s climate, light, and living traditions.',
    description:
      'Our architects shape homes and commercial spaces that feel inevitable — generous with daylight, cross-ventilation, and a strong sense of place. We handle drawings, approvals, and site coordination.',
    features: [
      'Concept & schematic design',
      'Working drawings & approvals',
      'Vastu-conscious planning',
      'Site supervision',
      'Sustainable detailing',
    ],
    image: 'photo-1487958449943-2429e8be8625',
  },
  {
    slug: 'construction-consulting',
    title: 'Construction Consulting',
    icon: HardHat,
    short:
      'Expert guidance that keeps your build on time, on budget, and on standard.',
    description:
      'Two decades on site means we anticipate problems before they cost you. We advise on contractors, costing, materials, and quality control across the full construction lifecycle.',
    features: [
      'Cost estimation & BOQ',
      'Contractor selection',
      'Quality & progress audits',
      'Material specification',
      'Project scheduling',
    ],
    image: 'photo-1503387762-592deb58ef4e',
  },
  {
    slug: 'material-supply',
    title: 'Material Supply',
    icon: Package,
    short:
      'Genuine building materials from the brands professionals trust, delivered to site.',
    description:
      'We stock and supply gypsum boards, metal channels, fibre cement, insulation, and decorative panels — authorised, warranty-backed, and priced for trade and homeowners alike.',
    features: [
      'Authorised brand stock',
      'Bulk & retail supply',
      'On-site delivery across Kerala',
      'Trade pricing',
      'Technical product support',
    ],
    image: 'photo-1581094794329-c8112a89af12',
  },
  {
    slug: 'ceiling-installation',
    title: 'Ceiling Installation',
    icon: PanelTop,
    short:
      'False ceilings and feature ceilings installed by certified, careful crews.',
    description:
      'Cove lighting, floating panels, acoustic grids, or clean flush finishes — our installation teams deliver crisp lines and durable workmanship on every ceiling we touch.',
    features: [
      'Gypsum & grid false ceilings',
      'Cove & profile lighting',
      'Acoustic & moisture-resistant systems',
      'Feature & designer ceilings',
      'Certified installation crews',
    ],
    image: 'photo-1600566753086-00f18fb6b3ea',
  },
  {
    slug: 'gypsum-works',
    title: 'Gypsum Works',
    icon: Layers,
    short:
      'Partitions, panelling, and decorative gypsum executed with precision.',
    description:
      'Lightweight partitions, wall panelling, niches, and decorative mouldings — we engineer gypsum solutions that are fast to install, fire-rated where needed, and beautifully finished.',
    features: [
      'Drywall partitions',
      'Decorative panelling & niches',
      'Fire & moisture-rated systems',
      'Cornices & mouldings',
      'Seamless jointing & finishing',
    ],
    image: 'photo-1604709177225-055f99402ea3',
  },
]

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug)
