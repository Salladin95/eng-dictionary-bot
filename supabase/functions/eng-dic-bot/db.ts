import { Database } from './types/supabase.ts';
import { config } from './config.ts';
import { createClient } from './deps.ts';

const supabase = createClient<Database>(
	config.supabaseUrl ?? '',
	config.anonKey ?? '',
);
export default supabase;
