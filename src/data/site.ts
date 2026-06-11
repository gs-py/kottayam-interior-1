import type { Stat } from '@/types'

export interface Branch {
  name: string
  address: string
  phones: { label: string; href: string }[]
  mapLink: string
  mapEmbed: string
}

export const branches: Branch[] = [
  {
    name: 'Kottayam (Main)',
    address:
      'Puthentharayil Building, near Indus Motors, Moolavattom, Nattakom, Kottayam, Kerala 686013',
    phones: [
      { label: '0481-2360100', href: 'tel:+914812360100' },
      { label: '94474 04850', href: 'tel:+919447404850' },
      { label: '95440 14999', href: 'tel:+919544014999' },
      { label: '99612 25015', href: 'tel:+919961225015' },
    ],
    mapLink: 'https://maps.app.goo.gl/Gwdj44qyWwWYX9es6',
    mapEmbed:
      'https://www.google.com/maps?q=Interior+World+Moolavattom+Nattakom+Kottayam+686013&output=embed',
  },
  {
    name: 'Thottakkadu',
    address:
      'Assariparambill Building, Parappa, Thottakkadu, Kerala 686539',
    phones: [
      { label: '94004 86502', href: 'tel:+919400486502' },
      { label: '90720 05594', href: 'tel:+919072005594' },
    ],
    mapLink: 'https://maps.app.goo.gl/DJVDwf3uWzxoHJic6',
    mapEmbed:
      'https://www.google.com/maps?q=Interior+World+Parappa+Thottakkadu+Kerala+686539&output=embed',
  },
]

export const site = {
  name: 'Interior World',
  tagline: 'Luxury interiors. Trusted materials.',
  phone: '0481-2360100',
  phoneHref: 'tel:+914812360100',
  whatsapp: '919995438509',
  email: 'interiorworldktm@gmail.com',
  address: branches[0].address,
  hours: 'Mon–Sat: 9:00 AM – 6:30 PM',
  mapEmbed: branches[0].mapEmbed,
  social: {
    instagram: 'https://www.instagram.com/interior_____world/?hl=en',
    facebook: 'https://www.facebook.com/profile.php?id=100089795056506',
  },
}

export const stats: Stat[] = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: 850, suffix: '+', label: 'Projects Completed' },
  { value: 25, suffix: '+', label: 'Trusted Brands' },
  { value: 700, suffix: '+', label: 'Happy Clients' },
]
