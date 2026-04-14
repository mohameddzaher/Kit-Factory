'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, FileText } from 'lucide-react';
import Container from '@/components/ui/Container';
import PageWrapper from '@/components/layout/PageWrapper';
import ContactForm from '@/components/shared/ContactForm';
import MapEmbed from '@/components/shared/MapEmbed';
import SocialLinks from '@/components/shared/SocialLinks';
import { CONTACT_INFO } from '@/lib/constants';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function ContactPage() {
  const { t, dir } = useLocale();
  const p = t.pages.contact;

  const labels = {
    Phone: { en: 'Phone', ar: 'هاتف' },
    Email: { en: 'Email', ar: 'بريد إلكتروني' },
    Fax: { en: 'Fax', ar: 'فاكس' },
    Address: { en: 'Address', ar: 'العنوان' },
    Hours: { en: 'Working Hours', ar: 'ساعات العمل' },
  };

  const contactDetails = [
    { icon: Phone, label: labels.Phone, value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: labels.Email, value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { icon: FileText, label: labels.Fax, value: CONTACT_INFO.fax, href: null as string | null },
    { icon: MapPin, label: labels.Address, value: CONTACT_INFO.poBox, href: CONTACT_INFO.mapUrl },
    { icon: Clock, label: labels.Hours, value: p.hours, href: null as string | null },
  ];

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="section-dark py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-kf-blue">
                {p.eyebrow}
              </span>
              <h1 className="font-display text-3xl font-bold text-brand-cream sm:text-4xl">
                {p.heroTitle}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                {p.heroDescription}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Form + Info */}
      <section className="section-light py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="mb-1 font-display text-lg font-bold text-brand-charcoal">
                {p.formTitle}
              </h2>
              <p className="mb-6 text-xs text-brand-charcoal/60">
                {p.formDescription}
              </p>
              <ContactForm dark={false} />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-1 font-display text-lg font-bold text-brand-charcoal">
                {p.infoTitle}
              </h2>
              <p className="mb-6 text-xs text-brand-charcoal/60">
                {CONTACT_INFO.company} &middot; {CONTACT_INFO.cr}
              </p>

              <div className="space-y-4">
                {contactDetails.map((item) => {
                  const content = (
                    <div className="flex items-start gap-3 rounded-lg border border-brand-charcoal/[0.06] bg-white p-3 transition-all duration-200 hover:border-kf-blue/30">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-charcoal/5">
                        <item.icon className="h-3.5 w-3.5 text-brand-charcoal/70" />
                      </div>
                      <div>
                        <p className="text-2xs font-medium uppercase tracking-wider text-brand-charcoal/50">
                          {dir === 'rtl' ? item.label.ar : item.label.en}
                        </p>
                        <p className="text-xs text-brand-charcoal">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  const key = item.label.en;
                  if (item.href) {
                    return (
                      <a
                        key={key}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={key}>{content}</div>;
                })}
              </div>

              {/* Social */}
              <div className="mt-6">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70">
                  {dir === 'rtl' ? 'تابعنا' : 'Follow Us'}
                </h3>
                <SocialLinks size="md" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="section-dark py-16 md:py-20">
        <Container>
          <div className="mb-8 text-center">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-kf-blue">
              {p.locationLabel}
            </span>
            <h2 className="font-display text-2xl font-bold text-brand-cream sm:text-3xl">
              {p.locationTitle}
            </h2>
            <p className="mt-2 text-sm text-brand-muted">
              {p.locationDescription}
            </p>
          </div>
          <MapEmbed />
        </Container>
      </section>
    </PageWrapper>
  );
}
