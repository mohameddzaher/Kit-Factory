import type { Metadata } from 'next';
import ClientsPage from './ClientsPage';

export const metadata: Metadata = {
  title: 'Clients',
  description:
    'Trusted by leading brands and organizations across the GCC. Discover the companies that partner with Kit Factory.',
  openGraph: {
    title: 'Our Clients — Kit Factory',
    description: 'Trusted by leading brands across the GCC.',
  },
};

export default function Page() {
  return <ClientsPage />;
}
