'use client';

import { SWRConfig } from 'swr';
import type { ProvidersProps } from './types';

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        dedupingInterval: 60000, // Dedupe requests within 60s
        focusThrottleInterval: 120000, // Throttle focus revalidation
        keepPreviousData: true, // Show stale data while revalidating
      }}
    >
      {children}
    </SWRConfig>
  );
}
