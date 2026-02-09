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

export default function CoveragePage() {
  const totalCities = regions.reduce((sum, r) => sum + r.cities.length, 0);

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
                Our Reach
              </span>
              <h1 className="font-display text-3xl font-bold text-brand-cream sm:text-4xl">
                Nationwide Coverage
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-justify text-brand-muted">
                With offices across KSA reaching up to 33 cities, we deliver consistent
                quality and service from coast to coast.
              </p>
            </motion.div>
          </div>

          {/* Quick stats */}
          <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { icon: MapPin, value: `${totalCities}+`, label: 'Cities' },
              { icon: Building2, value: '4', label: 'Regions' },
              { icon: Globe, value: '2', label: 'Countries' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center"
              >
                <stat.icon className="mx-auto mb-1 h-4 w-4 text-brand-cyan" />
                <p className="font-display text-lg font-bold text-brand-cream">
                  {stat.value}
                </p>
                <p className="text-2xs text-brand-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Regions */}
      <section className="section-light py-16 md:py-20">
        <Container>
          <SectionHeading
            label="Regions"
            title="Cities We Serve"
            dark={false}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, i) => (
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
                        region.color === 'cyan'
                          ? 'bg-brand-cyan/10 text-brand-cyan'
                          : 'bg-brand-mauve/10 text-brand-mauve'
                      )}
                    >
                      <MapPin className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-bold text-brand-charcoal">
                      {region.name} Region
                    </h3>
                  </div>
                  <span className="rounded-full bg-brand-charcoal/5 px-2 py-0.5 text-2xs font-medium text-brand-charcoal/50">
                    {region.cities.length} cities
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city) => (
                    <span
                      key={city}
                      className="rounded-lg border border-brand-charcoal/[0.06] bg-brand-charcoal/[0.02] px-2.5 py-1 text-xs text-brand-charcoal/70"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="section-dark py-16 md:py-20">
        <Container>
          <SectionHeading
            label="Location"
            title="Find Us"
            description="Our main headquarters in Jeddah, Saudi Arabia."
          />
          <MapEmbed className="mx-auto max-w-3xl" />
        </Container>
      </section>

      <CallToAction />
    </PageWrapper>
  );
}
