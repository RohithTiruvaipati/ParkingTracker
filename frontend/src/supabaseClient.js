import { createClient } from '@supabase/supabase-js'

console.log('URL raw:', JSON.stringify(import.meta.env.VITE_SUPABASE_URL))
console.log('KEY defined:', !!import.meta.env.VITE_SUPABASE_ANON_KEY)
console.log('SUPABASE_URL from Vite:', import.meta.env.VITE_SUPABASE_URL)

const getData = async () => {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  )

  const { data, error } = await supabase.from('parking_spots').select('*')
  if (error) throw error
  return data
}

export default getData