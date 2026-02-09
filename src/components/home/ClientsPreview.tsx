'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { clients } from '@/data/clients';

export default function ClientsPreview() {
  return (
    <section className="section-dark py-16 md:py-20">
      <Container>
        <SectionHeading
          label="Trusted Partners"
          title="Clients Who Rely on Us"
          description="We are proud to partner with leading brands and organizations across diverse industries."
        />

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="flex h-20 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-all duration-300 hover:border-brand-cyan/20 hover:bg-white/[0.04]"
            >
              <span className="text-2xs font-semibold uppercase tracking-wider text-brand-muted/60 transition-colors duration-300 group-hover:text-brand-cyan">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
