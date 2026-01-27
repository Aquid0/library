'use client';

import { SWRConfig } from 'swr';
import type { ProvidersProps } from './types';

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}
