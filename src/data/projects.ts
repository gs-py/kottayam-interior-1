import type { Project, ProjectCategory } from '@/types'

export const projectCategories: (ProjectCategory | 'All')[] = [
  'All',
  'Residential',
  'Commercial',
  'Ceiling Works',
  'Gypsum',
]

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Hillside Villa',
    category: 'Residential',
    location: 'Kanjikuzhy, Kottayam',
    image: 'photo-1600585154340-be6161a56a0c',
  },
  {
    id: 'p2',
    title: 'Riverside Apartment',
    category: 'Residential',
    location: 'Kumarakom',
    image: 'photo-1600210492493-0946911123ea',
  },
  {
    id: 'p3',
    title: 'Boutique Office Suite',
    category: 'Commercial',
    location: 'MC Road, Kottayam',
    image: 'photo-1497366216548-37526070297c',
  },
  {
    id: 'p4',
    title: 'Speciality Clinic',
    category: 'Commercial',
    location: 'Ettumanoor',
    image: 'photo-1497366811353-6870744d04b2',
  },
  {
    id: 'p5',
    title: 'Cove-Lit Living Room',
    category: 'Ceiling Works',
    location: 'Pala',
    image: 'photo-1600566753086-00f18fb6b3ea',
  },
  {
    id: 'p6',
    title: 'Floating Ceiling Lobby',
    category: 'Ceiling Works',
    location: 'Changanassery',
    image: 'photo-1600607687939-ce8a6c25118c',
  },
  {
    id: 'p7',
    title: 'Decorative Gypsum Wall',
    category: 'Gypsum',
    location: 'Kottayam Town',
    image: 'photo-1615873968403-89e068629265',
  },
  {
    id: 'p8',
    title: 'Drywall Partition Fit-out',
    category: 'Gypsum',
    location: 'Vaikom',
    image: 'photo-1600566753190-17f0baa2a6c3',
  },
  {
    id: 'p9',
    title: 'Master Bedroom Retreat',
    category: 'Residential',
    location: 'Kottayam',
    image: 'photo-1616594039964-ae9021a400a0',
  },
  {
    id: 'p10',
    title: 'Restaurant Interior',
    category: 'Commercial',
    location: 'Kumarakom',
    image: 'photo-1517248135467-4c7edcad34c4',
  },
  {
    id: 'p12',
    title: 'Feature Niche Panelling',
    category: 'Gypsum',
    location: 'Pala',
    image: 'photo-1616486338812-3dadae4b4ace',
  },
]
