'use client';

import { useLibrary } from '@/hooks/useLibrary';
import { LibraryTable } from '@/components/library';

const Home = () => {
  const { books, isLoading, isError } = useLibrary();

  return (
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-zinc-950">
      <main className="mx-auto w-full max-w-6xl gap-5 flex flex-col">
        <div className="w-full rounded-lg bg-zinc-100 p-4 dark:bg-zinc-900">
          <div className="flex items-start gap-4">
            {/* Profile Picture */}
            <div className="h-40 w-40 shrink-0 overflow-hidden rounded-lg bg-zinc-300 dark:bg-zinc-700">
              <div className="flex h-full w-full items-center justify-center text-5xl text-zinc-500 dark:text-zinc-400">
                ?
              </div>
            </div>
            {/* User Info */}
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                Username
              </h2>
              <p className="line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
                No bio yet. Tell us about yourself and your reading journey.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5"> 
          <div className="sticky top-8 h-[600px] w-[280px] shrink-0 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-900">
            {/* Filters can go here */}
          </div>
          <div className="flex-1">
            {isError && (
              <p className="text-red-500">Failed to load library data.</p>
            )}

            {!isError && <LibraryTable data={books} isLoading={isLoading} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

