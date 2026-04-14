'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Globe } from 'lucide-react';
import Container from '@/components/ui/Container';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function StatsBar() {
  const { t } = useLocale();

  const stats = [
    { icon: Calendar, value: '2018', label: t.stats.founded, suffix: '' },
    { icon: MapPin, value: '33', label: t.stats.citiesCovered, suffix: '+' },
    { icon: Building2, value: '2', label: t.stats.officesLabel, suffix: ' ' + t.stats.offices },
    { icon: Globe, value: t.stats.reach, label: t.stats.reachLabel, suffix: '' },
  ];

  return (
    <section className="relative border-y border-white/[0.06] bg-brand-dark py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col items-center text-center"
            >
              <stat.icon className="mb-2 h-4 w-4 text-kf-blue" />
              <span className="font-display text-xl font-bold text-brand-cream sm:text-2xl">
                {stat.value}
                <span className="text-kf-blue">{stat.suffix}</span>
              </span>
              <span className="mt-0.5 text-2xs text-brand-muted">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
