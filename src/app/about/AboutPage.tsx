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
  FileText,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PageWrapper from '@/components/layout/PageWrapper';
import ManagementMessage from '@/components/shared/ManagementMessage';
import { certifications, certTones } from '@/data/certifications';
import { useLocale } from '@/lib/i18n/LocaleProvider';

const valueIcons = [Target, Compass, Award, Handshake] as const;

const palette = [
  { text: 'text-kf-blue', bg: 'bg-kf-blue/10', border: 'border-kf-blue/30', ring: 'hover:border-kf-blue/40' },
  { text: 'text-kf-green', bg: 'bg-kf-green/10', border: 'border-kf-green/30', ring: 'hover:border-kf-green/40' },
  { text: 'text-kf-yellow', bg: 'bg-kf-yellow/10', border: 'border-kf-yellow/40', ring: 'hover:border-kf-yellow/50' },
  { text: 'text-kf-red', bg: 'bg-kf-red/10', border: 'border-kf-red/30', ring: 'hover:border-kf-red/40' },
  { text: 'text-kf-magenta', bg: 'bg-kf-magenta/10', border: 'border-kf-magenta/30', ring: 'hover:border-kf-magenta/40' },
] as const;

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
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 text-sm leading-relaxed text-brand-muted"
            >
              <p>{p.whoBody1}</p>
              <p>{p.whoBody2}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
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
            ].map((stat, i) => {
              const tone = palette[i % palette.length];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center"
                >
                  <span
                    className={`mx-auto mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg ${tone.bg} ${tone.text}`}
                  >
                    <stat.icon className="h-4 w-4" />
                  </span>
                  <p className="font-display text-xl font-bold text-brand-cream">
                    {stat.value}
                  </p>
                  <p className="text-2xs text-brand-muted">{stat.label}</p>
                </motion.div>
              );
            })}
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
            {values.map((value, i) => {
              const tone = palette[i % palette.length];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`rounded-xl border border-brand-charcoal/[0.06] bg-white p-5 text-center transition-colors ${tone.ring}`}
                >
                  <div
                    className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${tone.bg}`}
                  >
                    <value.icon className={`h-5 w-5 ${tone.text}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-brand-charcoal">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-brand-charcoal/60">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section dir={dir} className="section-dark py-16 md:py-20">
        <Container>
          <SectionHeading label={p.journeyLabel} title={p.journeyTitle} />

          <div className="mx-auto max-w-2xl space-y-0">
            {p.milestones.map((m, i) => {
              const tone = palette[i % palette.length];
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative border-l py-4 pl-6 ${tone.border}`}
                >
                  <div
                    className={`absolute -left-[5px] top-5 h-2.5 w-2.5 rounded-full border-2 bg-brand-charcoal ${tone.border}`}
                  />
                  <span className={`text-xs font-semibold ${tone.text}`}>{m.year}</span>
                  <h3 className="mt-0.5 text-sm font-semibold text-brand-cream">
                    {m.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-brand-muted">{m.description}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section dir={dir} className="section-light py-16 md:py-20">
        <Container>
          <SectionHeading
            label={p.certificationsLabel}
            title={p.certificationsTitle}
            description={p.certificationsDescription}
            dark={false}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, i) => {
              const tone = certTones[cert.tone];
              const content = p.certifications[cert.key];
              return (
                <motion.a
                  key={cert.key}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`group flex flex-col rounded-xl border border-brand-charcoal/[0.06] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${tone.ringLight}`}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${tone.bg}`}
                  >
                    <cert.icon className={`h-6 w-6 ${tone.text}`} />
                  </div>
                  <h3 className="font-display text-base font-bold text-brand-charcoal">
                    {content.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-brand-charcoal/60">
                    {content.description}
                  </p>
                  <span
                    className={`mt-4 inline-flex items-center gap-1.5 text-2xs font-semibold uppercase tracking-wider ${tone.text}`}
                  >
                    <FileText className="h-3 w-3" />
                    {p.certificationsCta}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </Container>
      </section>
    </PageWrapper>
  );
}
