import type { Product, ProductCategory } from '@/types'

export const productCategories: ProductCategory[] = [
  { slug: 'gypsum', name: 'Gypsum Boards', image: 'photo-1604709177225-055f99402ea3' },
  { slug: 'channels', name: 'Metal Channels', image: 'photo-1581092160562-40aa08e78837' },
  { slug: 'fiber-cement', name: 'Fibre Cement', image: 'photo-1581092918056-0c4c3acd3789' },
  { slug: 'insulation', name: 'Insulation', image: 'photo-1558618666-fcd25c85cd64' },
  { slug: 'drywall', name: 'Drywall Systems', image: 'photo-1600566753190-17f0baa2a6c3' },
  { slug: 'decorative', name: 'Decorative Panels', image: 'photo-1615873968403-89e068629265' },
]

export const products: Product[] = [
  {
    slug: 'gyproc-gypsum-board',
    name: 'Gyproc Gypsum Board',
    brand: 'Saint-Gobain Gyproc',
    category: 'gypsum',
    image: 'photo-1604709177225-055f99402ea3',
    short: 'High-quality plasterboard for smooth, durable ceilings and partitions.',
    specs: [
      { label: 'Thickness', value: '12.5 mm' },
      { label: 'Size', value: '1220 × 2440 mm' },
      { label: 'Edge', value: 'Tapered' },
      { label: 'Core', value: 'Regular' },
    ],
  },
  {
    slug: 'moisture-resistant-board',
    name: 'Moisture Resistant Board',
    brand: 'Gyproc Duraline',
    category: 'gypsum',
    image: 'photo-1600566753086-00f18fb6b3ea',
    short: 'Green-core board engineered for kitchens, bathrooms, and humid areas.',
    specs: [
      { label: 'Thickness', value: '12.5 mm' },
      { label: 'Size', value: '1220 × 2440 mm' },
      { label: 'Property', value: 'Moisture resistant' },
      { label: 'Core', value: 'MR green' },
    ],
  },
  {
    slug: 'gi-ceiling-channel',
    name: 'GI Ceiling Channel',
    brand: 'Gyproc Gyprofile',
    category: 'channels',
    image: 'photo-1581092160562-40aa08e78837',
    short: 'Galvanised steel sections for strong, true false-ceiling framework.',
    specs: [
      { label: 'Material', value: 'Galvanised iron' },
      { label: 'Profile', value: 'Ceiling section' },
      { label: 'Length', value: '3.0 m' },
      { label: 'Coating', value: 'Zinc 120 GSM' },
    ],
  },
  {
    slug: 'perimeter-channel',
    name: 'Perimeter Wall Channel',
    brand: 'Gyproc Gyprofile',
    category: 'channels',
    image: 'photo-1581094794329-c8112a89af12',
    short: 'Edge channel that anchors ceilings cleanly to perimeter walls.',
    specs: [
      { label: 'Material', value: 'Galvanised iron' },
      { label: 'Profile', value: 'Perimeter' },
      { label: 'Length', value: '3.0 m' },
      { label: 'Gauge', value: '0.5 mm' },
    ],
  },
  {
    slug: 'fibre-cement-board',
    name: 'Fibre Cement Board',
    brand: 'Everest',
    category: 'fiber-cement',
    image: 'photo-1581092918056-0c4c3acd3789',
    short: 'Tough, fire-resistant board for exteriors, soffits, and wet areas.',
    specs: [
      { label: 'Thickness', value: '6 / 8 / 10 mm' },
      { label: 'Size', value: '1220 × 2440 mm' },
      { label: 'Property', value: 'Fire & water resistant' },
      { label: 'Use', value: 'Interior & exterior' },
    ],
  },
  {
    slug: 'glass-wool-insulation',
    name: 'Glass Wool Insulation',
    brand: 'Saint-Gobain ISOVER',
    category: 'insulation',
    image: 'photo-1558618666-fcd25c85cd64',
    short: 'Thermal and acoustic insulation roll for cooler, quieter spaces.',
    specs: [
      { label: 'Density', value: '16–48 kg/m³' },
      { label: 'Thickness', value: '25–100 mm' },
      { label: 'Property', value: 'Thermal + acoustic' },
      { label: 'Form', value: 'Roll / slab' },
    ],
  },
  {
    slug: 'drywall-partition-system',
    name: 'Drywall Partition System',
    brand: 'Gyproc',
    category: 'drywall',
    image: 'photo-1600566753190-17f0baa2a6c3',
    short: 'Complete lightweight partition system — frame, board, and finish.',
    specs: [
      { label: 'Wall type', value: 'Single / double frame' },
      { label: 'Fire rating', value: 'Up to 120 min' },
      { label: 'Acoustic', value: 'Up to 58 dB' },
      { label: 'Thickness', value: '75–150 mm' },
    ],
  },
  {
    slug: 'decorative-gypsum-panel',
    name: 'Decorative Gypsum Panel',
    brand: 'Gyproc Designer',
    category: 'decorative',
    image: 'photo-1615873968403-89e068629265',
    short: '3D textured panels for statement walls and feature ceilings.',
    specs: [
      { label: 'Finish', value: '3D textured' },
      { label: 'Size', value: '600 × 600 mm' },
      { label: 'Use', value: 'Feature wall / ceiling' },
      { label: 'Paintable', value: 'Yes' },
    ],
  },
]

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug)

export const getCategoryName = (slug: string) =>
  productCategories.find((c) => c.slug === slug)?.name ?? slug
