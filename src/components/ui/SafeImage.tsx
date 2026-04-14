'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

const FALLBACK_SRC = '/brand/placeholder.svg';

/**
 * next/image wrapper:
 *  - falls back to a local SVG placeholder if the primary source 404s
 *  - defaults to `unoptimized` to bypass Next's image optimizer
 *    (avoids slow proxy on external URLs, especially in dev)
 *  - lazy-loads + async-decodes by default for smoother scrolling
 */
export default function SafeImage(props: ImageProps) {
  const { src, alt, unoptimized, loading, priority, ...rest } = props;
  const [current, setCurrent] = useState(src);
  const [errored, setErrored] = useState(false);

  // `loading` and `priority` are mutually exclusive in next/image.
  // Only set `loading` when caller didn't opt into priority.
  const loadingProp = priority ? undefined : loading ?? 'lazy';

  return (
    <Image
      {...rest}
      src={current}
      alt={alt}
      priority={priority}
      unoptimized={unoptimized ?? true}
      loading={loadingProp}
      decoding="async"
      onError={() => {
        if (!errored) {
          setErrored(true);
          setCurrent(FALLBACK_SRC);
        }
      }}
    />
  );
}
