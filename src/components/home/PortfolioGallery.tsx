'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import SafeImage from '@/components/ui/SafeImage';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { portfolioItems, type PortfolioFilter } from '@/data/portfolio';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { cn } from '@/lib/utils';

const filterAccents: Record<PortfolioFilter, string> = {
  all: 'border-brand-cream text-brand-cream',
  exhibitions: 'border-kf-blue text-kf-blue',
  cnc: 'border-kf-green text-kf-green',
  laser: 'border-kf-red text-kf-red',
  prints: 'border-kf-yellow text-kf-yellow',
};

export default function PortfolioGallery() {
  const { t, dir } = useLocale();
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>('all');

  const filters: { key: PortfolioFilter; label: string }[] = [
    { key: 'all', label: t.portfolio.filters.all },
    { key: 'exhibitions', label: t.portfolio.filters.exhibitions },
    { key: 'cnc', label: t.portfolio.filters.cnc },
    { key: 'laser', label: t.portfolio.filters.laser },
    { key: 'prints', label: t.portfolio.filters.prints },
  ];

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return portfolioItems;
    return portfolioItems.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section-dark py-16 md:py-24">
      <Container>
        <SectionHeading
          label={t.portfolio.label}
          title={t.portfolio.title}
          description={t.portfolio.description}
        />

        {/* Filter chips */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {filters.map((f) => {
            const active = activeFilter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActiveFilter(f.key)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all',
                  active
                    ? filterAccents[f.key] + ' bg-white/5'
                    : 'border-white/15 text-brand-muted hover:border-white/40 hover:text-brand-cream'
                )}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: Math.min(i, 5) * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  className="group gpu relative aspect-square overflow-hidden rounded-xl bg-brand-dark ring-1 ring-white/5"
                >
                  <SafeImage
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 transition-opacity group-hover:opacity-95" />
                  <div className="absolute inset-x-0 bottom-0 p-3 transition-transform group-hover:-translate-y-0.5">
                    <span className="text-2xs font-semibold uppercase tracking-wider text-kf-blue">
                      {t.portfolio.filters[item.category]}
                    </span>
                    <h3 className="mt-0.5 text-xs font-semibold text-white">
                      {item.label}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        <div className="mt-12 text-center">
          <Button href="/projects" variant="outline" size="md">
            {t.portfolio.viewAll}
            <ArrowRight className={cn('h-3 w-3', dir === 'rtl' && 'rotate-180')} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
