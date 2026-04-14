export type PortfolioFilter = 'all' | 'exhibitions' | 'cnc' | 'laser' | 'prints';

export interface PortfolioItem {
  id: string;
  label: string;
  category: Exclude<PortfolioFilter, 'all'>;
  image: string;
}

// Using picsum.photos with fixed seeds — stable, always loads, unique per card.
// TODO(client): replace with real Kit Factory project photos.
const pic = (seed: string) => `https://picsum.photos/seed/${seed}/800/800`;

export const portfolioItems: PortfolioItem[] = [
  // Exhibition booths
  { id: 'p1', label: 'Exhibition Booth — Riyadh',  category: 'exhibitions', image: pic('kf-booth-riyadh') },
  { id: 'p2', label: 'Double-Decker — GITEX',      category: 'exhibitions', image: pic('kf-booth-gitex') },
  { id: 'p3', label: 'Modular Booth System',        category: 'exhibitions', image: pic('kf-booth-modular') },

  // CNC
  { id: 'p4', label: 'CNC Acrylic Fabrication',     category: 'cnc',         image: pic('kf-cnc-acrylic') },
  { id: 'p5', label: 'CNC Signage Cut',             category: 'cnc',         image: pic('kf-cnc-signage') },
  { id: 'p6', label: 'CNC Wood Cabinetry',          category: 'cnc',         image: pic('kf-cnc-wood') },

  // Laser
  { id: 'p7', label: 'Laser-Cut Metal Logo',        category: 'laser',       image: pic('kf-laser-metal') },
  { id: 'p8', label: 'Laser Engraving',             category: 'laser',       image: pic('kf-laser-engrave') },
  { id: 'p9', label: 'Laser Precision Cut',         category: 'laser',       image: pic('kf-laser-precision') },

  // Prints
  { id: 'p10', label: 'Large-Format Print',         category: 'prints',      image: pic('kf-print-largeformat') },
  { id: 'p11', label: 'Brochures & Catalogs',       category: 'prints',      image: pic('kf-print-brochures') },
  { id: 'p12', label: 'Billboard Production',       category: 'prints',      image: pic('kf-print-billboard') },
];
