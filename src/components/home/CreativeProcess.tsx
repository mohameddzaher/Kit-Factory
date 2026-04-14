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
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { cn } from '@/lib/utils';

const stepIcons = [Lightbulb, MessageCircle, Palette, Wrench, ShieldCheck, Truck, HardHat];

const stepColors = [
  'text-kf-blue border-kf-blue/50 bg-kf-blue/10',
  'text-kf-green border-kf-green/50 bg-kf-green/10',
  'text-kf-yellow border-kf-yellow/50 bg-kf-yellow/10',
  'text-kf-red border-kf-red/50 bg-kf-red/10',
  'text-kf-magenta border-kf-magenta/50 bg-kf-magenta/10',
  'text-kf-blue border-kf-blue/50 bg-kf-blue/10',
  'text-kf-green border-kf-green/50 bg-kf-green/10',
];

export default function CreativeProcess() {
  const { t } = useLocale();

  const steps = [
    { key: 'strategy', ...t.process.steps.strategy },
    { key: 'consultation', ...t.process.steps.consultation },
    { key: 'design', ...t.process.steps.design },
    { key: 'manufacture', ...t.process.steps.manufacture },
    { key: 'test', ...t.process.steps.test },
    { key: 'delivery', ...t.process.steps.delivery },
    { key: 'installation', ...t.process.steps.installation },
  ];

  return (
    <section className="section-dark py-16 md:py-20">
      <Container>
        <SectionHeading
          label={t.process.label}
          title={t.process.title}
          description={t.process.description}
        />

        <div className="relative mt-6">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-kf-blue/30 md:left-1/2 md:block" />

          <div className="space-y-6 md:space-y-2">
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              const isLeft = i % 2 === 0;
              const colorCls = stepColors[i % stepColors.length];

              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex items-start gap-4 md:items-center md:gap-0 md:py-5"
                >
                  {/* Mobile */}
                  <div
                    className={cn(
                      'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border md:hidden',
                      colorCls
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="md:hidden">
                    <span className={cn('text-2xs font-semibold uppercase tracking-wider', colorCls.split(' ')[0])}>
                      {t.process.step} {i + 1}
                    </span>
                    <h3 className="text-sm font-semibold text-brand-cream">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-brand-muted">
                      {step.description}
                    </p>
                  </div>

                  {/* Desktop */}
                  <div
                    className={cn(
                      'hidden w-1/2 md:block',
                      isLeft ? 'pr-12 text-right' : 'ml-auto pl-12 text-left'
                    )}
                  >
                    <span className={cn('text-2xs font-semibold uppercase tracking-wider', colorCls.split(' ')[0])}>
                      {t.process.step} {i + 1}
                    </span>
                    <h3 className="mt-0.5 text-sm font-semibold text-brand-cream">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-brand-muted">
                      {step.description}
                    </p>
                  </div>

                  {/* Center icon (desktop) */}
                  <div
                    className={cn(
                      'absolute left-1/2 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border backdrop-blur-sm md:flex',
                      colorCls
                    )}
                  >
                    <Icon className="h-4 w-4" />
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
