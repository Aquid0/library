'use client';

import { useLibrary } from '@/hooks/useLibrary';
import { LibraryTable } from '@/components/library';

const Home = () => {
  const { books, isLoading, isError } = useLibrary();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-8 dark:bg-zinc-950">
      <main className="w-full max-w-4xl">
        <h1 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Library
        </h1>

        {isLoading && (
          <p className="text-zinc-500 dark:text-zinc-400">Loading...</p>
        )}

        {isError && (
          <p className="text-red-500">Failed to load library data.</p>
        )}

        {!isLoading && !isError && <LibraryTable data={books} />}
      </main>
    </div>
  );
};

export default Home;

