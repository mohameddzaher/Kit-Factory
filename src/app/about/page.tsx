import type { Metadata } from 'next';
import AboutPage from './AboutPage';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Founded in 2018, Kit Factory is a premier indoor & outdoor production house revolutionizing the Middle East advertising landscape from Jeddah and Dubai.',
  openGraph: {
    title: 'About Kit Factory',
    description:
      'Founded in 2018, Kit Factory is a premier indoor & outdoor production house across the GCC.',
  },
};

export default function Page() {
  return <AboutPage />;
}
