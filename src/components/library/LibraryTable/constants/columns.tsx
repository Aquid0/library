import { createColumnHelper } from '@tanstack/react-table';
import type { Book } from '@/types';

const columnHelper = createColumnHelper<Book>();

export const columns = [
  columnHelper.accessor('title', {
    header: 'Title',
    cell: (info) => info.getValue(),
    size: 250,
  }),
  columnHelper.accessor('author', {
    header: 'Author',
    cell: (info) => info.getValue() ?? '—',
    size: 180,
  }),
  columnHelper.accessor('progress', {
    header: 'Progress',
    cell: (info) => {
      const progress = info.getValue();
      const total = info.row.original.total_pages;
      return `${progress} / ${total}`;
    },
    size: 120,
  }),
  columnHelper.accessor('score', {
    header: 'Score',
    cell: (info) => {
      const score = info.getValue();
      return score > 0 ? score : '—';
    },
    size: 100,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => info.getValue(),
    size: 120,
  }),
];
