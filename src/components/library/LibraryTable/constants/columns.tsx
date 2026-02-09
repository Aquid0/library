import { createColumnHelper } from '@tanstack/react-table';
import type { Book } from '@/types';
import { BookCover } from '../BookCover';
import { COLUMN_SIZES } from './constants';

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
    size: COLUMN_SIZES.title,
  }),
  columnHelper.accessor('author', {
    header: 'Author',
    cell: (info) => info.getValue() ?? '—',
    size: COLUMN_SIZES.author,
  }),
  columnHelper.accessor('progress', {
    header: 'Progress',
    cell: (info) => {
      const progress = info.getValue();
      const total = info.row.original.total_pages;
      return `${progress} / ${total}`;
    },
    size: COLUMN_SIZES.progress,
  }),
  columnHelper.accessor('score', {
    header: 'Score',
    cell: (info) => {
      const score = info.getValue();
      return score > 0 ? score : '—';
    },
    size: COLUMN_SIZES.score,
  }),
];
