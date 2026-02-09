export type BookCoverProps = {
  src: string | null;
  alt: string;
  size?: number;
  /** Row index - rows below PRIORITY_THRESHOLD get priority loading */
  index?: number;
};
