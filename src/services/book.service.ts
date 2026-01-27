import { supabase } from "@/lib/supabase";

export const BookService = {
    async getLibrary() { 
        const { data, error } = await supabase
            .from('books')
            .select('*')
            .order('title', { ascending: true });

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }
}