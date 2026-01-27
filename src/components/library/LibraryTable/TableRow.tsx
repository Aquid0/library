import { TableCell } from './TableCell';
import type { TableRowProps } from './types';

export const TableRow = ({ row }: TableRowProps) => (
  <tr className="bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900">
    {row.getVisibleCells().map((cell) => (
      <TableCell key={cell.id} cell={cell} />
    ))}
  </tr>
);
