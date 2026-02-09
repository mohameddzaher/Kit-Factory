'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PageWrapper from '@/components/layout/PageWrapper';
import CallToAction from '@/components/home/CallToAction';
import { teamMembers } from '@/data/team';
import { generatePlaceholderSVG } from '@/lib/utils';

export default function TeamPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="section-dark py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                Our People
              </span>
              <h1 className="font-display text-3xl font-bold text-brand-cream sm:text-4xl">
                Meet the Team
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                A diverse, highly skilled team of professionals passionate about
                turning creative visions into tangible realities.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Team Grid */}
      <section className="section-light py-16 md:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, i) => (
              <motion.div
                key={`${member.role}-${i}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group overflow-hidden rounded-xl border border-brand-charcoal/[0.06] bg-white transition-all duration-300 hover:border-brand-cyan/20 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal/5">
                  <img
                    src={generatePlaceholderSVG(480, 360, member.role)}
                    alt={member.role}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-md bg-brand-charcoal/5">
                    <Users className="h-3.5 w-3.5 text-brand-charcoal/60" />
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-brand-charcoal">
                    {member.role}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-brand-charcoal/60">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Culture */}
      <section className="section-dark py-16 md:py-20">
        <Container>
          <SectionHeading
            label="Culture"
            title="Why Work With Us"
            description="We foster a culture of creativity, precision, and collaboration that drives exceptional results."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'Creative Freedom',
                description:
                  'We encourage bold ideas and give our team the resources to explore creative boundaries.',
              },
              {
                title: 'Precision Driven',
                description:
                  'Every detail matters. Our commitment to quality is reflected in every project we deliver.',
              },
              {
                title: 'Collaborative Spirit',
                description:
                  'Cross-functional teamwork ensures every perspective is valued in our process.',
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
              >
                <h3 className="text-sm font-semibold text-brand-cream">
                  {value.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-brand-muted">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </PageWrapper>
  );
}
