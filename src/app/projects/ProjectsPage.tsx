'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Container from '@/components/ui/Container';
import PageWrapper from '@/components/layout/PageWrapper';
import CallToAction from '@/components/home/CallToAction';
import SafeImage from '@/components/ui/SafeImage';
import { projects, projectCategories } from '@/data/projects';
import { cn } from '@/lib/utils';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const categoryPalette = [
  { text: 'text-kf-blue', bg: 'bg-kf-blue/10' },
  { text: 'text-kf-green', bg: 'bg-kf-green/10' },
  { text: 'text-kf-yellow', bg: 'bg-kf-yellow/15' },
  { text: 'text-kf-red', bg: 'bg-kf-red/10' },
  { text: 'text-kf-magenta', bg: 'bg-kf-magenta/10' },
] as const;

export default function ProjectsPage() {
  const { t, dir } = useLocale();
  const p = t.pages.projects;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((x) => x.category === activeCategory);

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
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200',
                  activeCategory === cat
                    ? 'bg-brand-charcoal text-brand-cream'
                    : 'bg-brand-charcoal/5 text-brand-charcoal/60 hover:bg-brand-charcoal/10'
                )}
              >
                {t.projects.categories[cat] ?? cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((project, i) => {
                const local = t.projects.items[project.slug];
                const title = local?.title ?? project.title;
                const description = local?.description ?? project.description;
                const category =
                  local?.category ?? t.projects.categories[project.category] ?? project.category;
                const tone = categoryPalette[i % categoryPalette.length];

                return (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block overflow-hidden rounded-xl border border-brand-charcoal/[0.06] bg-white transition-all duration-300 hover:border-kf-blue/30 hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal/5">
                        <SafeImage
                          src={project.thumbnail}
                          alt={title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-charcoal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="mb-2 flex items-center gap-2">
                          <span className={`rounded-md px-2 py-0.5 text-2xs font-medium ${tone.bg} ${tone.text}`}>
                            {category}
                          </span>
                          <span className="text-2xs text-brand-charcoal/40">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-brand-charcoal">
                          {title}
                        </h3>
                        <p className="mt-1 text-xs text-brand-charcoal/60 line-clamp-2">
                          {description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      <CallToAction />
    </PageWrapper>
  );
}
