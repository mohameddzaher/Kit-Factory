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
  y = 22,
  duration = 0.85,
  once = true,
  ...rest
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-100px 0px -10% 0px' }}
      variants={variants}
      style={{ willChange: 'transform, opacity' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
