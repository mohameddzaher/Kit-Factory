'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

const variants = {
  primary:
    'bg-brand-cyan text-brand-charcoal hover:bg-brand-cyan-light font-semibold shadow-lg shadow-brand-cyan/20',
  secondary:
    'bg-brand-mauve text-white hover:bg-brand-mauve-light font-semibold shadow-lg shadow-brand-mauve/20',
  ghost: 'text-brand-cream hover:text-brand-cyan hover:bg-white/5',
  outline:
    'border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan/10 hover:border-brand-cyan/60',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2 text-sm',
  lg: 'px-6 py-2.5 text-sm',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan',
    variants[variant],
    sizes[size],
    disabled && 'cursor-not-allowed opacity-50',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
