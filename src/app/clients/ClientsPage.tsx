'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PageWrapper from '@/components/layout/PageWrapper';
import CallToAction from '@/components/home/CallToAction';
import { clients } from '@/data/clients';

export default function ClientsPage() {
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
                Partnerships
              </span>
              <h1 className="font-display text-3xl font-bold text-brand-cream sm:text-4xl">
                Our Clients
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-justify text-brand-muted">
                We are proud to partner with leading brands and organizations across
                diverse industries throughout the GCC. Their trust fuels our commitment
                to delivering exceptional results.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Clients Grid */}
      <section className="section-light py-16 md:py-20">
        <Container>
          <SectionHeading
            label="Trusted By"
            title="Brands That Choose Kit Factory"
            description="From retail and technology to government and healthcare, our clients span every major industry."
            dark={false}
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group flex flex-col items-center justify-center rounded-xl border border-brand-charcoal/[0.06] bg-white p-5 text-center transition-all duration-300 hover:border-brand-cyan/20 hover:shadow-md"
              >
                <span className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-charcoal/30 transition-colors duration-300 group-hover:text-brand-cyan">
                  {client.name}
                </span>
                <span className="text-2xs text-brand-charcoal/40">
                  {client.industry}
                </span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial placeholder */}
      <section className="section-dark py-16 md:py-20">
        <Container>
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            description="Real feedback from the brands and organizations we serve."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
              >
                <p className="text-xs italic leading-relaxed text-justify text-brand-muted">
                  &ldquo;Kit Factory delivered an exceptional result for our project.
                  Their attention to detail and professional approach made the entire
                  process seamless.&rdquo;
                </p>
                <div className="mt-4 border-t border-white/[0.06] pt-3">
                  <p className="text-xs font-semibold text-brand-cream">
                    Client Representative
                  </p>
                  <p className="text-2xs text-brand-muted">Partner Company</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </PageWrapper>
  );
}
