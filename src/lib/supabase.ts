
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://udlhczigorxtohsiqavk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkbGhjemlnb3J4dG9oc2lxYXZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MzIwNjYsImV4cCI6MjA1ODUwODA2Nn0.ljJewlLW7T99yQ6HjHNtj6HPcgbYRRPfDUAje6LlSJE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
