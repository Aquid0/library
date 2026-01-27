import { TableHeaderCell } from './TableHeaderCell';
import type { TableHeaderProps } from './types';

export const TableHeader = ({ headerGroups }: TableHeaderProps) => (
  <thead className="bg-zinc-50 dark:bg-zinc-900">
    {headerGroups.map((headerGroup) => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <TableHeaderCell key={header.id} header={header} />
        ))}
      </tr>
    ))}
  </thead>
);
