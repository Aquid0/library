import type { Book } from '@/types';

export type LibraryTableProps = {
  data: Book[];
  isLoading?: boolean;
  showHeader?: boolean;
};
