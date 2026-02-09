import type { Metadata } from 'next';
import ServicesPage from './ServicesPage';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive advertising, branding, signage, exhibition, and production services. From billboards to digital signage, all under one roof.',
  openGraph: {
    title: 'Services — Kit Factory',
    description:
      'Comprehensive advertising, branding, signage, exhibition, and production services across the GCC.',
  },
};

export default function Page() {
  return <ServicesPage />;
}
