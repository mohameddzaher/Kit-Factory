'use client';

import { motion } from 'framer-motion';
import { Quote, UserRound } from 'lucide-react';
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
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-kf-blue">
              {t.about.managementLabel}
            </span>
            <div className="kf-accent-bar mx-auto mt-3 h-0.5 w-24 rounded-full" />
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center overflow-hidden rounded-full ring-1',
                isDark
                  ? 'bg-white/[0.03] ring-white/10'
                  : 'bg-brand-charcoal/[0.03] ring-brand-charcoal/10'
              )}
            >
              {/* Decorative gradient ring */}
              <div className="absolute inset-0 rounded-full p-[2px] kf-accent-bar opacity-70">
                <div
                  className={cn(
                    'h-full w-full rounded-full',
                    isDark ? 'bg-brand-charcoal' : 'bg-brand-cream'
                  )}
                />
              </div>

              {/* Person icon placeholder */}
              <UserRound
                className={cn(
                  'relative h-40 w-40',
                  isDark ? 'text-brand-cream/40' : 'text-brand-charcoal/30'
                )}
                strokeWidth={1}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Quote className="h-10 w-10 text-kf-blue/60" />
              <blockquote
                className={cn(
                  'mt-4 font-display text-xl font-medium leading-relaxed md:text-2xl lg:text-[1.75rem]',
                  isDark ? 'text-brand-cream' : 'text-brand-charcoal'
                )}
              >
                {t.about.managementQuote}
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-1 rounded-full kf-accent-bar" />
                <div>
                  <p
                    className={cn(
                      'text-sm font-semibold',
                      isDark ? 'text-brand-cream' : 'text-brand-charcoal'
                    )}
                  >
                    {t.about.managementName}
                  </p>
                  <p
                    className={cn(
                      'text-xs',
                      isDark ? 'text-brand-muted' : 'text-brand-charcoal/60'
                    )}
                  >
                    {t.about.managementRole}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
