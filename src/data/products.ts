import type { Product, ProductCategory } from '@/types'

export const productCategories: ProductCategory[] = [
  { slug: 'gypsum', name: 'Gypsum Board', image: 'photo-1604709177225-055f99402ea3' },
  { slug: 'channels', name: 'Ceiling Channels', image: 'photo-1581092160562-40aa08e78837' },
  { slug: 'fiber-cement', name: 'Fibre Cement', image: 'photo-1581092918056-0c4c3acd3789' },
  { slug: 'calcium-silicate', name: 'Calcium Silicate', image: 'photo-1600566753190-17f0baa2a6c3' },
  { slug: 'insulation', name: 'Insulation', image: 'photo-1558618666-fcd25c85cd64' },
  { slug: 'decorative', name: 'Decorative Panels', image: 'photo-1615873968403-89e068629265' },
]

export const products: Product[] = [
  {
    slug: 'gyproc-gypsum-board',
    name: 'Gyproc Gypsum Board',
    brand: 'Gyproc',
    category: 'gypsum',
    image: 'photo-1604709177225-055f99402ea3',
    short:
      'Premium gypsum boards for smooth, durable ceilings and drywall partitions.',
    specs: [
      { label: 'Thickness', value: '12.5 mm' },
      { label: 'Size', value: '1220 × 2440 mm' },
      { label: 'Edge', value: 'Tapered' },
      { label: 'Core', value: 'Regular' },
    ],
  },
  {
    slug: 'gyproc-ceiling-channels',
    name: 'Gyproc Ceiling Channels',
    brand: 'Gyproc',
    category: 'channels',
    image: 'photo-1581092160562-40aa08e78837',
    short:
      'Xpert, Truesteel & Gypserra GI channels for strong, true ceiling framework.',
    specs: [
      { label: 'Range', value: 'Xpert / Truesteel / Gypserra' },
      { label: 'Material', value: 'Galvanised iron' },
      { label: 'Length', value: '3.0 m' },
      { label: 'Use', value: 'Ceiling & drywall framing' },
    ],
  },
  {
    slug: 'gyproc-jointing-compound',
    name: 'Gyproc Jointing Materials',
    brand: 'Gyproc',
    category: 'gypsum',
    image: 'photo-1600566753086-00f18fb6b3ea',
    short:
      'Jointing compounds and tapes for seamless, crack-free board finishing.',
    specs: [
      { label: 'Type', value: 'Joint compound + tape' },
      { label: 'Finish', value: 'Seamless' },
      { label: 'Use', value: 'Drywall & ceiling joints' },
      { label: 'Application', value: 'Professional interiors' },
    ],
  },
  {
    slug: 'shera-fibre-cement-board',
    name: 'Shera Fibre Cement Board',
    brand: 'Shera',
    category: 'fiber-cement',
    image: 'photo-1581092918056-0c4c3acd3789',
    short:
      'Fibre cement boards built for durability, weather and water resistance, and long-term performance.',
    specs: [
      { label: 'Thickness', value: '4 / 6 / 8 / 10 mm' },
      { label: 'Property', value: 'Weather & water resistant' },
      { label: 'Use', value: 'Interior & exterior' },
      { label: 'Durability', value: 'Long-term performance' },
    ],
  },
  {
    slug: 'visaka-vnext-v-board',
    name: 'Visaka Vnext V Board & V Panel',
    brand: 'Visaka Vnext',
    category: 'fiber-cement',
    image: 'photo-1581092160562-40aa08e78837',
    short:
      'V Board and V Panel fibre cement solutions for architectural and interior applications.',
    specs: [
      { label: 'Products', value: 'V Board / V Panel' },
      { label: 'Material', value: 'Fibre cement' },
      { label: 'Use', value: 'Architectural & interior' },
      { label: 'Finish', value: 'Smooth, paintable' },
    ],
  },
  {
    slug: 'ramco-hilux-calcium-silicate',
    name: 'Ramco Hilux Calcium Silicate Board',
    brand: 'Ramco Hilux',
    category: 'calcium-silicate',
    image: 'photo-1600566753190-17f0baa2a6c3',
    short:
      'Calcium silicate boards for drywalls, partitions, and false ceiling applications.',
    specs: [
      { label: 'Material', value: 'Calcium silicate' },
      { label: 'Thickness', value: '6 / 8 / 12 mm' },
      { label: 'Use', value: 'Drywall, partition, ceiling' },
      { label: 'Property', value: 'Fire & moisture resistant' },
    ],
  },
  {
    slug: 'spl-insuboard-xps',
    name: 'SPL INSUBoard (XPS)',
    brand: 'SPL INSUBoard',
    category: 'insulation',
    image: 'photo-1558618666-fcd25c85cd64',
    short:
      'High-performance XPS insulation boards built for resilience, protection, and energy efficiency.',
    specs: [
      { label: 'Type', value: 'XPS insulation board' },
      { label: 'Property', value: 'Thermal + moisture resistant' },
      { label: 'Benefit', value: 'Energy efficiency' },
      { label: 'Use', value: 'Roof, wall & floor insulation' },
    ],
  },
  {
    slug: 'decorative-gypsum-panel',
    name: 'Decorative Gypsum Panel',
    brand: 'Gyproc',
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
