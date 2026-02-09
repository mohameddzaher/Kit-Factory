'use client';

import { motion } from 'framer-motion';
import {
  Lightbulb,
  MessageCircle,
  Palette,
  Wrench,
  ShieldCheck,
  Truck,
  HardHat,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { CREATIVE_PROCESS } from '@/lib/constants';

const stepIcons = [Lightbulb, MessageCircle, Palette, Wrench, ShieldCheck, Truck, HardHat];

export default function CreativeProcess() {
  return (
    <section className="section-dark py-16 md:py-20">
      <Container>
        <SectionHeading
          label="Our Process"
          title="From Concept to Installation"
          description="A proven seven-step journey that transforms your vision into reality with precision and care."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand-cyan/40 via-brand-mauve/40 to-transparent md:left-1/2 md:block" />

          <div className="space-y-6 md:space-y-0">
            {CREATIVE_PROCESS.map((step, i) => {
              const Icon = stepIcons[i];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative flex items-start gap-4 md:items-center md:gap-0 md:py-6"
                >
                  {/* Mobile layout */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-cyan/30 bg-brand-charcoal md:hidden">
                    <Icon className="h-3.5 w-3.5 text-brand-cyan" />
                  </div>
                  <div className="md:hidden">
                    <span className="text-2xs font-semibold uppercase tracking-wider text-brand-cyan">
                      Step {step.step}
                    </span>
                    <h3 className="text-sm font-semibold text-brand-cream">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-brand-muted">
                      {step.description}
                    </p>
                  </div>

                  {/* Desktop layout */}
                  <div
                    className={`hidden w-1/2 md:block ${
                      isLeft ? 'pr-12 text-right' : 'ml-auto pl-12 text-left'
                    }`}
                  >
                    <span className="text-2xs font-semibold uppercase tracking-wider text-brand-cyan">
                      Step {step.step}
                    </span>
                    <h3 className="text-sm font-semibold text-brand-cream">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-brand-muted">
                      {step.description}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 hidden h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-brand-cyan/30 bg-brand-charcoal md:flex">
                    <Icon className="h-4 w-4 text-brand-cyan" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
