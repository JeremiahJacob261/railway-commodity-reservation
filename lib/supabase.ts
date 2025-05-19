import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create a single supabase client for the browser
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Create a server-side client (for server components and API routes)
export const createServerSupabaseClient = () => {
  return createClient(
    "https://pchlsxfnhtcrhcyulseg.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjaGxzeGZuaHRjcmhjeXVsc2VnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzQ4NzY1MSwiZXhwIjoyMDYzMDYzNjUxfQ.gvCEQmgQwmvB26WweTSkFsKwnjDoB7txyFBqBmmlNAg",
    {
      auth: {
        persistSession: false,
      },
    },
  )
}
