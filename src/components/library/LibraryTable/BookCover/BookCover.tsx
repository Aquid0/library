'use client';

import { memo, useState } from 'react';
import Image from 'next/image';
import { BLUR_DATA_URL, PRIORITY_THRESHOLD, getOptimizedCoverUrl } from './constants';
import type { BookCoverProps } from './types';

export const BookCover = memo(function BookCover({
  src,
  alt,
  size = 32,
  index = Infinity,
}: BookCoverProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Above-the-fold rows get priority loading
  const isPriority = index < PRIORITY_THRESHOLD;

  if (!src || hasError) {
    return (
      <div
        className="flex shrink-0 items-center justify-center overflow-hidden rounded bg-zinc-200 text-xs text-zinc-400 dark:bg-zinc-700"
        style={{ width: size, height: size }}
      >
        ?
      </div>
    );
  }

  const optimizedSrc = getOptimizedCoverUrl(src);

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded bg-zinc-200 dark:bg-zinc-700"
      style={{ width: size, height: size }}
    >
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-zinc-300 dark:bg-zinc-600" />
      )}
      <Image
        src={optimizedSrc}
        alt={alt}
        width={size}
        height={size}
        priority={isPriority}
        loading={isPriority ? undefined : 'lazy'}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className={`h-full w-full object-cover transition-opacity duration-200 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
    </div>
  );
});
