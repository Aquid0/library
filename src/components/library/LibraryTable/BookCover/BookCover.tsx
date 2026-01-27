'use client';

import { memo, useState } from 'react';
import Image from 'next/image';

type BookCoverProps = {
  src: string | null;
  alt: string;
  size?: number;
};

const getOptimizedCoverUrl = (url: string): string => {
  // Open Library: swap -L (large) or -M (medium) for -S (small ~40px)
  if (url.includes('covers.openlibrary.org')) {
    return url.replace(/-[LM]\.jpg$/, '-S.jpg');
  }
  return url;
};

export const BookCover = memo(function BookCover({ src, alt, size = 32 }: BookCoverProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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
        loading="lazy"
        unoptimized
        className={`h-full w-full object-cover transition-opacity duration-200 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
    </div>
  );
});
