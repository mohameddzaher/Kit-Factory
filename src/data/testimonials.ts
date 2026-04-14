export interface Testimonial {
  name: string;
  rating: number; // 1..5
  quote: string;
  role?: string;
  source: 'Google Maps';
  mapUrl?: string;
}

// TODO(client): replace with real Google Maps reviews (names, ratings, quotes).
export const testimonials: Testimonial[] = [
  {
    name: 'Ahmed Al-Harbi',
    rating: 5,
    quote:
      'Outstanding quality and attention to detail. The team delivered our exhibition booth on time and exceeded our expectations.',
    role: 'Marketing Manager',
    source: 'Google Maps',
    mapUrl: 'https://maps.app.goo.gl/d2NtkPWkcP7fce5AA',
  },
  {
    name: 'Sara Al-Qahtani',
    rating: 5,
    quote:
      'Professional from start to finish. Their signage work for our retail chain is consistently excellent across all locations.',
    role: 'Operations Director',
    source: 'Google Maps',
    mapUrl: 'https://maps.app.goo.gl/d2NtkPWkcP7fce5AA',
  },
  {
    name: 'Mohammed Bin Khalid',
    rating: 5,
    quote:
      'Kit Factory turned our concept into a stunning reality. The CNC fabrication was precise and the finish was flawless.',
    role: 'Brand Director',
    source: 'Google Maps',
    mapUrl: 'https://maps.app.goo.gl/d2NtkPWkcP7fce5AA',
  },
  {
    name: 'Noura Al-Fahad',
    rating: 5,
    quote:
      'Reliable partners for large-scale print campaigns. They handled our nationwide rollout across multiple cities seamlessly.',
    role: 'Creative Lead',
    source: 'Google Maps',
    mapUrl: 'https://maps.app.goo.gl/d2NtkPWkcP7fce5AA',
  },
];
