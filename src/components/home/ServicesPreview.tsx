'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import SafeImage from '@/components/ui/SafeImage';
import { services } from '@/data/services';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { cn } from '@/lib/utils';

const iconMap = LucideIcons as unknown as Record<
  string,
  React.ComponentType<{ className?: string }>
>;

const accentRing = ['ring-kf-blue/40', 'ring-kf-green/40', 'ring-kf-yellow/40', 'ring-kf-red/40', 'ring-kf-magenta/40'];
const accentText = ['text-kf-blue', 'text-kf-green', 'text-kf-yellow', 'text-kf-red', 'text-kf-magenta'];

export default function ServicesPreview() {
  const { t, dir } = useLocale();
  const featured = services.slice(0, 8);

  return (
    <section className="section-light py-16 md:py-24">
      <Container>
        <SectionHeading
          label={t.services.label}
          title={t.services.title}
          description={t.services.description}
          dark={false}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon] || LucideIcons.Box;
            const accent = accentText[i % accentText.length];
            const ring = accentRing[i % accentRing.length];
            const local = t.services.items[service.slug];
            const title = local?.title ?? service.title;
            const description = local?.description ?? service.description;
            const category = t.services.categories[service.category] ?? service.category;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: Math.min(i, 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group gpu"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    'relative block aspect-[4/5] overflow-hidden rounded-2xl bg-brand-charcoal ring-1 ring-black/5 transition-all duration-500 hover:ring-2',
                    `hover:${ring}`
                  )}
                >
                  {/* Image */}
                  <SafeImage
                    src={service.image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Default overlay: light gradient bottom with title only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                  {/* Hover overlay: darker + full details */}
                  <div className="absolute inset-0 bg-black/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Default content (title only) */}
                  <div className="absolute inset-x-0 bottom-0 p-5 transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-0">
                    <div className={cn('mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm', accent)}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {title}
                    </h3>
                  </div>

                  {/* Hover content (details) */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className={cn('inline-flex h-9 w-9 items-center justify-center self-start rounded-lg bg-white/10 backdrop-blur-sm', accent)}>
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <span className={cn('text-2xs font-semibold uppercase tracking-wider', accent)}>
                        {category}
                      </span>
                      <h3 className="mt-1 text-base font-semibold text-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/75 line-clamp-4">
                        {description}
                      </p>
                      <span className={cn('mt-3 inline-flex items-center gap-1.5 text-2xs font-semibold uppercase tracking-wider', accent)}>
                        {t.services.learnMore}
                        <ArrowRight className={cn('h-3 w-3', dir === 'rtl' && 'rotate-180')} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="outline" size="md">
            {t.services.viewAll}
            <ArrowRight className={cn('h-3 w-3', dir === 'rtl' && 'rotate-180')} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
