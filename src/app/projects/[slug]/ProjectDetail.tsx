'use client';

import { motion } from 'framer-motion';
import SafeImage from '@/components/ui/SafeImage';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Users } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import PageWrapper from '@/components/layout/PageWrapper';
import CallToAction from '@/components/home/CallToAction';
import { Project } from '@/data/projects';

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <PageWrapper>
      <section className="section-dark py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back link */}
            <Link
              href="/projects"
              className="mb-6 inline-flex items-center gap-1.5 text-xs text-brand-muted transition-colors hover:text-brand-cyan"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to Projects
            </Link>

            {/* Header */}
            <div className="mb-8">
              <span className="mb-2 inline-block rounded-md bg-brand-cyan/10 px-2.5 py-0.5 text-2xs font-medium text-brand-cyan">
                {project.category}
              </span>
              <h1 className="mt-2 font-display text-3xl font-bold text-brand-cream sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-justify text-brand-muted">
                {project.description}
              </p>
            </div>

            {/* Project Meta */}
            <div className="mb-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-brand-cyan" />
                <span className="text-xs text-brand-muted">Year: {project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-brand-cyan" />
                <span className="text-xs text-brand-muted">Client: {project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-3.5 w-3.5 text-brand-cyan" />
                <span className="text-xs text-brand-muted">
                  Scope: {project.scope.join(', ')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Gallery */}
          <div className="grid gap-4 md:grid-cols-2">
            {project.images.map((image, i) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-xl border border-white/[0.06] ${
                  i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <SafeImage
                  src={image}
                  alt={`${project.title} — Image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? '100vw' : '50vw'}
                />
              </motion.div>
            ))}
          </div>

          {/* Case Study Content Placeholder */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <h2 className="font-display text-lg font-bold text-brand-cream">
                Project Overview
              </h2>
              <p className="text-sm leading-relaxed text-justify text-brand-muted">
                This case study details our approach to delivering a comprehensive
                {' '}{project.category.toLowerCase()} solution for our client. The project
                required careful planning, precise execution, and coordination across
                multiple teams and locations.
              </p>
              <h3 className="font-display text-base font-semibold text-brand-cream">
                Challenge
              </h3>
              <p className="text-sm leading-relaxed text-justify text-brand-muted">
                The client needed a scalable, high-quality solution that could be
                deployed efficiently while maintaining brand consistency across all
                touchpoints.
              </p>
              <h3 className="font-display text-base font-semibold text-brand-cream">
                Solution
              </h3>
              <p className="text-sm leading-relaxed text-justify text-brand-muted">
                Our team developed a comprehensive strategy leveraging our in-house
                manufacturing capabilities, CNC and laser precision, and advanced
                printing technologies to deliver a solution that exceeded expectations.
              </p>
              <h3 className="font-display text-base font-semibold text-brand-cream">
                Results
              </h3>
              <p className="text-sm leading-relaxed text-justify text-brand-muted">
                The project was delivered on time and within budget, resulting in
                increased brand visibility and positive client feedback on quality and
                attention to detail.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-cream">
                  Project Details
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-2xs text-brand-muted">Category</dt>
                    <dd className="text-xs font-medium text-brand-cream">
                      {project.category}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-2xs text-brand-muted">Year</dt>
                    <dd className="text-xs font-medium text-brand-cream">
                      {project.year}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-2xs text-brand-muted">Client</dt>
                    <dd className="text-xs font-medium text-brand-cream">
                      {project.client}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-2xs text-brand-muted">Scope</dt>
                    <dd className="flex flex-wrap gap-1 mt-1">
                      {project.scope.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-brand-cyan/10 px-2 py-0.5 text-2xs text-brand-cyan"
                        >
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <Button href="/contact" variant="primary" size="md" className="w-full">
                Start a Similar Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CallToAction />
    </PageWrapper>
  );
}
