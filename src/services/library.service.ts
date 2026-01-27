import { supabase } from '@/lib/supabase';
import type { Book, EntryStatus } from '@/types';

export const libraryService = {
  async getAll(): Promise<Book[]> {
    const { data, error } = await supabase
      .from('library')
      .select('*')
      .order('title', { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    console.log('Fetched books:', data);

    return data ?? [];
  },

  async getByStatus(status: EntryStatus): Promise<Book[]> {
    const { data, error } = await supabase
      .from('library')
      .select('*')
      .eq('status', status)
      .order('title', { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    return data ?? [];
  },
};
