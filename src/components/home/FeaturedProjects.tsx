'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section className="section-light py-16 md:py-20">
      <Container>
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="A selection of our recent work across the GCC region."
          dark={false}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-xl border border-brand-charcoal/[0.06] bg-white transition-all duration-300 hover:border-brand-cyan/20 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-charcoal/5">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-charcoal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-2xs font-semibold uppercase tracking-wider text-brand-cyan">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold text-brand-charcoal">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-brand-charcoal/60 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/projects" variant="outline" size="md">
            View All Projects
            <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
