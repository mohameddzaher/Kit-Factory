export const SITE_CONFIG = {
  name: 'Kit Factory',
  tagline: 'Where Imagination Comes to Life',
  url: 'https://kitfactory.sa',
  description:
    'Premier indoor & outdoor production house across the GCC. From concept to delivery: advertising, branding, signage, exhibitions, and full marketing services.',
  founded: 2018,
  cities: 33,
  branches: ['Jeddah', 'Dubai'],
} as const;

export const CONTACT_INFO = {
  company: 'Kit Display Factory',
  cr: 'CR #4030368524',
  phone: '+966 12 620 0029',
  fax: '+966 12 683 5352',
  poBox: 'P.O.Box: 5858 – Jeddah, Saudi Arabia',
  email: 'info@kitdisplay-sa.com',
  mapUrl: 'https://maps.app.goo.gl/d2NtkPWkcP7fce5AA',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.933!2d39.1725!3d21.5425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMyJzMzLjAiTiAzOcKwMTAnMjEuMCJF!5e0!3m2!1sen!2ssa!4v1700000000000',
} as const;

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61551756032607&mibextid=LQQJ4d',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/kitfactorysa?igshid=OGQ5ZDc2ODk2ZA%3D%3D',
    icon: 'instagram',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/kit-factory/',
    icon: 'linkedin',
  },
  {
    name: 'X',
    url: 'https://x.com/KitFactorySA',
    icon: 'twitter',
  },
  {
    name: 'Snapchat',
    url: 'https://www.snapchat.com/@kitfactorysa',
    icon: 'camera',
  },
  {
    name: 'Linktree',
    url: 'https://linktr.ee/kit.factory?utm_source=linktree_profile_share&ltsid=65028f3e-045b-4a8a-9f6c-67deb779ac07',
    icon: 'link',
  },
] as const;

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Coverage', href: '/coverage' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
] as const;

export const CREATIVE_PROCESS = [
  {
    step: 1,
    title: 'Strategy',
    description: 'Define objectives, research the market, and map the path to success.',
  },
  {
    step: 2,
    title: 'Consultation',
    description: 'Collaborate with you to understand needs, challenges, and aspirations.',
  },
  {
    step: 3,
    title: 'Design',
    description: 'Craft visual concepts that align with your brand identity and goals.',
  },
  {
    step: 4,
    title: 'Manufacture',
    description: 'Bring designs to life with precision CNC, laser cutting, and expert craftsmanship.',
  },
  {
    step: 5,
    title: 'Test',
    description: 'Quality assurance at every stage ensures flawless output.',
  },
  {
    step: 6,
    title: 'Delivery',
    description: 'Timely logistics across 33 cities with careful handling.',
  },
  {
    step: 7,
    title: 'Installation',
    description: 'On-site deployment by skilled technicians for a perfect finish.',
  },
] as const;
