'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import PageWrapper from '@/components/layout/PageWrapper';
import CallToAction from '@/components/home/CallToAction';
import { services, serviceCategories } from '@/data/services';
import { cn } from '@/lib/utils';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const iconMap = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;

export default function ServicesPage() {
  const { t, dir } = useLocale();
  const p = t.pages.services;
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory);

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

      {/* Services Grid */}
      <section className="section-light py-16 md:py-20">
        <Container>
          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200',
                  activeCategory === cat
                    ? 'bg-brand-charcoal text-brand-cream'
                    : 'bg-brand-charcoal/5 text-brand-charcoal/60 hover:bg-brand-charcoal/10'
                )}
              >
                {t.services.categories[cat] ?? cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {filtered.map((service, i) => {
                const Icon = iconMap[service.icon] || LucideIcons.Box;
                const local = t.services.items[service.slug];
                const title = local?.title ?? service.title;
                const description = local?.description ?? service.description;
                const category = t.services.categories[service.category] ?? service.category;
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="group block rounded-xl border border-brand-charcoal/[0.06] bg-white p-6 transition-all duration-300 hover:border-kf-blue/30 hover:shadow-lg"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-charcoal/5 text-brand-charcoal transition-colors group-hover:bg-kf-blue/10 group-hover:text-kf-blue">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-2 text-sm font-bold text-brand-charcoal">
                        {title}
                      </h3>
                      <p className="text-xs leading-relaxed text-brand-charcoal/60">
                        {description}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="inline-block rounded-md bg-brand-charcoal/5 px-2 py-0.5 text-2xs text-brand-charcoal/50">
                          {category}
                        </span>
                        <ArrowRight
                          className={cn(
                            'h-3.5 w-3.5 text-brand-charcoal/20 transition-colors group-hover:text-kf-blue',
                            dir === 'rtl' && 'rotate-180'
                          )}
                        />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      <CallToAction />
    </PageWrapper>
  );
}
