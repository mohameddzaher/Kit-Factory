'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  Printer,
  Paintbrush,
  Factory,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import { useLocale } from '@/lib/i18n/LocaleProvider';

type Accent = 'cyan' | 'mauve';

const capabilityConfigs: {
  icon: typeof Cpu;
  itemKey: 'cnc' | 'printing' | 'paint' | 'fabrication' | 'testing' | 'installation';
  gradient: string;
  accent: Accent;
}[] = [
  { icon: Cpu, itemKey: 'cnc', gradient: 'from-brand-charcoal via-brand-dark to-brand-navy', accent: 'cyan' },
  { icon: Printer, itemKey: 'printing', gradient: 'from-brand-dark via-brand-charcoal to-brand-dark', accent: 'mauve' },
  { icon: Paintbrush, itemKey: 'paint', gradient: 'from-brand-navy via-brand-dark to-brand-charcoal', accent: 'cyan' },
  { icon: Factory, itemKey: 'fabrication', gradient: 'from-brand-charcoal via-brand-navy to-brand-dark', accent: 'mauve' },
  { icon: ShieldCheck, itemKey: 'testing', gradient: 'from-brand-dark via-brand-navy to-brand-charcoal', accent: 'cyan' },
  { icon: Truck, itemKey: 'installation', gradient: 'from-brand-navy via-brand-charcoal to-brand-dark', accent: 'mauve' },
];

/* ── Accent style maps (explicit classes so Tailwind can detect them) ── */

const accentStyles = {
  cyan: {
    glow: 'rgba(91, 192, 190, 0.25)',
    iconBg: 'bg-brand-cyan/10',
    iconBgHover: 'group-hover:bg-brand-cyan/20',
    iconColor: 'text-brand-cyan',
    btnBorder: 'border-brand-cyan/30',
    btnBorderHover: 'hover:border-brand-cyan/70',
    btnBorderGroupHover: 'group-hover:border-brand-cyan/50',
    btnText: 'text-brand-cyan',
    btnBgHover: 'hover:bg-brand-cyan/10',
  },
  mauve: {
    glow: 'rgba(157, 142, 199, 0.25)',
    iconBg: 'bg-brand-mauve/10',
    iconBgHover: 'group-hover:bg-brand-mauve/20',
    iconColor: 'text-brand-mauve',
    btnBorder: 'border-brand-mauve/30',
    btnBorderHover: 'hover:border-brand-mauve/70',
    btnBorderGroupHover: 'group-hover:border-brand-mauve/50',
    btnText: 'text-brand-mauve',
    btnBgHover: 'hover:bg-brand-mauve/10',
  },
} as const;

/* ── Single hex tile ──────────────────────────────────── */

function HexTile({
  icon: Icon,
  title,
  gradient,
  accent,
  index,
  learnMore,
}: {
  icon: typeof Cpu;
  title: string;
  gradient: string;
  accent: Accent;
  index: number;
  learnMore: string;
}) {
  const s = accentStyles[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="hex-tile group relative transition-all duration-300 hover:z-50 hover:-translate-y-1"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 clip-hex opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 0 36px ${s.glow}` }}
      />

      {/* Hex container — aspect ratio enforced here */}
      <div className="relative w-full aspect-[1/1.15] cursor-pointer">
        {/* Gradient background */}
        <div
          className={cn(
            'absolute inset-0 clip-hex bg-gradient-to-br transition-all duration-300',
            gradient
          )}
        />

        {/* Inner edge highlight */}
        <div className="absolute inset-[1px] clip-hex bg-gradient-to-br from-white/[0.05] to-transparent" />

        {/* Hover brighten */}
        <div className="absolute inset-0 clip-hex bg-white/0 transition-all duration-300 group-hover:bg-white/[0.07]" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center">
          <div
            className={cn(
              'mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300',
              s.iconBg,
              s.iconBgHover
            )}
          >
            <Icon className={cn('h-[18px] w-[18px]', s.iconColor)} />
          </div>

          <h3 className="text-[11px] font-semibold leading-tight tracking-wide text-brand-cream sm:text-xs lg:text-sm">
            {title}
          </h3>

          <button
            className={cn(
              'mt-2.5 rounded-full border px-3.5 py-0.5 text-[9px] uppercase tracking-widest transition-all duration-200 sm:px-4 sm:py-1 sm:text-[10px]',
              s.btnBorder,
              s.btnText,
              s.btnBorderHover,
              s.btnBgHover,
              s.btnBorderGroupHover
            )}
          >
            {learnMore}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Hex grid positions (absolute, 3-2-1 pyramid) ────── */

const hexPositions: { left: string; top: string }[] = [
  // Row 1 — three hexes flush
  { left: '0', top: '0' },
  { left: 'var(--hexW)', top: '0' },
  { left: 'calc(var(--hexW) * 2)', top: '0' },
  // Row 2 — two hexes, offset ½ hexW
  { left: 'calc(var(--hexW) * 0.5)', top: 'var(--rowStep)' },
  { left: 'calc(var(--hexW) * 1.5)', top: 'var(--rowStep)' },
  // Row 3 — one hex, centered
  { left: 'var(--hexW)', top: 'calc(var(--rowStep) * 2)' },
];

export default function CapabilitiesHoneycomb() {
  const { t } = useLocale();
  const capabilities = capabilityConfigs.map((c) => ({
    ...c,
    title: t.capabilities.items[c.itemKey],
  }));

  return (
    <section className="section-light py-16 md:py-20 overflow-hidden">
      <Container>
        <SectionHeading
          label={t.capabilities.label}
          title={t.capabilities.title}
          description={t.capabilities.description}
          dark={false}
        />

        {/* ── Desktop / Tablet: absolute-positioned honeycomb ── */}
        <div className="hidden md:block">
          <div
            className="relative mx-auto"
            style={
              {
                '--hexW': 'clamp(200px, 18vw, 260px)',
                '--hexH': 'calc(var(--hexW) * 1.15)',
                '--rowStep': 'calc(var(--hexH) * 0.75)',
                width: 'calc(var(--hexW) * 3)',
                height: 'calc(var(--rowStep) * 2 + var(--hexH))',
              } as React.CSSProperties
            }
          >
            {capabilities.map((cap, i) => (
              <div
                key={cap.itemKey}
                className="absolute"
                style={{
                  width: 'var(--hexW)',
                  left: hexPositions[i].left,
                  top: hexPositions[i].top,
                }}
              >
                <HexTile {...cap} index={i} learnMore={t.capabilities.learnMore} />
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="mx-auto flex max-w-[200px] flex-col gap-3">
            {capabilities.map((cap, i) => (
              <HexTile key={cap.itemKey} {...cap} index={i} learnMore={t.capabilities.learnMore} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
