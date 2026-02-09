'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

/* ── rotating showcase images ── */
const showcaseImages = [
  'https://images.unsplash.com/photo-1761474258159-6c03a22f07ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1633873275023-36235e25e2b3?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

/* ── right-side image stack ── */
const stackImages = [
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    alt: 'Indoor branding',
  },
  {
    src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    alt: 'Retail display',
  },
  {
    src: 'https://images.unsplash.com/photo-1761474258159-6c03a22f07ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Mall activation',
  },
];

/* ── marquee items ── */
const marqueeItems = [
  'Billboards & Banners',
  'Exhibition Stands',
  'Vehicle Branding',
  'Digital Signage',
  'Retail Solutions',
  'Signage Systems',
  'Mall Activations',
  'Large Format Printing',
  'Corporate Branding',
  'Wayfinding Systems',
];

/* ── stagger animation variants ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  const [imgIndex, setImgIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* ═══════════ Background ═══════════ */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {/* Base: full-bleed dark image */}
        <Image
          src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Heavy dark overlay */}
        <div className="absolute inset-0 bg-brand-dark/85" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/60 to-brand-dark/90" />
        {/* Cyan & mauve accent glows */}
        <div className="absolute -left-[15%] top-[15%] h-[500px] w-[500px] rounded-full bg-brand-cyan/[0.08] blur-[140px]" />
        <div className="absolute -right-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-brand-mauve/[0.07] blur-[120px]" />
      </motion.div>

      {/* Corner decorative elements */}
      <div className="absolute left-6 top-28 hidden lg:block">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-24 w-px origin-top bg-gradient-to-b from-brand-cyan/40 to-transparent"
        />
      </div>
      <div className="absolute right-6 top-28 hidden lg:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-right text-2xs tracking-[0.3em] text-brand-muted/30"
          style={{ writingMode: 'vertical-rl' }}
        >
          PRODUCTION HOUSE
        </motion.div>
      </div>

      {/* ═══════════ Main Content ═══════════ */}
      <motion.div
        className="relative z-10 mx-auto flex flex-1 w-full max-w-[90rem] items-center px-5 pt-28 pb-6 sm:px-8 lg:px-12"
        style={{ y: textY }}
      >
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left: text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-brand-cyan/60" />
              <span className="text-2xs font-semibold uppercase tracking-[0.3em] text-brand-cyan">
                Kit Factory — Since 2018
              </span>
            </motion.div>

            {/* ── Massive headline ── */}
            <div className="overflow-hidden">
              <motion.div
                variants={lineVariants}
                className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-brand-cream"
              >
                We Craft
              </motion.div>
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="overflow-hidden">
                <motion.div
                  variants={lineVariants}
                  className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight"
                >
                  <span className="gradient-text">Bold</span>
                </motion.div>
              </div>

              {/* Inline rotating image window */}
              <motion.div
                variants={fadeUp}
                className="relative h-[clamp(2.2rem,5vw,4rem)] w-[clamp(5.5rem,12vw,10rem)] overflow-hidden rounded-xl"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={showcaseImages[imgIndex]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="14rem"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
              </motion.div>

              <div className="overflow-hidden">
                <motion.div
                  variants={lineVariants}
                  className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-brand-cream"
                >
                  Brand
                </motion.div>
              </div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                variants={lineVariants}
                className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-brand-cream"
              >
                Experiences<span className="text-brand-cyan">.</span>
              </motion.div>
            </div>

            {/* ── Description + CTAs ── */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-md text-sm leading-relaxed text-justify text-brand-muted sm:mt-10"
            >
              End-to-end advertising, signage, exhibitions, and large-format
              production — engineered with precision from concept to installation
              across 33 cities in the GCC.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <Button href="/services" variant="primary" size="lg">
                Our Services
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: stacked image composition (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden h-[420px] w-[340px] lg:block"
          >
            {/* Glow behind */}
            <div className="absolute -inset-10 rounded-full bg-brand-cyan/[0.06] blur-[80px]" />

            {/* Card 1 — back */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 top-0 h-[200px] w-[260px] overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40"
            >
              <Image
                src={stackImages[0].src}
                alt={stackImages[0].alt}
                fill
                className="object-cover"
                sizes="260px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Card 2 — middle */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-0 top-[110px] h-[180px] w-[240px] overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40"
            >
              <Image
                src={stackImages[1].src}
                alt={stackImages[1].alt}
                fill
                className="object-cover"
                sizes="240px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Card 3 — front */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-0 left-[30px] h-[170px] w-[220px] overflow-hidden rounded-2xl border border-brand-cyan/20 shadow-2xl shadow-black/40"
            >
              <Image
                src={stackImages[2].src}
                alt={stackImages[2].alt}
                fill
                className="object-cover"
                sizes="220px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-brand-cyan/10" />
            <div className="absolute -bottom-3 -left-3 h-14 w-14 rounded-full border border-brand-mauve/10" />
          </motion.div>
        </div>
      </motion.div>

      {/* ═══════════ Marquee Strip ═══════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="relative z-10 overflow-hidden border-y border-white/[0.04] py-4"
      >
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-brand-muted/40"
            >
              <span className="h-1 w-1 rounded-full bg-brand-cyan/40" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ═══════════ Bottom stats bar (centered) ═══════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="relative z-10 border-t border-white/[0.06]"
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-center px-5 py-4 sm:px-8 lg:px-12">
          <div className="flex gap-10 sm:gap-16">
            {[
              { val: '500+', label: 'Projects' },
              { val: '33', label: 'Cities' },
              { val: '200+', label: 'Clients' },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-5">
                <div className="text-center">
                  <span className="font-display text-lg font-bold text-brand-cream sm:text-xl">
                    {s.val}
                  </span>
                  <span className="ml-2 text-2xs text-brand-muted/50">{s.label}</span>
                </div>
                {i < 2 && (
                  <span className="hidden h-4 w-px bg-white/[0.08] sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
