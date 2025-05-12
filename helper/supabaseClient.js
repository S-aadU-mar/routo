import {createClient} from '@supabase/supabase-js';

const supabaseUrl = "https://xtwroablytgdtzxpudus.supabase.co";
const supabaseAnon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0d3JvYWJseXRnZHR6eHB1ZHVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NTEzNDAsImV4cCI6MjA2MTUyNzM0MH0.kIs0P4hRaMu9Rzr-Me15lsa40EMokMuf8tfCHnKadgU";
const supabase = createClient(supabaseUrl, supabaseAnon);

export default supabase;