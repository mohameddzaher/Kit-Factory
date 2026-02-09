'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

const iconMap = LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;

export default function ServicesPreview() {
  const featured = services.slice(0, 8);

  return (
    <section className="section-light py-16 md:py-20">
      <Container>
        <SectionHeading
          label="What We Do"
          title="Comprehensive Solutions Under One Roof"
          description="From large-format printing to bespoke exhibition stands, we deliver end-to-end advertising and production services across the GCC."
          dark={false}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon] || LucideIcons.Box;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-xl border border-brand-charcoal/[0.06] bg-white p-5 transition-all duration-300 hover:border-brand-cyan/20 hover:shadow-lg hover:shadow-brand-cyan/5"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-charcoal/5 text-brand-charcoal transition-colors group-hover:bg-brand-cyan/10 group-hover:text-brand-cyan">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-brand-charcoal">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-brand-charcoal/60">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button href="/services" variant="outline" size="md">
            View All Services
            <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
