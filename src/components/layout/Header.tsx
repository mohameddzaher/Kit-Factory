'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Share2, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function Header() {
  const pathname = usePathname();
  const { locale, toggleLocale, t, dir } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.coverage, href: '/coverage' },
    { label: t.nav.clients, href: '/clients' },
    { label: t.nav.contact, href: '/contact' },
  ];

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
      dir={dir}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/[0.06] bg-brand-charcoal/90 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
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
                    ? 'text-kf-blue'
                    : 'text-brand-muted hover:text-brand-cream'
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-kf-blue"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1 text-2xs font-semibold uppercase tracking-wider text-brand-cream transition-colors hover:border-kf-blue/40 hover:text-kf-blue"
            aria-label={locale === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
          >
            <Globe className="h-3 w-3" />
            {locale === 'en' ? 'AR' : 'EN'}
          </button>

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
                  className={cn(
                    'absolute top-full mt-2 w-44 rounded-xl border border-white/10 bg-brand-charcoal/95 p-2 shadow-xl backdrop-blur-xl',
                    dir === 'rtl' ? 'left-0' : 'right-0'
                  )}
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
            {t.nav.getQuote}
            <ArrowRight className={cn('h-3 w-3', dir === 'rtl' && 'rotate-180')} />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 rounded-lg border border-white/10 px-2 py-1 text-2xs font-semibold uppercase text-brand-cream"
            aria-label={locale === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
          >
            <Globe className="h-3 w-3" />
            {locale === 'en' ? 'AR' : 'EN'}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-brand-cream"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

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
              {navItems.map((item) => {
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
                      isActive ? 'text-kf-blue' : 'text-brand-muted'
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
                  {t.nav.getQuote}
                  <ArrowRight className={cn('h-3 w-3', dir === 'rtl' && 'rotate-180')} />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
