'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import SafeImage from '@/components/ui/SafeImage';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { cn } from '@/lib/utils';

/* ── match-cut rotating frames ── */
const matchCutFrames = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=70',
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=70',
  'https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&w=1200&q=70',
  'https://images.unsplash.com/photo-1567449303078-57ad995bd17f?auto=format&fit=crop&w=1200&q=70',
  'https://images.unsplash.com/photo-1504711434969-e33886168d6c?auto=format&fit=crop&w=1200&q=70',
];

/* TODO(client): replace with real Kit Factory hero video once provided. */
const HERO_VIDEO_SRC = '/brand/hero.mp4';


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
  const { t, dir } = useLocale();
  const [frameIndex, setFrameIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
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
      setFrameIndex((prev) => (prev + 1) % matchCutFrames.length);
    }, 2600);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      dir={dir}
      className="relative flex min-h-screen flex-col overflow-hidden bg-brand-charcoal"
    >
      {/* ═══════════ Background: video + match-cut fallback ═══════════ */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {!videoFailed && (
          <video
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        )}

        {/* Match-cut image layer (shown when no video, or behind) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={frameIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: videoFailed ? 1 : 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <SafeImage
              src={matchCutFrames[frameIndex]}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={frameIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Darker overlay for readable text */}
        <div className="absolute inset-0 bg-brand-charcoal/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-charcoal/70 to-brand-charcoal/95" />

        {/* Brand-color accent glows (subtle) */}
        <div className="absolute -left-[15%] top-[15%] h-[500px] w-[500px] rounded-full bg-kf-blue/[0.10] blur-[140px]" />
        <div className="absolute -right-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-kf-magenta/[0.07] blur-[120px]" />
        <div className="absolute left-[30%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-kf-green/[0.06] blur-[120px]" />
      </motion.div>

      {/* Corner decorative bars */}
      <div className="absolute left-6 top-28 hidden lg:block">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-24 w-px origin-top bg-gradient-to-b from-kf-blue/50 to-transparent"
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
          {t.hero.productionHouse}
        </motion.div>
      </div>

      {/* ═══════════ Main Content ═══════════ */}
      <motion.div
        className="relative z-10 mx-auto flex flex-1 w-full max-w-[90rem] items-center px-5 pt-28 pb-6 sm:px-8 lg:px-12"
        style={{ y: textY }}
      >
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* Left: text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-kf-blue/70" />
              <span className="text-2xs font-semibold uppercase tracking-[0.3em] text-kf-blue">
                {t.hero.eyebrow}
              </span>
            </motion.div>

            {/* KIT Factory headline */}
            <div className="overflow-hidden">
              <motion.h1
                variants={lineVariants}
                className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold leading-[0.92] tracking-tight text-brand-cream"
              >
                <span className="gradient-text">KIT</span>{' '}
                <span className="text-brand-cream">Factory</span>
              </motion.h1>
            </div>

            {/* Tagline */}
            <div className="mt-3 overflow-hidden">
              <motion.p
                variants={lineVariants}
                className="font-display text-[clamp(1rem,2.4vw,1.75rem)] font-light italic leading-snug text-brand-cream/90"
              >
                {t.hero.tagline}
                <span className="ml-1 text-kf-yellow">.</span>
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className={cn(
                'mt-8 max-w-md text-sm leading-relaxed text-brand-muted sm:mt-10',
                dir === 'ltr' ? 'text-justify' : 'text-right'
              )}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <Button href="/services" variant="primary" size="lg">
                {t.hero.ctaServices}
                <ArrowRight className={cn('h-3.5 w-3.5', dir === 'rtl' && 'rotate-180')} />
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                {t.hero.ctaPortfolio}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: match-cut frame stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden h-[420px] w-[340px] lg:block"
          >
            <div className="absolute -inset-10 rounded-full bg-kf-blue/[0.08] blur-[80px]" />

            {[
              { top: 0, left: 0, w: 260, h: 200, duration: 6, border: 'border-white/[0.08]' },
              { top: 110, right: 0, w: 240, h: 180, duration: 7, border: 'border-kf-yellow/30' },
              { bottom: 0, left: 30, w: 220, h: 170, duration: 5, border: 'border-kf-blue/30' },
            ].map((cfg, idx) => {
              const frameSrc = matchCutFrames[(frameIndex + idx) % matchCutFrames.length];
              return (
                <motion.div
                  key={idx}
                  animate={{ y: [0, idx % 2 === 0 ? -6 : 8, 0] }}
                  transition={{ duration: cfg.duration, repeat: Infinity, ease: 'easeInOut' }}
                  className={cn(
                    'absolute overflow-hidden rounded-2xl border shadow-2xl shadow-black/40',
                    cfg.border
                  )}
                  style={{
                    top: cfg.top,
                    bottom: cfg.bottom,
                    left: cfg.left,
                    right: cfg.right,
                    width: cfg.w,
                    height: cfg.h,
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={frameSrc}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <SafeImage
                        src={frameSrc}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="260px"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              );
            })}

            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-kf-blue/15" />
            <div className="absolute -bottom-3 -left-3 h-14 w-14 rounded-full border border-kf-magenta/15" />
          </motion.div>
        </div>
      </motion.div>

      {/* Accent gradient bar */}
      <div className="relative z-10 h-0.5 w-full kf-accent-bar opacity-80" />

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="relative z-10 overflow-hidden border-y border-white/[0.04] py-4"
      >
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...t.hero.marquee, ...t.hero.marquee].map((item, i) => (
            <span
              key={i}
              className="mx-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-brand-muted/45"
            >
              <span className="h-1 w-1 rounded-full bg-kf-blue/50" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="relative z-10 border-t border-white/[0.06]"
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-center px-5 py-4 sm:px-8 lg:px-12">
          <div className="flex gap-10 sm:gap-16">
            {[
              { val: '500+', label: t.hero.stats.projects },
              { val: '33', label: t.hero.stats.cities },
              { val: '200+', label: t.hero.stats.clients },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-5">
                <div className="text-center">
                  <span className="font-display text-lg font-bold text-brand-cream sm:text-xl">
                    {s.val}
                  </span>
                  <span className="mx-2 text-2xs text-brand-muted/60">{s.label}</span>
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
