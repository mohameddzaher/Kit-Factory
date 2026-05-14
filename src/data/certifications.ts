import { BadgeCheck, Leaf, ShieldCheck, Factory } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type CertKey = 'iso9001' | 'iso14001' | 'iso45001' | 'gmp';
export type CertTone = 'blue' | 'green' | 'red' | 'magenta';

export interface Certification {
  key: CertKey;
  icon: LucideIcon;
  file: string;
  tone: CertTone;
}

export const certifications: Certification[] = [
  {
    key: 'iso9001',
    icon: BadgeCheck,
    file: '/certificates/ISO%209001%20-%20KIT%20FACTORY%20COMPANY.pdf',
    tone: 'blue',
  },
  {
    key: 'iso14001',
    icon: Leaf,
    file: '/certificates/ISO%2014001%20-%20KIT%20FACTORY%20COMPANY.pdf',
    tone: 'green',
  },
  {
    key: 'iso45001',
    icon: ShieldCheck,
    file: '/certificates/ISO%2045001%20-%20KIT%20FACTORY%20COMPANY.pdf',
    tone: 'red',
  },
  {
    key: 'gmp',
    icon: Factory,
    file: '/certificates/GMP%20-%20KIT%20FACTORY%20COMPANY.pdf',
    tone: 'magenta',
  },
];

export const certTones: Record<
  CertTone,
  {
    text: string;
    bg: string;
    border: string;
    ringLight: string;
    ringDark: string;
  }
> = {
  blue: {
    text: 'text-kf-blue',
    bg: 'bg-kf-blue/10',
    border: 'border-kf-blue/30',
    ringLight: 'hover:border-kf-blue/60',
    ringDark: 'hover:border-kf-blue/50',
  },
  green: {
    text: 'text-kf-green',
    bg: 'bg-kf-green/10',
    border: 'border-kf-green/30',
    ringLight: 'hover:border-kf-green/60',
    ringDark: 'hover:border-kf-green/50',
  },
  red: {
    text: 'text-kf-red',
    bg: 'bg-kf-red/10',
    border: 'border-kf-red/30',
    ringLight: 'hover:border-kf-red/60',
    ringDark: 'hover:border-kf-red/50',
  },
  magenta: {
    text: 'text-kf-magenta',
    bg: 'bg-kf-magenta/10',
    border: 'border-kf-magenta/30',
    ringLight: 'hover:border-kf-magenta/60',
    ringDark: 'hover:border-kf-magenta/50',
  },
};
