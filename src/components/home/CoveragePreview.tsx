'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { regions } from '@/data/coverage';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { cn } from '@/lib/utils';

type RegionKey = 'western' | 'eastern' | 'central' | 'southern';

// Approximate positions on the simplified KSA silhouette (percentages inside viewBox 100x100).
const regionMeta: Record<
  RegionKey,
  { x: number; y: number; color: string; bg: string; name: string }
> = {
  western: { x: 30, y: 48, color: '#00AEEF', bg: 'bg-kf-blue', name: 'Western' },
  central: { x: 55, y: 50, color: '#F8C500', bg: 'bg-kf-yellow', name: 'Central' },
  eastern: { x: 78, y: 45, color: '#61D049', bg: 'bg-kf-green', name: 'Eastern' },
  southern: { x: 47, y: 80, color: '#CC00CC', bg: 'bg-kf-magenta', name: 'Southern' },
};

// Simplified Saudi Arabia outline (approximate).
const KSA_PATH =
  'M 14 38 L 22 32 L 34 28 L 46 22 L 58 24 L 72 28 L 85 34 L 92 42 L 95 52 L 90 62 L 85 70 L 78 76 L 68 82 L 58 88 L 48 92 L 40 90 L 34 82 L 28 72 L 22 62 L 16 52 Z';

export default function CoveragePreview() {
  const { t, dir } = useLocale();
  const [hovered, setHovered] = useState<RegionKey | null>(null);

  const regionByKey: Record<RegionKey, (typeof regions)[number]> = {
    western: regions.find((r) => r.name === 'Western')!,
    eastern: regions.find((r) => r.name === 'Eastern')!,
    central: regions.find((r) => r.name === 'Central')!,
    southern: regions.find((r) => r.name === 'Southern')!,
  };

  const keys: RegionKey[] = ['western', 'central', 'eastern', 'southern'];

  return (
    <section className="section-dark relative overflow-hidden py-16 md:py-24">
      <div className="absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-kf-blue/[0.06] blur-[140px]" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-kf-magenta/[0.05] blur-[140px]" />

      <Container>
        <SectionHeading
          label={t.coverage.label}
          title={t.coverage.title}
          description={t.coverage.description}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xl"
          >
            <svg
              viewBox="0 0 100 100"
              className="h-auto w-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Saudi Arabia coverage map"
            >
              <defs>
                <linearGradient id="ksaGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.18" />
                  <stop offset="50%" stopColor="#61D049" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#CC00CC" stopOpacity="0.14" />
                </linearGradient>
              </defs>

              <path
                d={KSA_PATH}
                fill="url(#ksaGrad)"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="0.4"
              />

              {/* Pins */}
              {keys.map((key) => {
                const meta = regionMeta[key];
                const isHovered = hovered === key;
                return (
                  <g
                    key={key}
                    transform={`translate(${meta.x} ${meta.y})`}
                    onMouseEnter={() => setHovered(key)}
                    onMouseLeave={() => setHovered(null)}
                    className="cursor-pointer"
                  >
                    {/* Pulse */}
                    <circle r="4" fill={meta.color} opacity="0.25">
                      <animate
                        attributeName="r"
                        values="3;7;3"
                        dur="2.2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.35;0;0.35"
                        dur="2.2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      r={isHovered ? 2.8 : 2}
                      fill={meta.color}
                      className="transition-all duration-300"
                    />
                    <circle r="0.8" fill="white" />
                  </g>
                );
              })}
            </svg>

            {/* Floating label */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 rounded-lg border border-white/10 bg-brand-charcoal/90 px-3 py-1.5 text-xs font-semibold text-brand-cream backdrop-blur-sm"
                >
                  {t.coverage.regions[hovered]}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Region cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {keys.map((key, i) => {
              const meta = regionMeta[key];
              const region = regionByKey[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onMouseEnter={() => setHovered(key)}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    'rounded-2xl border bg-white/[0.02] p-5 transition-all duration-300',
                    hovered === key
                      ? 'border-white/20 bg-white/[0.05]'
                      : 'border-white/[0.06]'
                  )}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className={cn('flex h-7 w-7 items-center justify-center rounded-lg', meta.bg)}>
                      <MapPin className="h-3.5 w-3.5 text-white" />
                    </span>
                    <h3 className="text-sm font-semibold text-brand-cream">
                      {t.coverage.regions[key]}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {region.cities.slice(0, 5).map((city) => (
                      <span
                        key={city}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-2xs text-brand-muted"
                      >
                        {t.coverage.cities[city] ?? city}
                      </span>
                    ))}
                    {region.cities.length > 5 && (
                      <span
                        className="rounded-md px-2 py-0.5 text-2xs text-white"
                        style={{ backgroundColor: `${meta.color}22`, color: meta.color }}
                      >
                        +{region.cities.length - 5} {t.coverage.more}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button href="/coverage" variant="outline" size="md">
            {t.coverage.viewAll}
            <ArrowRight className={cn('h-3 w-3', dir === 'rtl' && 'rotate-180')} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
