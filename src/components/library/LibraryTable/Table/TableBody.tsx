import { SkeletonRow } from '@/components/ui/Skeleton';
import { TableRow } from './TableRow';
import { SKELETON_ROW_COUNT } from '../constants/constants';
import type { TableBodyProps } from './types';

export const TableBody = ({ rows, isLoading, columnCount }: TableBodyProps) => (
  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
    {isLoading
      ? Array.from({ length: SKELETON_ROW_COUNT }).map((_, i) => (
          <SkeletonRow key={i} columns={columnCount} />
        ))
      : rows.map((row) => <TableRow key={row.id} row={row} />)}
  </tbody>
);
