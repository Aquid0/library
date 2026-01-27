import type { SkeletonProps } from './types';

export const Skeleton = ({ className = '' }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse rounded bg-zinc-200 dark:bg-zinc-800 ${className}`}
    />
  );
};
