import { createClient } from 'https://esm.sh/@supabase/supabase-js';
import { Database } from '../../lib/database.types.ts';

const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
const supabaseAnonKey = Deno.env.get('ANON_KEY') ?? '';

export const supabase = createClient<Database>(
	supabaseUrl,
	supabaseAnonKey,
);
