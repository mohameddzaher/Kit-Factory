export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  category: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: 'billboards-banners',
    title: 'Billboards & Banners',
    description:
      'High-impact outdoor advertising solutions engineered for visibility and durability across all weather conditions.',
    longDescription:
      'Our billboard and banner solutions are designed to command attention and withstand the harshest environmental conditions across the GCC. We handle everything from site surveys and structural engineering to high-resolution printing and professional installation, ensuring your message reaches millions of eyes daily with maximum impact and longevity.',
    icon: 'Monitor',
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Large-format UV-resistant printing',
      'Steel and aluminum structural fabrication',
      'Illuminated and backlit options',
      'Municipality permit handling',
      'Nationwide installation teams',
    ],
  },
  {
    slug: 'full-color-printing',
    title: 'Full Color Printing & Production',
    description:
      'State-of-the-art digital and large-format printing using HP Latex, Roland, Mutoh, Vutek, and Canon technologies.',
    longDescription:
      'Our advanced printing lab houses the latest technologies from HP Latex, Roland, Mutoh, Vutek, Canon, and Flora. We deliver vibrant, color-accurate output on virtually any substrate — from vinyl and fabric to rigid boards and specialty materials. Whether you need a single prototype or a mass production run spanning thousands of units, our quality control processes ensure consistent excellence.',
    icon: 'Printer',
    category: 'Production',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80',
    features: [
      'HP Latex, Roland, Mutoh, Vutek, Canon, Flora',
      'Water-based, pigment, latex, solvent, and UV inks',
      'Substrates: vinyl, fabric, PVC, acrylic, wood, metal',
      'Color profiling and proofing workflows',
      'High-volume production capacity',
    ],
  },
  {
    slug: 'flyers-brochures',
    title: 'Flyers & Brochures',
    description:
      'Precision-printed marketing collateral that communicates your message with clarity and visual appeal.',
    longDescription:
      'From tri-fold brochures and product catalogs to event flyers and direct mail pieces, we produce marketing collateral that reflects the premium quality of your brand. Our digital and offset printing capabilities ensure sharp text, vivid imagery, and consistent color reproduction across every single piece in your run.',
    icon: 'FileText',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    features: [
      'Digital and offset printing options',
      'Custom die-cutting and folding',
      'Spot UV, foil stamping, embossing',
      'Eco-friendly paper stock options',
      'Fast turnaround for urgent campaigns',
    ],
  },
  {
    slug: 'display-holders-stands',
    title: 'Display Holders & Stands',
    description:
      'Versatile display solutions for retail, events, and corporate environments designed for maximum product visibility.',
    longDescription:
      'We design and manufacture custom display holders and stands that elevate your products and brand presence in any environment. From sleek acrylic countertop displays to large freestanding units, every piece is engineered for stability, aesthetics, and ease of assembly. Our in-house CNC and laser cutting ensures precision tolerances on every component.',
    icon: 'LayoutGrid',
    category: 'Display',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
    features: [
      'Acrylic, wood, metal, and composite materials',
      'CNC and laser precision cutting',
      'Modular and collapsible designs',
      'Custom branding and graphics integration',
      'Bulk manufacturing for retail chains',
    ],
  },
  {
    slug: 'signage',
    title: 'Signage',
    description:
      'Custom indoor and outdoor signage solutions from illuminated channel letters to architectural sign systems.',
    longDescription:
      'Our signage division delivers end-to-end solutions from concept sketches to illuminated installations. We specialize in channel letters, pylon signs, monument signs, directional systems, and architectural signage. Every sign is fabricated in-house using premium materials and tested for durability, visibility, and compliance with local building codes and municipality regulations.',
    icon: 'Signpost',
    category: 'Signage',
    image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=800&q=80',
    features: [
      'Illuminated channel letters (front-lit, back-lit, halo)',
      'Pylon and monument signs',
      'Architectural and wayfinding systems',
      'LED and neon lighting options',
      'Municipality compliance and permits',
    ],
  },
  {
    slug: 'popups-rollups-counters',
    title: 'Pop-ups / Roll-ups / Counters',
    description:
      'Self-assembling banners, dynamic roll-outs, and versatile promotional tables built durable for outdoor conditions.',
    longDescription:
      'Our portable display solutions are built for the demanding pace of events, trade shows, and roadside promotions. From lightweight roll-up banners that set up in seconds to custom-printed pop-up walls and branded promotional counters, every product is designed for durability, portability, and maximum visual impact with minimal setup effort.',
    icon: 'Maximize2',
    category: 'Display',
    image: 'https://images.unsplash.com/photo-1591115765373-5f9cf1da241c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Roll-up banners (economy to premium)',
      'Pop-up display walls (straight and curved)',
      'Promotional counters with shelving',
      'Carrying cases and transport bags',
      'Quick-change graphic systems',
    ],
  },
  {
    slug: 'uniforms',
    title: 'Uniforms',
    description:
      'Corporate and event uniforms that reinforce brand identity with quality materials and professional finishing.',
    longDescription:
      'We produce branded uniforms that unify your team and reinforce your corporate identity. From embroidered polo shirts and printed event T-shirts to fully tailored workwear, our garment division delivers quality finishing with fast turnarounds. We handle design, sampling, bulk production, and individual sizing to ensure every team member looks sharp and on-brand.',
    icon: 'Shirt',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    features: [
      'Embroidery and screen printing',
      'Sublimation and heat transfer',
      'Custom sizing and tailoring',
      'Event, corporate, and industrial wear',
      'Bulk production with sampling',
    ],
  },
  {
    slug: 'exhibition-stands',
    title: 'Exhibition Stands Design & Fabrication',
    description:
      'From modular shell schemes to bespoke builds that enhance identity and convey your narrative on the show floor.',
    longDescription:
      'We are specialists in exhibition stand design and fabrication, creating show-stopping environments that captivate visitors and generate leads. Our team handles everything from 3D concept renders and structural engineering to full fabrication, logistics, on-site installation, and post-show dismantling. Whether it is a modest shell scheme or an ambitious double-decker build, we deliver turnkey exhibition solutions.',
    icon: 'Building2',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    features: [
      '3D design visualization and renders',
      'Custom and modular stand systems',
      'LED walls, AV integration, and lighting',
      'On-site installation and dismantling',
      'International exhibition logistics',
    ],
  },
  {
    slug: 'mall-activation',
    title: 'Mall Activation Strategy',
    description:
      'Concept-to-execution activations driving direct engagement and building loyal brand communities.',
    longDescription:
      'Our mall activation service transforms retail spaces into immersive brand experiences. We handle every aspect — from concept development and spatial design to fabrication, staffing coordination, and campaign analytics. Our activations are designed to stop foot traffic, drive engagement, generate social media buzz, and convert browsers into loyal brand advocates.',
    icon: 'ShoppingBag',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd17f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Concept development and spatial planning',
      'Custom fabrication and scenic elements',
      'Interactive and digital touchpoints',
      'Brand ambassador coordination',
      'Campaign analytics and reporting',
    ],
  },
  {
    slug: 'indoor-outdoor-branding',
    title: 'Indoor & Outdoor Branding',
    description:
      'Comprehensive campaigns for interior spaces and outdoor reach, maximizing memorability and brand presence.',
    longDescription:
      'We deliver comprehensive branding solutions that transform both indoor environments and outdoor spaces into powerful extensions of your brand identity. From office interiors and reception areas to building wraps and street-level installations, our team ensures visual consistency, premium material selection, and professional installation that leaves a lasting impression on every visitor and passerby.',
    icon: 'Layers',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Office and reception branding',
      'Building wraps and facade graphics',
      'Window graphics and frosting',
      'Floor graphics and wall murals',
      'Consistent brand guideline execution',
    ],
  },
  {
    slug: 'podiums-gondolas-showcases',
    title: 'Podiums / Gondolas / Showcases',
    description:
      'Attention-capturing product displays designed to highlight merchandise and drive impulse engagement.',
    longDescription:
      'Our custom-built podiums, gondolas, and showcases are engineered to present your products in the best possible light. From luxury glass showcases for jewelry and electronics to freestanding gondola units for FMCG products, each display is crafted with premium materials and precise finishes. We also offer modular systems that can be reconfigured to adapt to seasonal layouts and new product launches.',
    icon: 'Box',
    category: 'Display',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    features: [
      'Glass, acrylic, and wood showcases',
      'Illuminated display podiums',
      'Gondola shelving and end-cap units',
      'Modular and reconfigurable systems',
      'Luxury finishing options',
    ],
  },
  {
    slug: 'vehicle-branding',
    title: 'Vehicle Branding Solutions',
    description:
      'Decals, full wraps, and skins that transform fleets into mobile billboards with high ROI.',
    longDescription:
      'Turn your fleet into a powerful mobile advertising channel with our professional vehicle branding solutions. We handle everything from design adaptation and material selection to precision application and quality inspection. Our durable vinyl wraps are engineered to withstand extreme heat, sand, and road conditions common across the GCC, ensuring your brand message stays sharp mile after mile.',
    icon: 'Truck',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Full vehicle wraps and partial decals',
      'Fleet branding (cars, trucks, buses)',
      'Heat and UV-resistant vinyl materials',
      'Design adaptation for any vehicle type',
      'Nationwide application teams',
    ],
  },
  {
    slug: 'shields-plaques',
    title: 'Wooden & Acrylic Shields + Crystal Plaques',
    description:
      'Handcrafted awards and recognition pieces in 3D and 2D crystal, wood, and acrylic finishes.',
    longDescription:
      'Our awards and recognition division produces stunning shields, plaques, and trophies that celebrate achievement with elegance. From 3D laser-engraved crystal pieces to handcrafted wooden shields with metal inlays, we deliver bespoke recognition products for corporate events, government ceremonies, sports tournaments, and milestone celebrations.',
    icon: 'Award',
    category: 'Specialty',
    image: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80',
    features: [
      '3D and 2D crystal laser engraving',
      'Wooden shields with metal inlays',
      'Acrylic trophies and desk awards',
      'Custom packaging and presentation boxes',
      'Bulk orders for corporate events',
    ],
  },
  {
    slug: 'wayfinding-systems',
    title: 'Wayfinding & Guidance Sign Systems',
    description:
      'Intuitive navigation signage for malls, hospitals, campuses, and large commercial spaces.',
    longDescription:
      'We design and install comprehensive wayfinding systems that guide visitors seamlessly through complex environments. From hospitals and university campuses to shopping malls and corporate headquarters, our sign systems combine clear typography, intuitive iconography, and premium materials to create navigation experiences that reduce confusion and enhance the visitor journey.',
    icon: 'Navigation',
    category: 'Signage',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    features: [
      'Comprehensive wayfinding audits',
      'ADA and accessibility compliance',
      'Digital and static directory boards',
      'Modular sign systems for easy updates',
      'Multi-language support (Arabic/English)',
    ],
  },
  {
    slug: 'digital-signage',
    title: 'Retail / Sports / Events / Digital Signage',
    description:
      'Dynamic digital displays for retail, sports venues, events, and high-level corporate environments.',
    longDescription:
      'Our digital signage solutions bring your content to life with vibrant LED displays, interactive kiosks, and video walls. We provide end-to-end service from screen selection and content management system setup to custom mounting fabrication and ongoing technical support. Whether it is a single retail screen or a stadium-scale LED installation, we deliver reliable, high-impact digital experiences.',
    icon: 'Tv',
    category: 'Digital',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    features: [
      'Indoor and outdoor LED displays',
      'Video walls and LED tickers',
      'Interactive kiosks and touchscreens',
      'Content management system (CMS) setup',
      'Remote monitoring and support',
    ],
  },
  {
    slug: 'retail-facia',
    title: 'Display Platforms / Shop & Retail Facia',
    description:
      'Storefront and in-store display solutions that transform retail spaces into immersive brand experiences.',
    longDescription:
      'We specialize in creating striking retail environments through custom shop facia, storefront signage, and in-store display platforms. Our solutions combine architectural design sensibility with commercial functionality, ensuring your retail space attracts foot traffic, communicates your brand story, and maximizes the customer experience from the first impression at the entrance to the final point of sale.',
    icon: 'Store',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80',
    features: [
      'Custom storefront facia design',
      'In-store display platforms and fixtures',
      'Window display systems',
      'Point-of-sale display units',
      'Multi-location rollout management',
    ],
  },
];

export const serviceCategories = [
  'All',
  'Outdoor',
  'Production',
  'Print',
  'Display',
  'Signage',
  'Branding',
  'Events',
  'Specialty',
  'Digital',
  'Retail',
] as const;
