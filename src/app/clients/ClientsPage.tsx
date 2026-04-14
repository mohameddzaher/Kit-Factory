'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, ExternalLink } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PageWrapper from '@/components/layout/PageWrapper';
import CallToAction from '@/components/home/CallToAction';
import { clients } from '@/data/clients';
import { testimonials } from '@/data/testimonials';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function ClientsPage() {
  const { t, dir } = useLocale();
  const p = t.pages.clients;

  return (
    <PageWrapper>
      <section dir={dir} className="section-dark py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-kf-blue">
                {p.eyebrow}
              </span>
              <h1 className="font-display text-3xl font-bold text-brand-cream sm:text-4xl">
                {p.heroTitle}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                {p.heroDescription}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section dir={dir} className="section-light py-16 md:py-20">
        <Container>
          <SectionHeading
            label={p.trustedBy}
            title={p.trustedByTitle}
            description={p.trustedByDescription}
            dark={false}
          />

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {clients.map((client, i) => (
              <motion.div
                key={client.logo}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: (i % 8) * 0.03 }}
                className="group flex aspect-[3/2] items-center justify-center rounded-xl border border-brand-charcoal/[0.06] bg-white p-3 transition-all duration-300 hover:border-kf-blue/30 hover:shadow-md"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 16vw, 12vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section dir={dir} className="section-dark py-16 md:py-20">
        <Container>
          <SectionHeading
            label={p.testimonialsLabel}
            title={p.testimonialsTitle}
            description={p.testimonialsDescription}
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((tst, i) => (
              <motion.div
                key={tst.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5"
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
                  <p className="text-xs font-semibold text-brand-cream">{tst.name}</p>
                  {tst.role && <p className="text-2xs text-brand-muted">{tst.role}</p>}
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
        </Container>
      </section>

      <CallToAction />
    </PageWrapper>
  );
}
