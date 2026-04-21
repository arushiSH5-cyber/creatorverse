import { createClient } from '@supabase/supabase-js'

const URL = 'https://eliycxyuveywfrxpasne.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsaXljeHl1dmV5d2ZyeHBhc25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3OTg3MzQsImV4cCI6MjA5MjM3NDczNH0.eqpsWoxAUWOEnuKdA5AYbRKQcJUSRfZlo40Xvp72uHg'

export const supabase = createClient(URL, API_KEY)