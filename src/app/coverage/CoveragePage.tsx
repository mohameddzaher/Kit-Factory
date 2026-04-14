'use client';

import { motion } from 'framer-motion';
import { MapPin, Building2, Globe } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PageWrapper from '@/components/layout/PageWrapper';
import MapEmbed from '@/components/shared/MapEmbed';
import CallToAction from '@/components/home/CallToAction';
import { regions } from '@/data/coverage';
import { cn } from '@/lib/utils';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const regionKeyMap: Record<string, 'western' | 'eastern' | 'central' | 'southern'> = {
  Western: 'western',
  Eastern: 'eastern',
  Central: 'central',
  Southern: 'southern',
};

export default function CoveragePage() {
  const { t, dir } = useLocale();
  const p = t.pages.coverage;
  const totalCities = regions.reduce((sum, r) => sum + r.cities.length, 0);

  return (
    <PageWrapper>
      <section dir={dir} className="section-dark py-16 md:py-24">
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

          <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { icon: MapPin, value: `${totalCities}+`, label: t.hero.stats.cities },
              { icon: Building2, value: '4', label: p.regionsLabel },
              { icon: Globe, value: '2', label: t.stats.offices },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center"
              >
                <stat.icon className="mx-auto mb-1 h-4 w-4 text-kf-blue" />
                <p className="font-display text-lg font-bold text-brand-cream">
                  {stat.value}
                </p>
                <p className="text-2xs text-brand-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section dir={dir} className="section-light py-16 md:py-20">
        <Container>
          <SectionHeading
            label={p.regionsLabel}
            title={p.citiesTitle}
            dark={false}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, i) => {
              const key = regionKeyMap[region.name];
              const regionLabel = key ? t.coverage.regions[key] : region.name;
              return (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-xl border border-brand-charcoal/[0.06] bg-white p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          'flex h-9 w-9 items-center justify-center rounded-lg',
                          i % 2 === 0
                            ? 'bg-kf-blue/10 text-kf-blue'
                            : 'bg-kf-magenta/10 text-kf-magenta'
                        )}
                      >
                        <MapPin className="h-4 w-4" />
                      </div>
                      <h3 className="text-sm font-bold text-brand-charcoal">
                        {regionLabel}
                      </h3>
                    </div>
                    <span className="rounded-full bg-brand-charcoal/5 px-2 py-0.5 text-2xs font-medium text-brand-charcoal/50">
                      {region.cities.length} {t.hero.stats.cities}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {region.cities.map((city) => (
                      <span
                        key={city}
                        className="rounded-lg border border-brand-charcoal/[0.06] bg-brand-charcoal/[0.02] px-2.5 py-1 text-xs text-brand-charcoal/70"
                      >
                        {t.coverage.cities[city] ?? city}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <section dir={dir} className="section-dark py-16 md:py-20">
        <Container>
          <SectionHeading
            label={p.locationLabel}
            title={p.locationTitle}
            description={p.locationDescription}
          />
          <MapEmbed className="mx-auto max-w-3xl" />
        </Container>
      </section>

      <CallToAction />
    </PageWrapper>
  );
}
