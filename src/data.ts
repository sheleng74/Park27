export interface NavigationItem {
  name: string;
  href: string;
}

export const NAVIGATION: NavigationItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Menu', href: '#menu' },
  { name: 'Reserve', href: '#reserve' },
  { name: 'Visit Us', href: '#visit-us' },
];

export interface MenuHighlight {
  name: string;
  description: string;
}

export const MENU_HIGHLIGHTS: MenuHighlight[] = [
  {
    name: 'Salmon Tartar',
    description: 'Freshly diced salmon with subtle citrus notes, served with artisanal crisps.',
  },
  {
    name: 'Signature Short Ribs',
    description: 'Slow-braised to perfection, melting off the bone with a rich, savory glaze.',
  },
  {
    name: 'Tempura Prawns',
    description: 'Light, crispy, and perfectly golden, served with our house-made dipping sauce.',
  },
  {
    name: 'Artisan Wood-Fired Pizza',
    description: 'Crafted with premium ingredients and baked to order with a perfect char.',
  },
  {
    name: 'The Park 27 Whiskey Sour',
    description: 'A balanced classic featuring our curated whiskey selection and fresh citrus.',
  },
];

export interface Testimonial {
  name: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: '[INSERT REAL GUEST REVIEW]',
    quote: 'Park 27 is a lively spot in Gaborone. I went to the place at night and it was really upbeat and vibrant. The atmosphere was exciting and the DJ was playing some good tunes.',
    rating: 5,
  },
  {
    name: '[INSERT REAL GUEST REVIEW]',
    quote: 'Wow where do I even start. This place is really worth every cent, the vibe at night with all those lights... A wonderful open air restaurant with plenty of space.',
    rating: 5,
  },
  {
    name: '[INSERT REAL GUEST REVIEW]',
    quote: 'They serve good food (Salmon Tartar is highly recommended). Many people love to have gatherings here and there are always great vibes with chatting and music.',
    rating: 4,
  },
];
