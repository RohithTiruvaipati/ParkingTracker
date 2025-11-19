import React, { useEffect, useState } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import StatCard from './components/StatCard.jsx'
import MapPlaceholder from './components/MapPlaceholder.jsx'
import SimulationPage from './simulationPage.jsx'
//import { parkingSpotsMock, parkingSpotsAlternativeMock } from './data/parkingSpots'
import { calculateParkingStats } from './utils/calculateParkingStats'
import { getData, updateData } from './supabaseClient'

export default function App() {
  const [parkingSpots, setParkingSpots] = useState([])
  const [stats, setStats] = useState({ total: 0, occupied: 0, available: 0 })
  const [loading, setLoading] = useState(true)
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [activeView, setActiveView] = useState('Dashboard')

  useEffect(() => {
    let isMounted = true

    setLoading(true)

    const timer = setTimeout(async () => {
      if (!isMounted) return

      const dataset = await getData()
      if (!isMounted) return
      setParkingSpots(dataset)

      let occupiedSpots = 0
      for (let i = 0; i < dataset.length; i++) {
        if (dataset[i].status === 'notavailable') {
          occupiedSpots++
        }
      }

      const totalSpots = dataset.length
      const availableSpots = totalSpots - occupiedSpots

      setStats({
        total: totalSpots,
        occupied: occupiedSpots,
        available: availableSpots,
      })

      setLoading(false)
    }, 400)

    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [scenarioIndex])

  const handleRefresh = () => {
    setScenarioIndex((prev) => (prev === 0 ? 1 : 0))
  }

  const renderContent = () => {
    if (activeView === 'Simulation') {
      return <SimulationPage />
    }

    

    return (
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Live Parking Status</h2>
            <p className="mt-1 text-sm text-gray-400">Monitoring real-time parking availability</p>
          </div>
          <button
            type="button"
            onClick={handleRefresh}
            className="btn-primary whitespace-nowrap px-3 py-1.5 text-xs font-medium"
          >
            {loading ? 'Loading…' : 'Refresh Mock Data'}
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard label="Total Spots" value={stats.total} delta={0} accent="indigo" />
          <StatCard label="Occupied Spots" value={stats.occupied} delta={+3} accent="emerald" />
          <StatCard label="Available Spots" value={stats.available} delta={-2} accent="indigo" />
        </div>

        <div className="mt-2 space-y-4">
          <MapPlaceholder />

          <div className="card border border-white/5 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">Parking Spots</h3>
              <span className="text-xs text-gray-400">
                {loading ? 'Loading spots…' : `${parkingSpots.length} spots loaded`}
              </span>
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {parkingSpots.map((spot) => (
                <div key={spot.id} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <span className="text-sm font-medium text-white">{spot.id}</span>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                      spot.status === 'available'
                        ? 'bg-emerald-500/15 text-emerald-300'
                        : 'bg-red-500/15 text-red-300'
                    }`}
                  >
                    <span
                      className={`mr-1 inline-block h-1.5 w-1.5 rounded-full ${
                        spot.status === 'available' ? 'bg-emerald-400' : 'bg-red-400'
                      }`}
                    />
                    {spot.status === 'available' ? 'Available' : 'Occupied'}
                  </span>
                </div>
              ))}

              {!loading && parkingSpots.length === 0 && (
                <p className="text-xs text-gray-400">No parking spots available in this view.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <MainLayout activeItem={activeView} onSelectItem={setActiveView}>
      {renderContent()}
    </MainLayout>
  )
}
