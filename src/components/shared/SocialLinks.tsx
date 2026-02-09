'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Camera,
  Link as LinkIcon,
} from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  camera: Camera,
  link: LinkIcon,
};

interface SocialLinksProps {
  size?: 'sm' | 'md';
  className?: string;
}

export default function SocialLinks({ size = 'md', className }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {SOCIAL_LINKS.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${social.name}`}
            className={cn(
              'flex items-center justify-center rounded-lg border border-white/10 text-brand-muted transition-all duration-200 hover:border-brand-cyan/30 hover:text-brand-cyan',
              size === 'sm' && 'h-8 w-8',
              size === 'md' && 'h-9 w-9'
            )}
          >
            {Icon && (
              <Icon className={cn(size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4')} />
            )}
          </a>
        );
      })}
    </div>
  );
}
