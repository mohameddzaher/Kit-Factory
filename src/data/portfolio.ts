export type PortfolioFilter = 'all' | 'exhibitions' | 'cnc' | 'laser' | 'prints';

export interface PortfolioItem {
  id: string;
  titleKey: string;
  category: Exclude<PortfolioFilter, 'all'>;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    titleKey: 'Exhibition Booth — Riyadh',
    category: 'exhibitions',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'p2',
    titleKey: 'Double-Decker Booth — GITEX',
    category: 'exhibitions',
    image: 'https://images.unsplash.com/photo-1591115765373-5f9cf1da241c?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'p3',
    titleKey: 'Modular Booth System',
    category: 'exhibitions',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'p4',
    titleKey: 'CNC Acrylic Fabrication',
    category: 'cnc',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'p5',
    titleKey: 'CNC Signage Cut',
    category: 'cnc',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'p6',
    titleKey: 'CNC Wood Cabinetry',
    category: 'cnc',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'p7',
    titleKey: 'Laser-Cut Metal Logo',
    category: 'laser',
    image: 'https://images.unsplash.com/photo-1518435298814-fe4e8a56c23d?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'p8',
    titleKey: 'Laser Engraving',
    category: 'laser',
    image: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'p9',
    titleKey: 'Laser Precision Cut',
    category: 'laser',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e0b4a4c5?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'p10',
    titleKey: 'Large-Format Print',
    category: 'prints',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'p11',
    titleKey: 'Brochures & Catalogs',
    category: 'prints',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=70',
  },
  {
    id: 'p12',
    titleKey: 'Billboard Production',
    category: 'prints',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?auto=format&fit=crop&w=800&q=70',
  },
];
