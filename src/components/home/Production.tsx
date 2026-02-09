'use client';

import { motion } from 'framer-motion';
import { Cpu, Printer, Paintbrush, Zap, Cog, Timer } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const capabilities = [
  {
    icon: Cpu,
    title: 'CNC & Laser Precision',
    description: 'In-house CNC and laser cutting equipment for accurate, repeatable fabrication.',
  },
  {
    icon: Printer,
    title: 'Advanced Printing',
    description:
      'Water-based, pigment, latex, solvent, and UV printing technologies at scale.',
  },
  {
    icon: Cog,
    title: 'Industrial Machinery',
    description:
      'HP Latex, Roland, Mutoh, Vutek, Canon, and Flora machines for every format.',
  },
  {
    icon: Paintbrush,
    title: 'Paint Booths',
    description: 'Professional finishing facilities ensuring consistent quality and timely delivery.',
  },
  {
    icon: Zap,
    title: 'Event Orchestration',
    description: 'End-to-end event production capabilities from inception to execution.',
  },
  {
    icon: Timer,
    title: 'Rapid Turnaround',
    description: 'Streamlined workflows enabling fast delivery without compromising quality.',
  },
];

export default function Production() {
  return (
    <section className="section-light py-16 md:py-20">
      <Container>
        <SectionHeading
          label="Craftsmanship"
          title="Production & Capabilities"
          description="State-of-the-art facilities and machinery powering every project we deliver."
          dark={false}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-3 rounded-xl border border-brand-charcoal/[0.06] bg-white p-4 transition-all duration-300 hover:border-brand-cyan/20 hover:shadow-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-charcoal/5 text-brand-charcoal">
                <cap.icon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-charcoal">
                  {cap.title}
                </h3>
                <p className="mt-0.5 text-xs leading-relaxed text-brand-charcoal/60">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
