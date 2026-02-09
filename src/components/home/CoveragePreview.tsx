'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { regions } from '@/data/coverage';

export default function CoveragePreview() {
  return (
    <section className="section-dark py-16 md:py-20">
      <Container>
        <SectionHeading
          label="Coverage"
          title="Reaching Every Corner of Saudi Arabia"
          description="With offices across KSA reaching up to 33 cities, we deliver consistent quality nationwide."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-brand-cyan/20"
            >
              <div className="mb-3 flex items-center gap-2">
                <MapPin className={`h-4 w-4 ${region.color === 'cyan' ? 'text-brand-cyan' : 'text-brand-mauve'}`} />
                <h3 className="text-sm font-semibold text-brand-cream">
                  {region.name} Region
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {region.cities.slice(0, 5).map((city) => (
                  <span
                    key={city}
                    className="rounded-md bg-white/5 px-2 py-0.5 text-2xs text-brand-muted"
                  >
                    {city}
                  </span>
                ))}
                {region.cities.length > 5 && (
                  <span className="rounded-md bg-brand-cyan/10 px-2 py-0.5 text-2xs text-brand-cyan">
                    +{region.cities.length - 5} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/coverage" variant="outline" size="md">
            View Full Coverage
            <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
