import { Skeleton } from './Skeleton';
import type { SkeletonCellProps } from './types';

export const SkeletonCell = ({ index }: SkeletonCellProps) => {
  const isFirstColumn = index === 0;
  const width = isFirstColumn ? 'w-32' : 'w-16';

  return (
    <td className="px-4 py-3">
      <Skeleton className={`h-4 ${width}`} />
    </td>
  );
};
