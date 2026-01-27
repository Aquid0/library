'use client';

import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { columns } from '../constants/columns';
import { TableHeader, TableBody } from '../Table';
import type { LibraryTableProps } from './types';

export const LibraryTable = ({ data, isLoading = false, showHeader = true }: LibraryTableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
      <table className="w-full table-fixed text-sm">
        {showHeader && <TableHeader headerGroups={table.getHeaderGroups()} />}
        <TableBody
          rows={table.getRowModel().rows}
          isLoading={isLoading}
          columnCount={columns.length}
        />
      </table>
    </div>
  );
};
