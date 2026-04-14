import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Cairo } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Kit Factory',
    'advertising',
    'signage',
    'exhibition stands',
    'vehicle branding',
    'Saudi Arabia',
    'Jeddah',
    'Dubai',
    'GCC',
    'production house',
    'outdoor branding',
    'indoor branding',
    'digital signage',
    'printing',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ['/og-image.jpg'],
    creator: '@KitFactorySA',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/brand/logo.png',
    apple: '/brand/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kit Factory',
  alternateName: 'Kit Display Factory',
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/brand/logo.png`,
  description: SITE_CONFIG.description,
  foundingDate: '2018',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'P.O.Box 5858',
    addressLocality: 'Jeddah',
    addressCountry: 'SA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+966-12-620-0029',
    contactType: 'customer service',
    email: 'info@kitdisplay-sa.com',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61551756032607',
    'https://www.instagram.com/kitfactorysa',
    'https://www.linkedin.com/company/kit-factory/',
    'https://x.com/KitFactorySA',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${cairo.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LocaleProvider>
          <Header />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
