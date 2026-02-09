'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  dark = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className={cn(
        'mb-10 md:mb-14',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left'
      )}
    >
      {label && (
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
          {label}
        </span>
      )}
      <h2
        className={cn(
          'font-display text-2xl font-bold tracking-tight sm:text-3xl',
          dark ? 'text-brand-cream' : 'text-brand-charcoal'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-justify',
            dark ? 'text-brand-muted' : 'text-brand-charcoal/60',
            align === 'left' && 'mx-0'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
