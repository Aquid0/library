import { Skeleton } from './Skeleton';
import type { SkeletonHeaderCellProps } from './types';

export const SkeletonHeaderCell = ({ index }: SkeletonHeaderCellProps) => (
  <th
    key={index}
    className="px-4 py-3 text-left font-medium text-zinc-600 dark:text-zinc-400"
  >
    <Skeleton className="h-4 w-20" />
  </th>
);
