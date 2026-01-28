import { createColumnHelper } from '@tanstack/react-table';
import type { Book } from '@/types';
import { BookCover } from '../BookCover';

const columnHelper = createColumnHelper<Book>();

export const columns = [
  columnHelper.accessor('title', {
    header: 'Title',
    cell: (info) => {
      const title = info.getValue();
      const coverUrl = info.row.original.cover_url;
      const rowIndex = info.row.index;

      return (
        <div className="flex items-center gap-3">
          <BookCover src={coverUrl} alt={title} size={32} index={rowIndex} />
          <span className="truncate">{title}</span>
        </div>
      );
    },
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
