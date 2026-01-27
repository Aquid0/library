'use client';

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { columns } from './columns';
import { SkeletonRow } from '@/components/ui/Skeleton';
import type { LibraryTableProps } from './types';

const SKELETON_ROW_COUNT = 10;

export const LibraryTable = ({ data, isLoading = false }: LibraryTableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
      <table className="w-full table-fixed text-sm">
        <thead className="bg-zinc-50 dark:bg-zinc-900">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ width: header.getSize() }}
                  className="px-4 py-3 text-left font-medium text-zinc-600 dark:text-zinc-400"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {isLoading
            ? Array.from({ length: SKELETON_ROW_COUNT }).map((_, i) => (
                <SkeletonRow key={i} columns={columns.length} />
              ))
            : table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-3 text-zinc-900 dark:text-zinc-100"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};
