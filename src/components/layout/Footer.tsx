'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import SocialLinks from '@/components/shared/SocialLinks';
import { CONTACT_INFO, SITE_CONFIG } from '@/lib/constants';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function Footer() {
  const { t, dir } = useLocale();

  const footerLinks = {
    company: [
      { label: t.nav.about, href: '/about' },
      { label: t.nav.coverage, href: '/coverage' },
      { label: t.nav.clients, href: '/clients' },
    ],
    services: [
      { label: t.nav.services, href: '/services' },
      { label: t.nav.projects, href: '/projects' },
      { label: t.nav.coverage, href: '/coverage' },
    ],
    resources: [
      { label: t.nav.projects, href: '/projects' },
      { label: t.nav.coverage, href: '/coverage' },
      { label: t.nav.contact, href: '/contact' },
      { label: t.nav.getQuote, href: '/contact' },
    ],
  };

  return (
    <footer dir={dir} className="relative border-t border-white/[0.06] bg-brand-dark">
      <div className="kf-accent-bar absolute inset-x-0 top-0 h-0.5 opacity-80" />
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Kit Factory Home">
              <Image
                src="/brand/KF.png"
                alt="Kit Factory"
                width={120}
                height={38}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-brand-muted">
              {t.footer.tagline}
            </p>
            <SocialLinks size="sm" className="mt-5" />
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-cream">
              {t.footer.company}
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-brand-muted transition-colors hover:text-kf-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-cream">
              {t.footer.services}
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, i) => (
                <li key={`${link.label}-${i}`}>
                  <Link
                    href={link.href}
                    className="text-xs text-brand-muted transition-colors hover:text-kf-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-cream">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-2 text-xs text-brand-muted transition-colors hover:text-kf-blue"
                >
                  <Phone className="mt-0.5 h-3 w-3 shrink-0" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-2 text-xs text-brand-muted transition-colors hover:text-kf-blue"
                >
                  <Mail className="mt-0.5 h-3 w-3 shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-xs text-brand-muted transition-colors hover:text-kf-blue"
                >
                  <MapPin className="mt-0.5 h-3 w-3 shrink-0" />
                  {CONTACT_INFO.poBox}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal / registration band */}
        <div className="mt-10 grid gap-3 border-t border-white/[0.06] pt-6 text-2xs text-brand-muted sm:grid-cols-3">
          <div>
            <p className="font-semibold uppercase tracking-wider text-brand-cream/80">
              {dir === 'rtl' ? 'السجل التجاري' : 'Commercial Register'}
            </p>
            <p className="mt-0.5">#{CONTACT_INFO.commercialRegister}</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider text-brand-cream/80">
              {dir === 'rtl' ? 'الرقم الضريبي' : 'Tax Registration'}
            </p>
            <p className="mt-0.5">{CONTACT_INFO.taxNumber}</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider text-brand-cream/80">
              {dir === 'rtl' ? CONTACT_INFO.licenseLabel.ar : CONTACT_INFO.licenseLabel.en}
            </p>
            <p className="mt-0.5">#{CONTACT_INFO.commercialRegister}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 md:flex-row">
          <p className="text-2xs text-brand-muted">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. {t.footer.rights}
          </p>
          <nav className="flex gap-4" aria-label="Footer utility links">
            {footerLinks.resources.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-2xs text-brand-muted transition-colors hover:text-kf-blue"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
