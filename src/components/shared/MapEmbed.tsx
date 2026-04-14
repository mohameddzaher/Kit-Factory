'use client';

import { cn } from '@/lib/utils';
import { CONTACT_INFO } from '@/lib/constants';

interface MapEmbedProps {
  className?: string;
  height?: number;
}

export default function MapEmbed({ className, height = 380 }: MapEmbedProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-white/10',
        className
      )}
    >
      <iframe
        src={CONTACT_INFO.mapEmbed}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Kit Factory Location — Jeddah, Saudi Arabia"
        className="grayscale-[30%] contrast-[1.05]"
      />
    </div>
  );
}
