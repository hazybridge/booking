import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://mrjkglijsahpopxfiozu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yamtnbGlqc2FocG9weGZpb3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5MjY3MTIsImV4cCI6MjAzNzUwMjcxMn0.6fyRRwRyx7hLqIqccbfS6UPB6wA6oPTfIE2mpdk4Wa4'
)
