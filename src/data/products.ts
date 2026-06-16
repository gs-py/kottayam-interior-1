import type { Product, ProductCategory } from '@/types'

// Local product photos (normalised to 1000×1000)
import imgGyprocKool from '@/assets/products/gyproc-kool-board.jpg'
import imgGyprocDampline from '@/assets/products/gyproc-dampline-board.jpg'
import imgGyprocMoisture from '@/assets/products/gyproc-moisture-resistant-board.jpg'
import imgGypcore from '@/assets/products/gypcore-gypsum-board.jpg'
import imgSheraPlank from '@/assets/products/shera-plank.jpg'
import imgSheraBoard from '@/assets/products/shera-fibre-cement-board.jpg'
import imgVnextBoard from '@/assets/products/vnext-fibre-cement-board.jpg'
import imgVPlank from '@/assets/products/v-plank.jpg'
import imgRamcoHilux from '@/assets/products/ramco-hilux-calcium-silicate-board.jpg'
import imgHiluxTiles from '@/assets/products/hilux-calcium-silicate-ceiling-tiles.jpg'
import imgXlpe from '@/assets/products/xlpe-insulation-sheets.jpg'
import imgInsuboard from '@/assets/products/insuboard-xps.jpg'
import imgGyprocGypsum from '@/assets/products/gyproc-gypsum-board.jpg'
import imgFramerockChannels from '@/assets/products/framerock-ordinary-ceiling-channels.jpg'
import imgGyprocGypserra from '@/assets/products/gyproc-gypserra-ceiling-channel.jpg'
import imgGyprocTruesteel from '@/assets/products/gyproc-truesteel-ceiling-channel.jpg'
import imgGyprocXpert from '@/assets/products/gyproc-xpert-ceiling-channel.jpg'

export const productCategories: ProductCategory[] = [
  { slug: 'gypsum', name: 'Gypsum Board', image: 'photo-1604709177225-055f99402ea3' },
  { slug: 'channels', name: 'Ceiling Channels', image: 'photo-1581092160562-40aa08e78837' },
  { slug: 'fiber-cement', name: 'Fibre Cement', image: 'photo-1581092918056-0c4c3acd3789' },
  { slug: 'calcium-silicate', name: 'Calcium Silicate', image: 'photo-1600566753190-17f0baa2a6c3' },
  { slug: 'insulation', name: 'Insulation', image: 'photo-1558618666-fcd25c85cd64' },
]

export const products: Product[] = [
  // ── Gypsum ───────────────────────────────────────────────────────────
  {
    slug: 'gyproc-gypsum-board',
    name: 'Gyproc Gypsum Board',
    brand: 'Gyproc',
    category: 'gypsum',
    image: imgGyprocGypsum,
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
    slug: 'gyproc-kool-board',
    name: 'Gyproc Kool Board',
    brand: 'Gyproc',
    category: 'gypsum',
    image: imgGyprocKool,
    short:
      'Foil-backed gypsum board that reflects solar heat to keep interiors cooler.',
    description:
      'A specially designed gypsum plasterboard with a metallic aluminium foil backing is called Gyproc Kool Board. When applied to ceilings, this foil reflects incoming solar heat, greatly lowering heat transfer into interior spaces and assisting in the maintenance of lower indoor temperatures. In the event of leaks or sporadic dampness, the foil side also provides extra moisture protection.',
    specs: [
      { label: 'Backing', value: 'Aluminium foil' },
      { label: 'Benefit', value: 'Reflects solar heat' },
      { label: 'Extra', value: 'Added moisture protection' },
      { label: 'Use', value: 'Ceilings' },
    ],
  },
  {
    slug: 'gyproc-dampline-board',
    name: 'Gyproc DampLine Board',
    brand: 'Gyproc',
    category: 'gypsum',
    image: imgGyprocDampline,
    short:
      'Moisture-repellent gypsum board with green liners for damp-prone interiors.',
    description:
      'Gyproc DampLine is a gypsum plasterboard that has been specially formulated to improve interior damp resistance. Its core is made of moisture-repellent additives and is easily identifiable by its green-faced paper liners, which usually have a brown backing.',
    specs: [
      { label: 'Core', value: 'Moisture-repellent additives' },
      { label: 'Face', value: 'Green paper liner' },
      { label: 'Backing', value: 'Brown' },
      { label: 'Use', value: 'Damp-prone interiors' },
    ],
  },
  {
    slug: 'gyproc-moisture-resistant-board',
    name: 'Gyproc Moisture Resistant Board',
    brand: 'Gyproc',
    category: 'gypsum',
    image: imgGyprocMoisture,
    short:
      'Water-repellent gypsum board engineered for high-humidity areas.',
    description:
      'Gyproc Moisture Resistant Board is a specially engineered gypsum plasterboard that is intended to function well in environments that are exposed to high levels of moisture and humidity. Encased in green paper for easy identification, it is made with water-repellent additives in the core.',
    specs: [
      { label: 'Core', value: 'Water-repellent additives' },
      { label: 'Face', value: 'Green paper' },
      { label: 'Thickness', value: '12.5 mm' },
      { label: 'Use', value: 'Kitchens, bathrooms, wet areas' },
    ],
  },
  {
    slug: 'gypcore-oman-gypsum-board',
    name: 'Gypcore Oman Gypsum Board',
    brand: 'Gypcore',
    category: 'gypsum',
    image: imgGypcore,
    short:
      "Oman's largest premium gypsum board manufacturer — boards for ceilings and partitions.",
    description:
      'Gypcore is the largest and most prominent premium manufacturer of gypsum boards in Oman.',
    specs: [
      { label: 'Origin', value: 'Oman' },
      { label: 'Grade', value: 'Premium' },
      { label: 'Use', value: 'Ceilings & partitions' },
      { label: 'Form', value: 'Gypsum board' },
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

  // ── Channels ─────────────────────────────────────────────────────────
  {
    slug: 'gyproc-gypserra-ceiling-channel',
    name: 'Gyproc Gypserra Ceiling Channel',
    brand: 'Gyproc',
    category: 'channels',
    image: imgGyprocGypserra,
    short:
      'Embossed GI Gypserra channels — ceiling section, intermediate, perimeter & angle for rigid framing.',
    description:
      'Gyproc Gypserra is a complete galvanised-iron framing system for false ceilings, featuring a distinctive embossed knurl pattern that adds rigidity and grip. The range covers the ceiling section, intermediate channel, perimeter channel and ceiling angle needed to build a true, durable suspended-ceiling grid.',
    specs: [
      { label: 'System', value: 'Section / Intermediate / Perimeter / Angle' },
      { label: 'Material', value: 'Galvanised iron' },
      { label: 'Finish', value: 'Embossed knurl' },
      { label: 'Use', value: 'False-ceiling framework' },
    ],
  },
  {
    slug: 'gyproc-truesteel-ceiling-channel',
    name: 'Gyproc Truesteel Ceiling Channel',
    brand: 'Gyproc',
    category: 'channels',
    image: imgGyprocTruesteel,
    short:
      'Premium "No Compromise Steel" GI channels for high-strength, true ceiling framing.',
    description:
      'Truesteel by Gyproc is a premium Gypframe ceiling channel system built for strength and dimensional accuracy. Marketed as "The No Compromise Steel", it delivers consistent gauge and straightness for robust suspended ceilings and drywall partitions.',
    specs: [
      { label: 'Brand', value: 'Truesteel by Gyproc' },
      { label: 'Material', value: 'Galvanised steel' },
      { label: 'Grade', value: 'Premium Gypframe' },
      { label: 'Use', value: 'Ceiling & drywall framing' },
    ],
  },
  {
    slug: 'gyproc-xpert-ceiling-channel',
    name: 'Gyproc Xpert Ceiling Channel',
    brand: 'Gyproc',
    category: 'channels',
    image: imgGyprocXpert,
    short:
      'Embossed GI Xpert channels engineered for strong, true and reliable ceiling framework.',
    description:
      'Gyproc Xpert Channels are galvanised-iron framing members with an embossed surface for added rigidity. The range provides the sections and channels required to build accurate, long-lasting suspended ceilings and drywall systems.',
    specs: [
      { label: 'Range', value: 'Xpert Channels' },
      { label: 'Material', value: 'Galvanised iron' },
      { label: 'Finish', value: 'Embossed' },
      { label: 'Use', value: 'Ceiling & drywall framing' },
    ],
  },
  {
    slug: 'framerock-ordinary-ceiling-channels',
    name: 'Framerock Ordinary Ceiling Channels',
    brand: 'Framerock',
    category: 'channels',
    image: imgFramerockChannels,
    short:
      'Economical GI ceiling channels for everyday false-ceiling and partition framing.',
    specs: [
      { label: 'Type', value: 'Ordinary ceiling channel' },
      { label: 'Material', value: 'Galvanised iron' },
      { label: 'Length', value: '3.0 m' },
      { label: 'Use', value: 'Ceiling & drywall framing' },
    ],
  },

  // ── Fibre Cement ─────────────────────────────────────────────────────
  {
    slug: 'shera-fibre-cement-board',
    name: 'Shera Fibre Cement Board',
    brand: 'Shera',
    category: 'fiber-cement',
    image: imgSheraBoard,
    short:
      'Non-asbestos fibre cement board with the toughness of cement and workability of wood.',
    description:
      'SHERA fibre cement board is a non-asbestos building board made from a high-grade silicate composite of Portland cement, cellulose fibre, and refined sand. Manufactured through an industrial autoclave curing process, it delivers the toughness and durability of cement alongside the flexible workability of wood.',
    specs: [
      { label: 'Composition', value: 'Portland cement + cellulose + sand' },
      { label: 'Process', value: 'Autoclave cured' },
      { label: 'Property', value: 'Non-asbestos, durable' },
      { label: 'Use', value: 'Interior & exterior boards' },
    ],
  },
  {
    slug: 'shera-plank',
    name: 'Shera Plank',
    brand: 'Shera',
    category: 'fiber-cement',
    image: imgSheraPlank,
    short:
      'Asbestos-free fibre cement plank — an eco-friendly, durable wood alternative.',
    description:
      'Shera Plank is a high-quality, asbestos-free fibre cement composite used as an eco-friendly and durable alternative to natural wood. Made from Portland cement, cellulose fibres, and silica, it is specifically designed to resist moisture, termites, and fire, making it ideal for exterior siding, wall cladding, and ceilings.',
    specs: [
      { label: 'Composition', value: 'Cement + cellulose + silica' },
      { label: 'Resists', value: 'Moisture, termites, fire' },
      { label: 'Finish', value: 'Wood-look' },
      { label: 'Use', value: 'Siding, cladding, ceilings' },
    ],
  },
  {
    slug: 'vnext-fibre-cement-board',
    name: 'Vnext Fibre Cement Board (Vboard)',
    brand: 'Visaka Vnext',
    category: 'fiber-cement',
    image: imgVnextBoard,
    short:
      'Eco-friendly, HPSC-cured fibre cement board — a modern alternative to plywood and gypsum.',
    description:
      'Vnext Fibre Cement Board (primarily marketed as Vboard by Visaka Industries) is an eco-friendly, highly durable building material designed as a modern alternative to traditional plywood, gypsum, and wood. Manufactured using a composite matrix of ordinary Portland cement, non-asbestos cellulose fibres, fine silica, quartz, and mineral additives, these boards are cured under high-pressure steam (Autoclaved/HPSC technology) to achieve structural stability.',
    specs: [
      { label: 'Brand', value: 'Visaka Industries' },
      { label: 'Process', value: 'HPSC / autoclaved' },
      { label: 'Property', value: 'Non-asbestos, structural' },
      { label: 'Use', value: 'Plywood & gypsum alternative' },
    ],
  },
  {
    slug: 'v-plank',
    name: 'V Plank',
    brand: 'Visaka Vnext',
    category: 'fiber-cement',
    image: imgVPlank,
    short:
      'Premium asbestos-free fibre cement plank with a natural wood look for cladding and soffits.',
    description:
      'V Plank, manufactured by Visaka Industries (under the Vnext brand), is a premium, asbestos-free fibre cement plank. It is widely used as a sustainable, wood-look alternative for external and internal architectural applications like wall cladding, soffit coverings, and fencing.',
    specs: [
      { label: 'Brand', value: 'Visaka Vnext' },
      { label: 'Property', value: 'Asbestos-free, sustainable' },
      { label: 'Finish', value: 'Wood-look' },
      { label: 'Use', value: 'Cladding, soffits, fencing' },
    ],
  },

  // ── Calcium Silicate ─────────────────────────────────────────────────
  {
    slug: 'ramco-hilux-calcium-silicate-board',
    name: 'Ramco Hilux Calcium Silicate Board',
    brand: 'Ramco Hilux',
    category: 'calcium-silicate',
    image: imgRamcoHilux,
    short:
      'Lightweight, high-performance HPSC board — a premium alternative to plywood and gypsum.',
    description:
      'Ramco Hilux Calcium Silicate Board is a high-performance, lightweight building material widely used as a premium alternative to plywood, plasterboard, or gypsum boards for dry construction. Manufactured by Ramco Industries Limited using advanced High-Pressure Steam Curing (HPSC) technology, it features a stable, strong crystalline structure made of calcareous and siliceous materials reinforced with cellulose fibres.',
    specs: [
      { label: 'Maker', value: 'Ramco Industries Ltd' },
      { label: 'Process', value: 'High-Pressure Steam Curing' },
      { label: 'Property', value: 'Lightweight, strong' },
      { label: 'Use', value: 'Dry construction, drywalls' },
    ],
  },
  {
    slug: 'hilux-calcium-silicate-ceiling-tiles',
    name: 'Hilux Calcium Silicate Ceiling Tiles',
    brand: 'Ramco Hilux',
    category: 'calcium-silicate',
    image: imgHiluxTiles,
    short:
      'Premium HPSC false-ceiling tiles — a durable substitute for gypsum and plywood.',
    description:
      'Hilux Calcium Silicate Ceiling Tiles, manufactured by Ramco Industries Limited, are top-rated premium false ceiling materials engineered for both commercial and residential projects. Made using advanced High-Pressure Steam Curing (HPSC) technology, these boards feature a dense matrix of organic fibres, siliceous materials, and cement. They serve as an exceptional, durable substitute for traditional gypsum and plywood options.',
    specs: [
      { label: 'Maker', value: 'Ramco Industries Ltd' },
      { label: 'Process', value: 'High-Pressure Steam Curing' },
      { label: 'Type', value: 'False ceiling tiles' },
      { label: 'Use', value: 'Commercial & residential' },
    ],
  },

  // ── Insulation ───────────────────────────────────────────────────────
  {
    slug: 'xlpe-insulation-sheets',
    name: 'XLPE Insulation Sheets',
    brand: 'XLPE',
    category: 'insulation',
    image: imgXlpe,
    short:
      'Cross-linked polyethylene foam sheets for high-performance thermal and acoustic insulation.',
    description:
      'XLPE (Cross-Linked Polyethylene) insulation sheets are premium, closed-cell polyolefin foam sheets designed for high-performance thermal and acoustic insulation. The molecular cross-linking process transforms the material from a standard thermoplastic into a resilient thermoset structure. This structure prevents it from cracking or degrading under intense heat, mechanical stress, or harsh environmental conditions.',
    specs: [
      { label: 'Structure', value: 'Closed-cell polyolefin foam' },
      { label: 'Process', value: 'Molecular cross-linking' },
      { label: 'Property', value: 'Thermal + acoustic' },
      { label: 'Resists', value: 'Heat, stress, weather' },
    ],
  },
  {
    slug: 'insuboard-xps',
    name: 'INSUboard (XPS)',
    brand: 'INSUboard',
    category: 'insulation',
    image: imgInsuboard,
    short:
      'Rigid XPS thermal boards that cut peak indoor temperatures by 6–8°C and lower AC bills.',
    description:
      'INSUboard is a premium brand of rigid extruded polystyrene (XPS) thermal insulation boards manufactured in India by Supreme Petrochem Ltd. It features a uniform closed-cell structure with virtually zero air voids, making it exceptionally resistant to heat flow, moisture absorption, and heavy compression. INSUboard is primarily used to climate-proof residential and commercial buildings, reducing indoor temperatures by 6°C to 8°C during peak summer months and significantly cutting down on air conditioning electricity bills.',
    specs: [
      { label: 'Maker', value: 'Supreme Petrochem Ltd' },
      { label: 'Type', value: 'Extruded polystyrene (XPS)' },
      { label: 'Benefit', value: '6–8°C cooler interiors' },
      { label: 'Resists', value: 'Heat, moisture, compression' },
    ],
  },

]

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug)

export const getCategoryName = (slug: string) =>
  productCategories.find((c) => c.slug === slug)?.name ?? slug
