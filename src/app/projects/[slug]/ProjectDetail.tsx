'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SafeImage from '@/components/ui/SafeImage';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Users } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import PageWrapper from '@/components/layout/PageWrapper';
import CallToAction from '@/components/home/CallToAction';
import Lightbox from '@/components/ui/Lightbox';
import { Project } from '@/data/projects';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function ProjectDetail({ project }: { project: Project }) {
  const { t, dir } = useLocale();
  const local = t.projects.items[project.slug];
  const title = local?.title ?? project.title;
  const description = local?.description ?? project.description;
  const category =
    local?.category ?? t.projects.categories[project.category] ?? project.category;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <PageWrapper>
      <section dir={dir} className="section-dark py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back link */}
            <Link
              href="/projects"
              className="mb-6 inline-flex items-center gap-1.5 text-xs text-brand-muted transition-colors hover:text-kf-blue"
            >
              <ArrowLeft className={`h-3 w-3 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
              {t.projects.viewAllShort}
            </Link>

            {/* Header */}
            <div className="mb-8">
              <span className="mb-2 inline-block rounded-md bg-kf-blue/10 px-2.5 py-0.5 text-2xs font-medium text-kf-blue">
                {category}
              </span>
              <h1 className="mt-2 font-display text-3xl font-bold text-brand-cream sm:text-4xl">
                {title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-muted">
                {description}
              </p>
            </div>

            {/* Project Meta */}
            <div className="mb-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-kf-blue" />
                <span className="text-xs text-brand-muted">{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-kf-blue" />
                <span className="text-xs text-brand-muted">{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-3.5 w-3.5 text-kf-blue" />
                <span className="text-xs text-brand-muted">
                  {project.scope.join(' · ')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image gallery — click any image to open the lightbox */}
          <div className="grid gap-4 md:grid-cols-2">
            {project.images.map((image, i) => (
              <motion.button
                key={image}
                type="button"
                onClick={() => setLightboxIndex(i)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.7,
                  delay: Math.min(i, 5) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative cursor-zoom-in overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-kf-blue/40 ${
                  i === 0 ? 'aspect-[16/9] md:col-span-2' : 'aspect-[4/3]'
                }`}
                aria-label={`Open image ${i + 1} of ${project.images.length}`}
              >
                <SafeImage
                  src={image}
                  alt={`${title} — ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={i === 0 ? '100vw' : '50vw'}
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
              </motion.button>
            ))}
          </div>

          {/* Videos (optional) */}
          {project.videos && project.videos.length > 0 && (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.videos.map((video, i) => (
                <motion.div
                  key={video}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: Math.min(i, 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-video overflow-hidden rounded-xl border border-white/[0.06] bg-black"
                >
                  <iframe
                    src={video}
                    title={`${title} — video ${i + 1}`}
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </motion.div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <Button href="/contact" variant="primary" size="md">
              {t.cta.button}
            </Button>
          </div>
        </Container>
      </section>

      <Lightbox
        images={project.images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
        alt={(i) => `${title} — ${i + 1}`}
      />

      <CallToAction />
    </PageWrapper>
  );
}
