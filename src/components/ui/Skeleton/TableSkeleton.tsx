import { SkeletonHeaderCell } from './SkeletonHeaderCell';
import { SkeletonRow } from './SkeletonRow';
import type { TableSkeletonProps } from './types';

export const TableSkeleton = ({ rows = 5, columns = 5 }: TableSkeletonProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
      <table className="w-full text-sm">
        <thead className="bg-zinc-50 dark:bg-zinc-900">
          <tr>
            {Array.from({ length: columns }).map((_, i) => (
              <SkeletonHeaderCell key={i} index={i} />
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {Array.from({ length: rows }).map((_, i) => (
            <SkeletonRow key={i} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
