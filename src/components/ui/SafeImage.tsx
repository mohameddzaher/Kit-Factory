'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

const FALLBACK_SRC = '/brand/placeholder.svg';

/**
 * next/image wrapper that falls back to a local SVG placeholder
 * when the primary source fails to load. Also defaults to `unoptimized`
 * to skip Next's image optimizer (which can stall on external URLs in dev).
 */
export default function SafeImage(props: ImageProps) {
  const { src, alt, unoptimized, ...rest } = props;
  const [current, setCurrent] = useState(src);
  const [errored, setErrored] = useState(false);

  return (
    <Image
      {...rest}
      src={current}
      alt={alt}
      unoptimized={unoptimized ?? true}
      onError={() => {
        if (!errored) {
          setErrored(true);
          setCurrent(FALLBACK_SRC);
        }
      }}
    />
  );
}
