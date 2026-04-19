'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
  dark = true,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'rounded-xl border p-5',
        dark
          ? 'border-white/[0.06] bg-white/[0.02]'
          : 'border-brand-charcoal/[0.06] bg-brand-charcoal/[0.02]',
        hover && 'transition-all duration-300 hover:border-brand-cyan/20 hover:shadow-lg',
        hover && dark && 'hover:bg-white/[0.04] hover:shadow-brand-cyan/5',
        hover && !dark && 'hover:bg-brand-charcoal/[0.04]',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
