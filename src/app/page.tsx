'use client';

import { useLibrary } from '@/hooks/useLibrary';
import { LibraryTable } from '@/components/library';

const Home = () => {
  const { books, isLoading, isError } = useLibrary();

  return (
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-zinc-950">
      <main className="mx-auto w-full max-w-4xl">
        <h1 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Library
        </h1>

        {isError && (
          <p className="text-red-500">Failed to load library data.</p>
        )}

        {!isError && <LibraryTable data={books} isLoading={isLoading} />}
      </main>
    </div>
  );
};

export default Home;

