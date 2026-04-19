'use client';

import {
  Facebook,
  Instagram,
  Linkedin,
  Link as LinkIcon,
} from 'lucide-react';
import SnapchatIcon from '@/components/shared/icons/Snapchat';
import XIcon from '@/components/shared/icons/XIcon';
import { SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  x: XIcon,
  snapchat: SnapchatIcon,
  link: LinkIcon,
};

// Filled pill style — brand-color background + white/black icon — readable on
// any surface (dark or light), no reliance on parent bg for contrast.
const brandStyles: Record<
  string,
  { bg: string; icon: string; shadow: string }
> = {
  linkedin: {
    bg: 'bg-[#0A66C2] hover:bg-[#0A66C2]/90',
    icon: 'text-white',
    shadow: 'hover:shadow-[0_6px_18px_rgba(10,102,194,0.45)]',
  },
  instagram: {
    // Instagram signature gradient
    bg: 'bg-[linear-gradient(45deg,#FEDA75_0%,#FA7E1E_25%,#D62976_50%,#962FBF_75%,#4F5BD5_100%)] hover:opacity-90',
    icon: 'text-white',
    shadow: 'hover:shadow-[0_6px_18px_rgba(214,41,118,0.45)]',
  },
  facebook: {
    bg: 'bg-[#1877F2] hover:bg-[#1877F2]/90',
    icon: 'text-white',
    shadow: 'hover:shadow-[0_6px_18px_rgba(24,119,242,0.45)]',
  },
  snapchat: {
    bg: 'bg-[#FFFC00] hover:bg-[#FFFC00]/90',
    icon: 'text-black',
    shadow: 'hover:shadow-[0_6px_18px_rgba(255,252,0,0.45)]',
  },
  x: {
    bg: 'bg-black hover:bg-black/85',
    icon: 'text-white',
    shadow: 'hover:shadow-[0_6px_18px_rgba(0,0,0,0.45)]',
  },
  link: {
    bg: 'bg-kf-green hover:bg-kf-green/90',
    icon: 'text-white',
    shadow: 'hover:shadow-[0_6px_18px_rgba(97,208,73,0.45)]',
  },
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
        const tone = brandStyles[social.icon] ?? brandStyles.link;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${social.name}`}
            className={cn(
              'flex items-center justify-center rounded-lg transition-all duration-300 hover:-translate-y-0.5',
              tone.bg,
              tone.icon,
              tone.shadow,
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
