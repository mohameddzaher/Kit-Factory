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

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We provide the most innovative and feasible solutions our customers dream of.',
  },
  {
    icon: Compass,
    title: 'Exploration',
    description: 'We embark on adventurous quests exploring boundless horizons of creativity.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We weave a tapestry of the finest, most pioneering, realizable solutions.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'We work hand-in-hand with clients to deliver results that exceed expectations.',
  },
];

const milestones = [
  { year: '2006', title: 'Kit Display Dubai Founded', description: 'Our parent company Kit Display established in Dubai, building the foundation of expertise.' },
  { year: '2018', title: 'Kit Factory Launched', description: 'Founded in Jeddah to revolutionize the Middle East advertising landscape.' },
  { year: '2020', title: 'GCC Expansion', description: 'Expanded operations across Saudi Arabia reaching major cities and regions.' },
  { year: '2022', title: '33 Cities Covered', description: 'Achieved nationwide coverage with offices and operations in 33+ cities across KSA.' },
  { year: '2024', title: 'Regional Leadership', description: 'Recognized as a premier indoor & outdoor production house across the GCC.' },
];

export default function AboutPage() {
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
                About Us
              </span>
              <h1 className="font-display text-3xl font-bold text-brand-cream sm:text-4xl">
                Forging Tomorrow&apos;s Vision
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-justify text-brand-muted">
                Founded in 2018 to revolutionize the Middle East advertising landscape,
                Kit Factory is a premier indoor and outdoor production house delivering
                end-to-end solutions from Jeddah and Dubai across the entire GCC.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="section-light py-16 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-brand-charcoal/[0.06] bg-white p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan/10">
                <Eye className="h-5 w-5 text-brand-cyan" />
              </div>
              <h2 className="font-display text-lg font-bold text-brand-charcoal">
                Our Vision
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-justify text-brand-charcoal/70">
                Our vision is to forge our destiny from the untapped potential of
                tomorrow, rather than being bound by the limitations of yesterday.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="rounded-xl border border-brand-charcoal/[0.06] bg-white p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-mauve/10">
                <Target className="h-5 w-5 text-brand-mauve" />
              </div>
              <h2 className="font-display text-lg font-bold text-brand-charcoal">
                Our Mission
              </h2>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2 text-sm text-brand-charcoal/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                  Provide customers with the best, most innovative, and feasible solutions they dream of.
                </li>
                <li className="flex items-start gap-2 text-sm text-brand-charcoal/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mauve" />
                  Embark on an adventurous quest exploring boundless horizons of creativity.
                </li>
                <li className="flex items-start gap-2 text-sm text-brand-charcoal/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                  Weave a tapestry of the finest, most pioneering, realizable solutions under one roof.
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="section-dark py-16 md:py-20">
        <Container>
          <SectionHeading
            label="Who We Are"
            title="A Legacy of Creative Excellence"
            description="From our roots in Dubai to our headquarters in Jeddah, we have built a reputation for delivering exceptional advertising and production solutions."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
              className="space-y-4 text-sm leading-relaxed text-justify text-brand-muted"
            >
              <p>
                Kit Factory was founded in 2018 with a bold ambition: to revolutionize
                the Middle East advertising landscape. Through our strategic partnership
                with Kit Display Dubai, established in 2006, we amplify our presence and
                expertise across the region.
              </p>
              <p>
                With branches in Jeddah and Dubai, we operate as a premier indoor and
                outdoor production house across the GCC, handling projects of any size
                with strong attention to detail.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="space-y-4 text-sm leading-relaxed text-justify text-brand-muted"
            >
              <p>
                From concept to delivery, we provide full advertising operations and
                marketing services, supported by advanced digital printing, graphic
                imaging machines, workshops, and a highly skilled team.
              </p>
              <p>
                Our in-house facilities include CNC and laser equipment for precision,
                with printing capabilities spanning water-based, pigment, latex, solvent,
                and UV technologies across machines from HP Latex, Roland, Mutoh, Vutek,
                Canon, and Flora.
              </p>
            </motion.div>
          </div>

          {/* Key figures */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: Building2, value: '2', label: 'Offices' },
              { icon: Globe, value: '33+', label: 'Cities' },
              { icon: Users, value: '100+', label: 'Team Members' },
              { icon: Award, value: '1000+', label: 'Projects' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center"
              >
                <stat.icon className="mx-auto mb-2 h-4 w-4 text-brand-cyan" />
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
      <section className="section-light py-16 md:py-20">
        <Container>
          <SectionHeading
            label="Core Values"
            title="What Drives Us"
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
      <section className="section-dark py-16 md:py-20">
        <Container>
          <SectionHeading
            label="Our Journey"
            title="Milestones"
          />

          <div className="mx-auto max-w-2xl space-y-0">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative border-l border-brand-cyan/20 py-4 pl-6"
              >
                <div className="absolute -left-[5px] top-5 h-2.5 w-2.5 rounded-full border-2 border-brand-cyan bg-brand-charcoal" />
                <span className="text-xs font-semibold text-brand-cyan">
                  {milestone.year}
                </span>
                <h3 className="mt-0.5 text-sm font-semibold text-brand-cream">
                  {milestone.title}
                </h3>
                <p className="mt-0.5 text-xs text-brand-muted">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </PageWrapper>
  );
}
