'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import PageWrapper from '@/components/layout/PageWrapper';
import CallToAction from '@/components/home/CallToAction';
import { Service, services } from '@/data/services';
import { cn } from '@/lib/utils';

const iconMap = LucideIcons as unknown as Record<
  string,
  React.ComponentType<{ className?: string }>
>;

const palette = [
  { text: 'text-kf-blue', bg: 'bg-kf-blue/10', border: 'hover:border-kf-blue/40' },
  { text: 'text-kf-green', bg: 'bg-kf-green/10', border: 'hover:border-kf-green/40' },
  { text: 'text-kf-yellow', bg: 'bg-kf-yellow/15', border: 'hover:border-kf-yellow/50' },
  { text: 'text-kf-red', bg: 'bg-kf-red/10', border: 'hover:border-kf-red/40' },
  { text: 'text-kf-magenta', bg: 'bg-kf-magenta/10', border: 'hover:border-kf-magenta/40' },
] as const;

// Deterministic tone from slug so the same service always gets the same color.
function toneFromSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash + slug.charCodeAt(i)) % palette.length;
  return palette[hash];
}

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || LucideIcons.Box;
  const tone = toneFromSlug(service.slug);
  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="section-dark py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services"
              className="mb-6 inline-flex items-center gap-1.5 text-xs text-brand-muted transition-colors hover:text-brand-cyan"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to Services
            </Link>

            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              {/* Text */}
              <div>
                <span className={cn('mb-2 inline-block rounded-md px-2.5 py-0.5 text-2xs font-medium', tone.bg, tone.text)}>
                  {service.category}
                </span>
                <h1 className="mt-2 font-display text-3xl font-bold text-brand-cream sm:text-4xl">
                  {service.title}
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-justify text-brand-muted">
                  {service.longDescription}
                </p>
                <div className="mt-6">
                  <Button href="/contact" variant="primary" size="lg">
                    Get a Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Features */}
      <section className="section-light py-16 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* Icon + heading */}
            <div>
              <div className={cn('mb-4 flex h-12 w-12 items-center justify-center rounded-xl', tone.bg)}>
                <Icon className={cn('h-6 w-6', tone.text)} />
              </div>
              <h2 className="font-display text-2xl font-bold text-brand-charcoal">
                What We Deliver
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-justify text-brand-charcoal/60">
                Every project benefits from our in-house manufacturing
                capabilities, advanced printing technologies, and a dedicated
                team of specialists committed to exceeding expectations at every
                stage.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-3">
              {service.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="flex items-start gap-3 rounded-lg border border-brand-charcoal/[0.06] bg-white p-4"
                >
                  <CheckCircle2 className={cn('mt-0.5 h-4 w-4 shrink-0', tone.text)} />
                  <span className="text-sm text-brand-charcoal">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section-dark py-16 md:py-20">
          <Container>
            <h2 className="mb-8 text-center font-display text-2xl font-bold text-brand-cream">
              Related Services
            </h2>
            <div
              className={cn(
                'grid gap-4',
                related.length === 1
                  ? 'max-w-sm mx-auto'
                  : related.length === 2
                  ? 'sm:grid-cols-2 max-w-2xl mx-auto'
                  : 'sm:grid-cols-2 lg:grid-cols-3'
              )}
            >
              {related.map((rel, i) => {
                const RelIcon = iconMap[rel.icon] || LucideIcons.Box;
                const relTone = toneFromSlug(rel.slug);
                return (
                  <motion.div
                    key={rel.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={`/services/${rel.slug}`}
                      className={cn(
                        'group block rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:bg-white/[0.04]',
                        relTone.border
                      )}
                    >
                      <div className={cn('mb-3 flex h-9 w-9 items-center justify-center rounded-lg', relTone.bg)}>
                        <RelIcon className={cn('h-4 w-4', relTone.text)} />
                      </div>
                      <h3 className="text-sm font-semibold text-brand-cream">
                        {rel.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-brand-muted line-clamp-2">
                        {rel.description}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      <CallToAction />
    </PageWrapper>
  );
}
