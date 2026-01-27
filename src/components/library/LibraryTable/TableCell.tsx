import { flexRender } from '@tanstack/react-table';
import type { TableCellProps } from './types';

export const TableCell = ({ cell }: TableCellProps) => (
  <td className="px-4 py-3 text-zinc-900 dark:text-zinc-100">
    {flexRender(cell.column.columnDef.cell, cell.getContext())}
  </td>
);
