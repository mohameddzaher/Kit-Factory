'use client';

import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import MapEmbed from '@/components/shared/MapEmbed';
import { CONTACT_INFO } from '@/lib/constants';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function FindUs() {
  const { t, dir, locale } = useLocale();
  const isAr = locale === 'ar';

  return (
    <section dir={dir} className="section-dark py-16 md:py-20">
      <Container>
        <div className="mb-8 text-center">
          <span className="inline-block text-2xs font-semibold uppercase tracking-[0.3em] text-kf-blue">
            {isAr ? 'تجدنا هنا' : 'Find Us'}
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-brand-cream md:text-3xl">
            {isAr ? 'موقعنا في جدة' : 'Our Location in Jeddah'}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-stretch">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"
          >
            <div>
              <div className="mb-2 flex items-center gap-2 text-kf-blue">
                <MapPin className="h-4 w-4" />
                <span className="text-2xs font-semibold uppercase tracking-wider">
                  {isAr ? 'العنوان' : 'Address'}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-brand-cream">
                {CONTACT_INFO.poBox}
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-kf-blue">
                <Clock className="h-4 w-4" />
                <span className="text-2xs font-semibold uppercase tracking-wider">
                  {isAr ? 'ساعات العمل' : 'Working Hours'}
                </span>
              </div>
              <div className="space-y-1 text-sm text-brand-cream/90">
                <p>{isAr ? CONTACT_INFO.hours.management.ar : CONTACT_INFO.hours.management.en}</p>
                <p>{isAr ? CONTACT_INFO.hours.production.ar : CONTACT_INFO.hours.production.en}</p>
                <p className="text-xs text-brand-muted">
                  {isAr ? CONTACT_INFO.hours.days.ar : CONTACT_INFO.hours.days.en}
                </p>
              </div>
            </div>

            <a
              href={CONTACT_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 self-start rounded-full border border-kf-blue/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-kf-blue transition-all hover:border-kf-blue hover:bg-kf-blue/10"
            >
              {isAr ? 'افتح في خرائط جوجل' : 'Open in Google Maps'}
              <ExternalLink className="h-3 w-3" />
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <MapEmbed height={380} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
