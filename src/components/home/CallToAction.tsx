'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { CONTACT_INFO } from '@/lib/constants';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { cn } from '@/lib/utils';

export default function CallToAction() {
  const { t, dir } = useLocale();

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-dark to-brand-charcoal" />
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-kf-blue/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-kf-magenta/5 blur-3xl" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-kf-blue">
            {t.cta.eyebrow}
          </span>
          <h2 className="font-display text-2xl font-bold text-brand-cream sm:text-3xl">
            {t.cta.title}
          </h2>
          <p className="mt-3 text-sm text-brand-muted">{t.cta.description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              {t.cta.button}
              <ArrowRight className={cn('h-3.5 w-3.5', dir === 'rtl' && 'rotate-180')} />
            </Button>
            <Button
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              variant="ghost"
              size="lg"
            >
              <Phone className="h-3.5 w-3.5" />
              {CONTACT_INFO.phone}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
