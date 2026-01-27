import useSWR from 'swr';
import { libraryService } from '@/services/library.service';
import type { Book } from '@/types';

export const useLibrary = () => {
  const { data, error, isLoading, mutate } = useSWR<Book[]>(
    'library',
    () => libraryService.getAll()
  );

  return {
    books: data ?? [],
    isLoading,
    isError: !!error,
    error,
    mutate,
  };
}
