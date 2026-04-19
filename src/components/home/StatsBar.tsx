'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Globe } from 'lucide-react';
import Container from '@/components/ui/Container';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function StatsBar() {
  const { t } = useLocale();

  const stats = [
    {
      icon: Calendar,
      value: '2018',
      label: t.stats.founded,
      suffix: '',
      color: 'text-kf-blue',
      bg: 'bg-kf-blue/10',
    },
    {
      icon: MapPin,
      value: '33',
      label: t.stats.citiesCovered,
      suffix: '+',
      color: 'text-kf-green',
      bg: 'bg-kf-green/10',
    },
    {
      icon: Building2,
      value: '2',
      label: t.stats.officesLabel,
      suffix: ' ' + t.stats.offices,
      color: 'text-kf-yellow',
      bg: 'bg-kf-yellow/10',
    },
    {
      icon: Globe,
      value: t.stats.reach,
      label: t.stats.reachLabel,
      suffix: '',
      color: 'text-kf-magenta',
      bg: 'bg-kf-magenta/10',
    },
  ];

  return (
    <section className="relative border-y border-white/[0.06] bg-brand-dark py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <span
                className={`mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg ${stat.bg} ${stat.color}`}
              >
                <stat.icon className="h-4 w-4" />
              </span>
              <span className="font-display text-xl font-bold text-brand-cream sm:text-2xl">
                {stat.value}
                <span className={stat.color}>{stat.suffix}</span>
              </span>
              <span className="mt-0.5 text-2xs text-brand-muted">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
