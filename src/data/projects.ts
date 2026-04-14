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

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;

export const projects: Project[] = [
  {
    slug: 'riyadh-season-activation',
    title: 'Riyadh Season Activation',
    category: 'Events',
    description:
      'A large-scale mall activation featuring custom exhibition stands and immersive brand environments spanning over 2,000 sqm.',
    thumbnail: u('photo-1540575467063-178a50c2df87'),
    images: [
      u('photo-1540575467063-178a50c2df87'),
      u('photo-1505373877841-8d25f7d46678'),
      u('photo-1531058020387-3be344556be6'),
      u('photo-1511578314322-379afb476865'),
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
      'Comprehensive wayfinding and brand signage system for a major commercial tower in Jeddah.',
    thumbnail: u('photo-1486406146926-c627a92ad1ab'),
    images: [
      u('photo-1486406146926-c627a92ad1ab'),
      u('photo-1497366216548-37526070297c'),
      u('photo-1497366811353-6870744d04b2'),
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
      'Full fleet vehicle branding for a national logistics company, covering 150+ trucks and vans with durable vinyl wraps.',
    thumbnail: u('photo-1519003722824-194d4455a60c'),
    images: [
      u('photo-1519003722824-194d4455a60c'),
      u('photo-1601584115197-04ecc0da31d7'),
      u('photo-1558611848-73f7eb4001a1'),
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
      'Complete storefront redesign for a national retail chain, including new facia signage, in-store displays, and digital signage integration across 20 locations.',
    thumbnail: u('photo-1441986300917-64674bd600d8'),
    images: [
      u('photo-1441986300917-64674bd600d8'),
      u('photo-1604176354204-9268737828e4'),
      u('photo-1567449303078-57ad995bd17f'),
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
      'A bespoke double-decker exhibition stand at GITEX Dubai featuring LED walls, meeting pods, and interactive product showcases.',
    thumbnail: u('photo-1591115765373-5f9cf1da241c'),
    images: [
      u('photo-1591115765373-5f9cf1da241c'),
      u('photo-1542744173-8e7e53415bb0'),
      u('photo-1558618666-fcd25c85f82e'),
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
      'Multi-city outdoor advertising campaign across 12 cities in KSA, deploying 200+ billboards and unipoles.',
    thumbnail: u('photo-1504711434969-e33886168d6c'),
    images: [
      u('photo-1504711434969-e33886168d6c'),
      u('photo-1563906267088-b029e7101114'),
      u('photo-1578269174936-2709b6aeb913'),
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
