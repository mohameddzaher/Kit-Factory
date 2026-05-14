'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { certifications, certTones } from '@/data/certifications';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function Certifications() {
  const { t, dir } = useLocale();
  const p = t.pages.about;

  return (
    <section
      dir={dir}
      className="section-dark relative overflow-hidden py-16 md:py-20"
    >
      <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-kf-green/[0.05] blur-[140px]" />
      <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-kf-magenta/[0.05] blur-[140px]" />

      <Container className="relative z-10">
        <SectionHeading
          label={p.certificationsLabel}
          title={p.certificationsTitle}
          description={p.certificationsDescription}
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
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.05] ${tone.ringDark}`}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${tone.bg}`}
                >
                  <cert.icon className={`h-6 w-6 ${tone.text}`} />
                </div>
                <h3 className="font-display text-base font-bold text-brand-cream">
                  {content.title}
                </h3>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-brand-muted">
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
  );
}
