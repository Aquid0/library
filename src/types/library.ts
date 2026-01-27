export type EntryStatus = 'CURRENT' | 'PLANNING' | 'COMPLETED' | 'DROPPED' | 'PAUSED';

export type Book = {
  id: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  title: string;
  author: string | null;
  isbn: string | null;
  cover_url: string | null;
  status: EntryStatus;
  progress: number;
  total_pages: number;
  score: number;
  notes: string | null;
  is_private: boolean;
};
