import { createClient } from '@supabase/supabase-js'


// Checking if everything is working DELETE IF YOU ARE ALL SET BRO THEY CANT SEE THIS
console.log('URL raw:', JSON.stringify(import.meta.env.VITE_SUPABASE_URL))
console.log('KEY defined:', !!import.meta.env.VITE_SUPABASE_ANON_KEY)
console.log('SUPABASE_URL from Vite:', import.meta.env.VITE_SUPABASE_URL)

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)


const getData = async () => {

  const { data, error } = await supabase.from('parking_spots').select('*')
  if (error) throw error
  return data
}


const updateData = async (parkingLotSelect, spotsID) => {
    console.log('updateData called with:', { parkingLotSelect, spotsID })

    if (parkingLotSelect === true) {
        const { error, data } = await supabase.from('parking_spots')
            .update({ status: 'notavailable' })
            .eq('id', spotsID)
            .select()
        if (error) {
            console.error('Error updating to notavailable:', error)
        } else {
            console.log('Updated to notavailable:', data)
        }
    } else {
        const { error, data } = await supabase.from('parking_spots')
            .update({ status: 'available' })
            .eq('id', spotsID)
            .select()
        if (error) {
            console.error('Error updating to available:', error)
        } else {
            console.log('Updated to available:', data)
        }
    }
}

export { getData, updateData }