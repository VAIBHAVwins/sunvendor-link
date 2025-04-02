
import { createClient } from '@supabase/supabase-js';

// Replace with your own Supabase URL and anon key in a production environment
// Consider using environment variables for these values
const supabaseUrl = '';
const supabaseAnonKey = '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
