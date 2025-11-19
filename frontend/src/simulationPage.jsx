import React, { useState, useEffect } from 'react'
import { getData, updateData } from './supabaseClient'

export default function SimulationPage() {
  const initialSpots = Array.from({ length: 12 }, (_, i) => ({
    id: `A${i + 1}`,
    selected: false,
  }))

  const [spots, setSpots] = useState(initialSpots)
  const [lastClickedId, setLastClickedId] = useState(null)

  // Load current statuses from Supabase so already notavailable spots are shown
  useEffect(() => {
    const loadFromDb = async () => {
      const dataset = await getData()
      setSpots((prev) =>
        prev.map((spot) => {
          const row = dataset.find((r) => r.id === spot.id)
          
          for(let i = 0; i < dataset.length; i++){
            if(dataset[i].id === spot.id){
              spot.status = dataset[i].status;
            }
          }

          
          if (!row) return spot
          return {
            ...spot,
            status: row.status,
          }
        })
      )
    }

    loadFromDb()
  }, [])

  const toggleSpot = (id) => {
    setLastClickedId(id);
    setSpots((prev) => {
      const clickedSpot = prev.find((spot) => spot.id === id)
      const shouldSelect = !clickedSpot?.selected

      // If shouldSelect is true: make this the only selected spot.
      // If shouldSelect is false: clear all selections.
      return prev.map((spot) => ({
        ...spot,
        selected: shouldSelect ? spot.id === id : false,
      }))
    })
  };

  const updateTheTable = (id) => {
    // Find the spot we are updating
    const spot = spots.find((s) => s.id === id)
    if (!spot) return

    // Decide the new desired status based on current status
    // If currently notavailable -> make it available
    // Otherwise -> make it notavailable
    const shouldBeNotAvailable = spot.status !== 'notavailable'

    // Update Supabase
    updateData(shouldBeNotAvailable, spot.id)

    // Update local state so the UI reflects the change immediately
    setSpots((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              status: shouldBeNotAvailable ? 'notavailable' : 'available',
              selected: false,
            }
          : s
      )
    )
  };

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Parking Lot Simulation
        </h2>
        <p className="mt-1 text-sm text-gray-400">
          Click a spot to select or deselect it. This is a local simulation only.
        </p>
      </div>

      <div className="card border border-white/5 p-4 space-y-4">
        <div className="grid grid-cols-4 gap-3">
          {spots.map((spot) => (
            <button
              key={spot.id}
              type="button"
              onClick={() => toggleSpot(spot.id)}
              className={`flex h-16 items-center justify-center rounded-lg border text-sm font-medium transition-colors
                ${spot.status === 'notavailable'
                  ? 'border-red-400 bg-red-500/20 text-red-100'    // already occupied in DB
                  : spot.selected
                    ? 'border-emerald-400 bg-emerald-500/20 text-emerald-100' // currently selected in UI
                    : 'border-white/10 bg-white/5 text-gray-200 hover:border-emerald-400/60 hover:bg-emerald-500/10'}`}
                
            >
              {spot.id}
            </button>
          ))}
        </div>

        {/* update button here */}
        <button
          type="button"
          className="btn-primary mt-2 px-4 py-2 text-sm font-medium"
          onClick={() => {
            const lastSpot = spots.find((spot) => spot.id === lastClickedId);
            if (lastSpot) {
              updateTheTable(lastSpot.id);
            }
            console.log("Updated the Table");
          }}
        >
          Update
        </button>
      </div>
    </section>
  )
}
