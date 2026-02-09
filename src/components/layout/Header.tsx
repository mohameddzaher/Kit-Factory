'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/[0.06] bg-brand-charcoal/90 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex items-center gap-2"
          aria-label="Kit Factory Home"
        >
          <Image
            src="/brand/KF.png"
            alt="Kit Factory"
            width={100}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-3 py-1.5 text-xs font-medium transition-colors',
                  isActive
                    ? 'text-brand-cyan'
                    : 'text-brand-muted hover:text-brand-cream'
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-brand-cyan"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* Social dropdown */}
          <div className="relative">
            <button
              onClick={() => setSocialOpen(!socialOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-brand-muted transition-colors hover:bg-white/5 hover:text-brand-cream"
              aria-label="Social media links"
              aria-expanded={socialOpen}
            >
              <Share2 className="h-3.5 w-3.5" />
            </button>
            <AnimatePresence>
              {socialOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-white/10 bg-brand-charcoal/95 p-2 shadow-xl backdrop-blur-xl"
                >
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-brand-muted transition-colors hover:bg-white/5 hover:text-brand-cream"
                    >
                      {social.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Button href="/contact" size="sm" variant="primary">
            Get a Quote
            <ArrowRight className="h-3 w-3" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-brand-cream lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/[0.06] bg-brand-charcoal/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'border-b border-white/[0.04] py-3 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-brand-cyan'
                        : 'text-brand-muted'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-4">
                <Button
                  href="/contact"
                  size="md"
                  variant="primary"
                  className="w-full"
                >
                  Get a Quote
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
