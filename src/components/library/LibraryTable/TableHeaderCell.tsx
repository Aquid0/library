import { flexRender } from '@tanstack/react-table';
import type { TableHeaderCellProps } from './types';

export const TableHeaderCell = ({ header }: TableHeaderCellProps) => (
  <th
    style={{ width: header.getSize() }}
    className="px-4 py-3 text-left font-medium text-zinc-600 dark:text-zinc-400"
  >
    {header.isPlaceholder
      ? null
      : flexRender(header.column.columnDef.header, header.getContext())}
  </th>
);
