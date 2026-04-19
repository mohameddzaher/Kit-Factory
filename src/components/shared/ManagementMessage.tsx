'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Container from '@/components/ui/Container';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { cn } from '@/lib/utils';

interface Props {
  variant?: 'light' | 'dark';
}

export default function ManagementMessage({ variant = 'light' }: Props) {
  const { t } = useLocale();
  const isDark = variant === 'dark';

  return (
    <section
      className={cn(
        'relative overflow-hidden py-16 md:py-24',
        isDark ? 'section-dark' : 'section-light'
      )}
    >
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-kf-blue blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-kf-magenta blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-kf-blue">
            {t.about.managementLabel}
          </span>
          <div className="kf-accent-bar mx-auto mt-3 h-0.5 w-24 rounded-full" />

          <Quote className="mx-auto mt-8 h-10 w-10 text-kf-blue/60" />

          <blockquote
            className={cn(
              'mt-4 font-display text-xl font-medium leading-relaxed md:text-2xl lg:text-[1.75rem]',
              isDark ? 'text-brand-cream' : 'text-brand-charcoal'
            )}
          >
            {t.about.managementQuote}
          </blockquote>

          <div className="kf-accent-bar mx-auto mt-8 h-0.5 w-16 rounded-full opacity-80" />
        </motion.div>
      </Container>
    </section>
  );
}
