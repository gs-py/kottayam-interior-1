import type { Stat } from '@/types'

export const site = {
  name: 'Kottayam Interiors',
  tagline: 'Luxury interiors. Trusted materials.',
  phone: '+91 98470 00000',
  phoneHref: 'tel:+919847000000',
  whatsapp: '919847000000',
  email: 'interiorworldktm@gmail.com',
  address: 'MC Road, Kanjikuzhy, Kottayam, Kerala 686004',
  hours: 'Mon–Sat: 9:00 AM – 6:30 PM',
  mapEmbed:
    'https://www.google.com/maps?q=Kottayam,Kerala&output=embed',
  social: {
    instagram: 'https://www.instagram.com/kottayaminteriors',
    facebook: 'https://www.facebook.com/kottayaminteriors',
    linkedin: 'https://www.linkedin.com/company/kottayaminteriors',
  },
}

export const stats: Stat[] = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: 850, suffix: '+', label: 'Projects Completed' },
  { value: 25, suffix: '+', label: 'Trusted Brands' },
  { value: 700, suffix: '+', label: 'Happy Clients' },
]
