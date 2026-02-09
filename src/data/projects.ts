export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
  client: string;
  year: string;
  scope: string[];
  type: 'photo' | 'video';
}

export const projects: Project[] = [
  {
    slug: 'riyadh-season-activation',
    title: 'Riyadh Season Activation',
    category: 'Events',
    description:
      'A large-scale mall activation for Riyadh Season featuring custom exhibition stands, interactive displays, and immersive brand environments spanning over 2,000 sqm.',
    thumbnail:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80',
    ],
    client: 'Confidential',
    year: '2023',
    scope: ['Exhibition Stands', 'Mall Activation', 'Signage'],
    type: 'photo',
  },
  {
    slug: 'jeddah-tower-signage',
    title: 'Jeddah Tower Signage System',
    category: 'Signage',
    description:
      'Comprehensive wayfinding and brand signage system for a major commercial tower in Jeddah, including illuminated channel letters, directory boards, and ADA-compliant navigation.',
    thumbnail:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    ],
    client: 'Confidential',
    year: '2023',
    scope: ['Signage', 'Wayfinding', 'Indoor Branding'],
    type: 'photo',
  },
  {
    slug: 'national-fleet-wrap',
    title: 'National Fleet Branding',
    category: 'Vehicle Branding',
    description:
      'Full fleet vehicle branding for a national logistics company, covering 150+ trucks and vans with durable vinyl wraps designed for long-haul conditions.',
    thumbnail:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    ],
    client: 'Confidential',
    year: '2022',
    scope: ['Vehicle Branding', 'Design', 'Production'],
    type: 'photo',
  },
  {
    slug: 'retail-chain-facia',
    title: 'Retail Chain Store Redesign',
    category: 'Retail',
    description:
      'Complete storefront redesign for a national retail chain, including new facia signage, in-store display platforms, gondolas, and digital signage integration across 20 locations.',
    thumbnail:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1567449303078-57ad995bd17f?auto=format&fit=crop&w=800&q=80',
    ],
    client: 'Confidential',
    year: '2023',
    scope: ['Retail Facia', 'Display Platforms', 'Digital Signage'],
    type: 'photo',
  },
  {
    slug: 'corporate-exhibition-dubai',
    title: 'Corporate Exhibition Stand — Dubai',
    category: 'Exhibition Stands',
    description:
      'A bespoke double-decker exhibition stand for a tech company at GITEX Dubai, featuring LED walls, meeting pods, and interactive product showcases.',
    thumbnail:
      'https://images.unsplash.com/photo-1591115765373-5f9cf1da241c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1591115765373-5f9cf1da241c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
    ],
    client: 'Confidential',
    year: '2024',
    scope: ['Exhibition Stands', 'Design', 'Fabrication'],
    type: 'photo',
  },
  {
    slug: 'outdoor-campaign-ksa',
    title: 'KSA-Wide Outdoor Campaign',
    category: 'Digital Signage',
    description:
      'Multi-city outdoor advertising campaign across 12 cities in Saudi Arabia, deploying 200+ billboards, bridge banners, and unipoles with coordinated creative rollout.',
    thumbnail:
      'https://images.unsplash.com/photo-1504711434969-e33886168d6c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1504711434969-e33886168d6c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80',
    ],
    client: 'Confidential',
    year: '2024',
    scope: ['Billboards', 'Outdoor Branding', 'Production'],
    type: 'photo',
  },
];

export const projectCategories = [
  'All',
  'Events',
  'Signage',
  'Exhibition Stands',
  'Vehicle Branding',
  'Retail',
  'Digital Signage',
] as const;
