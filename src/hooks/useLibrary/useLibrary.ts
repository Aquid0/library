import { useMemo } from 'react';
import useSWR from 'swr';
import { libraryService } from '@/services/library.service';
import type { Book } from '@/types';
import type { BooksByStatus, UseLibraryReturn } from './types';

export const useLibrary = (): UseLibraryReturn => {
  const { data, error, isLoading, mutate } = useSWR<Book[]>(
    'library',
    () => libraryService.getAll()
  );

  const books = data ?? [];

  const booksByStatus = useMemo<BooksByStatus>(() => ({
    CURRENT: books.filter(b => b.status === 'CURRENT'),
    PLANNING: books.filter(b => b.status === 'PLANNING'),
    COMPLETED: books.filter(b => b.status === 'COMPLETED'),
    PAUSED: books.filter(b => b.status === 'PAUSED'),
    DROPPED: books.filter(b => b.status === 'DROPPED'),
  }), [books]);

  return {
    books,
    booksByStatus,
    isLoading,
    isError: !!error,
    error,
    mutate,
  };
};
