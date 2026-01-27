import type { Book, EntryStatus } from '@/types';

export type BooksByStatus = Record<EntryStatus, Book[]>;

export type UseLibraryReturn = {
  books: Book[];
  booksByStatus: BooksByStatus;
  isLoading: boolean;
  isError: boolean;
  error: Error | undefined;
  mutate: () => void;
};
