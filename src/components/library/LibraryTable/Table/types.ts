import type { HeaderGroup, Row, Header, Cell } from '@tanstack/react-table';
import type { Book } from '@/types';

export type TableHeaderProps = {
  headerGroups: HeaderGroup<Book>[];
};

export type TableHeaderCellProps = {
  header: Header<Book, unknown>;
};

export type TableBodyProps = {
  rows: Row<Book>[];
  isLoading: boolean;
  columnCount: number;
};

export type TableRowProps = {
  row: Row<Book>;
};

export type TableCellProps = {
  cell: Cell<Book, unknown>;
};
