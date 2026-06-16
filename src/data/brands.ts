import type { Brand } from '@/types'

export const brands: Brand[] = [
  {
    slug: 'gyproc',
    name: 'Gyproc',
    highlight: 'Gypsum',
    category: 'Gypsum Board',
    description:
      'Premium gypsum boards, ceiling channels, drywall solutions, and jointing materials for professional interior applications.',
    image: 'photo-1604709177225-055f99402ea3',
    lines: ['Xpert', 'Truesteel', 'Gypserra'],
  },
  {
    slug: 'shera',
    name: 'Shera',
    highlight: 'Shera',
    category: 'Fibre Cement',
    description:
      'Fibre cement boards designed for durability, weather resistance, water resistance, and long-term performance.',
    image: 'photo-1581092918056-0c4c3acd3789',
  },
  {
    slug: 'visaka-vnext',
    name: 'Visaka Vnext',
    highlight: 'Visaka',
    category: 'Fibre Cement',
    description:
      'V Board and V Panel fibre cement solutions suitable for architectural and interior applications.',
    image: 'photo-1581092160562-40aa08e78837',
    lines: ['V Board', 'V Panel'],
  },
  {
    slug: 'ramco-hilux',
    name: 'Ramco Hilux',
    highlight: 'Ramco',
    category: 'Calcium Silicate',
    description:
      'Calcium silicate boards used for drywalls, partitions, and false ceiling applications.',
    image: 'photo-1600566753190-17f0baa2a6c3',
  },
  {
    slug: 'spl-insuboard',
    name: 'INSUBoard',
    highlight: 'SPL',
    category: 'Insulation',
    description:
      'High-performance XPS insulation board solutions built for resilience, protection, and energy efficiency.',
    image: 'photo-1558618666-fcd25c85cd64',
  },
  {
    slug: 'saint-gobain',
    name: 'Saint-Gobain',
    highlight: 'Saint-Gobain',
    category: 'Building Materials',
    description:
      'Glass wool insulation and high-performance building material systems from a global leader.',
    image: 'photo-1581094794329-c8112a89af12',
  },
]

// Names used in the scrolling marquee strip.
export const brandNames = brands.map((b) => b.name)
