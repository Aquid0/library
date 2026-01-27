import { createColumnHelper } from '@tanstack/react-table';
import type { Book } from '@/types';

const columnHelper = createColumnHelper<Book>();

export const columns = [
  columnHelper.accessor('title', {
    header: 'Title',
    cell: (info) => info.getValue(),
    size: 300,
  }),
  columnHelper.accessor('author', {
    header: 'Author',
    cell: (info) => info.getValue() ?? '—',
    size: 220,
  }),
  columnHelper.accessor('progress', {
    header: 'Progress',
    cell: (info) => {
      const progress = info.getValue();
      const total = info.row.original.total_pages;
      return `${progress} / ${total}`;
    },
    size: 150,
  }),
  columnHelper.accessor('score', {
    header: 'Score',
    cell: (info) => {
      const score = info.getValue();
      return score > 0 ? score : '—';
    },
    size: 100,
  }),
];
