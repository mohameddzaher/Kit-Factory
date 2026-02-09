import type { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Kit Factory. Contact us for quotes, project inquiries, or partnership opportunities. Jeddah, Saudi Arabia.',
  openGraph: {
    title: 'Contact Us — Kit Factory',
    description:
      'Get in touch for quotes, project inquiries, or partnerships. Based in Jeddah, Saudi Arabia.',
  },
};

export default function Page() {
  return <ContactPage />;
}
