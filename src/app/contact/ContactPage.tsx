'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, FileText } from 'lucide-react';
import Container from '@/components/ui/Container';
import PageWrapper from '@/components/layout/PageWrapper';
import ContactForm from '@/components/shared/ContactForm';
import MapEmbed from '@/components/shared/MapEmbed';
import SocialLinks from '@/components/shared/SocialLinks';
import { CONTACT_INFO } from '@/lib/constants';

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: FileText,
    label: 'Fax',
    value: CONTACT_INFO.fax,
    href: null,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: CONTACT_INFO.poBox,
    href: CONTACT_INFO.mapUrl,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Sun – Thu: 9:00 AM – 6:00 PM',
    href: null,
  },
];

export default function ContactPage() {
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
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                Get in Touch
              </span>
              <h1 className="font-display text-3xl font-bold text-brand-cream sm:text-4xl">
                Contact Us
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                Ready to start your next project? Have a question about our services?
                We would love to hear from you. Reach out and our team will respond
                within 24 hours.
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
                Send Us a Message
              </h2>
              <p className="mb-6 text-xs text-brand-charcoal/60">
                Fill out the form below and we will get back to you shortly.
              </p>
              <ContactForm dark={false} />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-1 font-display text-lg font-bold text-brand-charcoal">
                Company Information
              </h2>
              <p className="mb-6 text-xs text-brand-charcoal/60">
                {CONTACT_INFO.company} &middot; {CONTACT_INFO.cr}
              </p>

              <div className="space-y-4">
                {contactDetails.map((item) => {
                  const content = (
                    <div className="flex items-start gap-3 rounded-lg border border-brand-charcoal/[0.06] bg-white p-3 transition-all duration-200 hover:border-brand-cyan/20">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-charcoal/5">
                        <item.icon className="h-3.5 w-3.5 text-brand-charcoal/70" />
                      </div>
                      <div>
                        <p className="text-2xs font-medium uppercase tracking-wider text-brand-charcoal/50">
                          {item.label}
                        </p>
                        <p className="text-xs text-brand-charcoal">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={item.label}>{content}</div>;
                })}
              </div>

              {/* Social */}
              <div className="mt-6">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-charcoal/70">
                  Follow Us
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
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
              Location
            </span>
            <h2 className="font-display text-2xl font-bold text-brand-cream sm:text-3xl">
              Visit Our Office
            </h2>
            <p className="mt-2 text-sm text-brand-muted">
              Jeddah, Saudi Arabia
            </p>
          </div>
          <MapEmbed />
        </Container>
      </section>
    </PageWrapper>
  );
}
