'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, ExternalLink } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { clients } from '@/data/clients';
import { testimonials } from '@/data/testimonials';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function ClientsPreview() {
  const { t } = useLocale();

  // Split logos across two rows moving in opposite directions for a premium feel
  const row1 = clients.slice(0, Math.ceil(clients.length / 2));
  const row2 = clients.slice(Math.ceil(clients.length / 2));

  const LogoTrack = ({
    items,
    reverse = false,
    duration = 45,
  }: {
    items: typeof clients;
    reverse?: boolean;
    duration?: number;
  }) => (
    <div className="group relative overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-charcoal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-charcoal to-transparent" />

      <div
        className="flex w-max gap-10 py-4"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          animationPlayState: 'running',
        }}
      >
        {[...items, ...items].map((client, i) => (
          <div
            key={`${client.logo}-${i}`}
            className="relative h-16 w-36 shrink-0 transition-transform duration-300 hover:scale-110 md:h-20 md:w-44"
          >
            <Image
              src={client.logo}
              alt={client.name}
              fill
              sizes="200px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="section-dark relative overflow-hidden py-16 md:py-24">
      <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-kf-blue/[0.05] blur-[140px]" />
      <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-kf-blue/[0.04] blur-[140px]" />

      <Container className="relative z-10">
        <SectionHeading
          label={t.clients.label}
          title={t.clients.title}
          description={t.clients.description}
        />
      </Container>

      {/* Full-width marquee — outside Container so logos scroll edge to edge */}
      <div className="mt-4 space-y-2">
        <LogoTrack items={row1} duration={50} />
        {row2.length > 0 && <LogoTrack items={row2} reverse duration={55} />}
      </div>

      <Container className="relative z-10">
        {/* Testimonials */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-kf-blue/60" />
              <span className="text-2xs font-semibold uppercase tracking-[0.3em] text-kf-blue">
                {t.testimonials.label}
              </span>
              <span className="h-px w-8 bg-kf-blue/60" />
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold text-brand-cream md:text-3xl">
              {t.testimonials.title}
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              {t.testimonials.description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((tst, i) => (
              <motion.div
                key={tst.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 transition-colors hover:border-kf-blue/30"
              >
                <div className="mb-3 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={
                        idx < tst.rating
                          ? 'h-3.5 w-3.5 fill-kf-yellow text-kf-yellow'
                          : 'h-3.5 w-3.5 text-white/20'
                      }
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-brand-cream/85">
                  &ldquo;{tst.quote}&rdquo;
                </p>
                <div className="mt-4 border-t border-white/[0.06] pt-3">
                  <p className="text-xs font-semibold text-brand-cream">
                    {tst.name}
                  </p>
                  {tst.role && (
                    <p className="text-2xs text-brand-muted">{tst.role}</p>
                  )}
                  {tst.mapUrl && (
                    <a
                      href={tst.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-2xs font-semibold uppercase tracking-wider text-kf-blue hover:underline"
                    >
                      {t.testimonials.readOnGoogle}
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
