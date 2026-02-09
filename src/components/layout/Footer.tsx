'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';
import SocialLinks from '@/components/shared/SocialLinks';
import { NAV_ITEMS, CONTACT_INFO, SITE_CONFIG } from '@/lib/constants';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Coverage', href: '/coverage' },
    { label: 'Clients', href: '/clients' },
  ],
  services: [
    { label: 'Signage', href: '/services' },
    { label: 'Exhibition Stands', href: '/services' },
    { label: 'Vehicle Branding', href: '/services' },
    { label: 'All Services', href: '/services' },
  ],
  resources: [
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
    { label: 'Get a Quote', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-brand-dark">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
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
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-justify text-brand-muted">
              Premier indoor & outdoor production house across the GCC. From
              concept to delivery, we bring imagination to life.
            </p>
            <SocialLinks size="sm" className="mt-5" />
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-cream">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-brand-muted transition-colors hover:text-brand-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-cream">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, i) => (
                <li key={`${link.label}-${i}`}>
                  <Link
                    href={link.href}
                    className="text-xs text-brand-muted transition-colors hover:text-brand-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-cream">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-2 text-xs text-brand-muted transition-colors hover:text-brand-cyan"
                >
                  <Phone className="mt-0.5 h-3 w-3 shrink-0" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-2 text-xs text-brand-muted transition-colors hover:text-brand-cyan"
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
                  className="flex items-start gap-2 text-xs text-brand-muted transition-colors hover:text-brand-cyan"
                >
                  <MapPin className="mt-0.5 h-3 w-3 shrink-0" />
                  {CONTACT_INFO.poBox}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 md:flex-row">
          <p className="text-2xs text-brand-muted">
            {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved. {CONTACT_INFO.cr}
          </p>
          <nav className="flex gap-4" aria-label="Footer utility links">
            {footerLinks.resources.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-2xs text-brand-muted transition-colors hover:text-brand-cyan"
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
