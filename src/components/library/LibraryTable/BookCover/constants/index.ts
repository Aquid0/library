// Tiny 1x1 pixel blur placeholder (gray)
export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwYACgQC/hZ+CAAAAABJRU5ErkJggg==';

// Number of rows to prioritize for eager loading (above the fold)
export const PRIORITY_THRESHOLD = 15;

export const getOptimizedCoverUrl = (url: string): string => {
  // Open Library: swap -L (large) or -M (medium) for -S (small ~40px)
  if (url.includes('covers.openlibrary.org')) {
    return url.replace(/-[LM]\.jpg$/, '-S.jpg');
  }
  return url;
};
