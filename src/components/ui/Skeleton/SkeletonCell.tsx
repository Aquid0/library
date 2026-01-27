import { Skeleton } from './Skeleton';
import type { SkeletonCellProps } from './types';

export const SkeletonCell = ({ index }: SkeletonCellProps) => {
  const isFirstColumn = index === 0;
  const widthPercent = isFirstColumn ? 'w-3/4' : 'w-1/2';

  return (
    <td className="px-4 py-3">
      <Skeleton className={`h-4 ${widthPercent}`} />
    </td>
  );
};
