import { SkeletonCell } from './SkeletonCell';
import type { SkeletonRowProps } from './types';

export const SkeletonRow = ({ columns }: SkeletonRowProps) => (
  <tr className="bg-white dark:bg-zinc-950">
    {Array.from({ length: columns }).map((_, i) => (
      <SkeletonCell key={i} index={i} />
    ))}
  </tr>
);
