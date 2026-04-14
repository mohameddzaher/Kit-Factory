'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Compass,
  Award,
  Users,
  Building2,
  Globe,
  Handshake,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PageWrapper from '@/components/layout/PageWrapper';
import ManagementMessage from '@/components/shared/ManagementMessage';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const valueIcons = [Target, Compass, Award, Handshake] as const;

export default function AboutPage() {
  const { t, dir } = useLocale();
  const p = t.pages.about;

  const valueKeys = ['innovation', 'exploration', 'excellence', 'partnership'] as const;
  const values = valueKeys.map((k, i) => ({
    icon: valueIcons[i],
    ...p.values[k],
  }));

  return (
    <PageWrapper>
      {/* Hero */}
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

      <ManagementMessage variant="light" />

      {/* Vision & Mission */}
      <section dir={dir} className="section-light py-16 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-brand-charcoal/[0.06] bg-white p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-kf-blue/10">
                <Eye className="h-5 w-5 text-kf-blue" />
              </div>
              <h2 className="font-display text-lg font-bold text-brand-charcoal">
                {p.visionTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/70">
                {p.visionBody}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="rounded-xl border border-brand-charcoal/[0.06] bg-white p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-kf-magenta/10">
                <Target className="h-5 w-5 text-kf-magenta" />
              </div>
              <h2 className="font-display text-lg font-bold text-brand-charcoal">
                {p.missionTitle}
              </h2>
              <ul className="mt-2 space-y-2">
                {p.missionBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-brand-charcoal/70">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${i % 2 === 0 ? 'bg-kf-blue' : 'bg-kf-magenta'}`}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section dir={dir} className="section-dark py-16 md:py-20">
        <Container>
          <SectionHeading
            label={p.whoWeAreLabel}
            title={p.whoWeAreTitle}
            description={p.whoWeAreDescription}
          />

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className="space-y-4 text-sm leading-relaxed text-brand-muted"
            >
              <p>{p.whoBody1}</p>
              <p>{p.whoBody2}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="space-y-4 text-sm leading-relaxed text-brand-muted"
            >
              <p>{p.whoBody3}</p>
              <p>{p.whoBody4}</p>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: Building2, value: '2', label: p.figures.offices },
              { icon: Globe, value: '33+', label: p.figures.cities },
              { icon: Users, value: '100+', label: p.figures.team },
              { icon: Award, value: '1000+', label: p.figures.projects },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center"
              >
                <stat.icon className="mx-auto mb-2 h-4 w-4 text-kf-blue" />
                <p className="font-display text-xl font-bold text-brand-cream">
                  {stat.value}
                </p>
                <p className="text-2xs text-brand-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section dir={dir} className="section-light py-16 md:py-20">
        <Container>
          <SectionHeading
            label={p.valuesLabel}
            title={p.valuesTitle}
            dark={false}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-brand-charcoal/[0.06] bg-white p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-charcoal/5">
                  <value.icon className="h-5 w-5 text-brand-charcoal" />
                </div>
                <h3 className="text-sm font-semibold text-brand-charcoal">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-brand-charcoal/60">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section dir={dir} className="section-dark py-16 md:py-20">
        <Container>
          <SectionHeading label={p.journeyLabel} title={p.journeyTitle} />

          <div className="mx-auto max-w-2xl space-y-0">
            {p.milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative border-l border-kf-blue/25 py-4 pl-6"
              >
                <div className="absolute -left-[5px] top-5 h-2.5 w-2.5 rounded-full border-2 border-kf-blue bg-brand-charcoal" />
                <span className="text-xs font-semibold text-kf-blue">{m.year}</span>
                <h3 className="mt-0.5 text-sm font-semibold text-brand-cream">
                  {m.title}
                </h3>
                <p className="mt-0.5 text-xs text-brand-muted">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </PageWrapper>
  );
}
