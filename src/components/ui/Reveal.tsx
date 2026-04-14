'use client';

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

type RevealProps = Omit<HTMLMotionProps<'div'>, 'variants'> & {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  once = true,
  ...rest
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
