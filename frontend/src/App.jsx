import React from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import StatCard from './components/StatCard.jsx'
import MapPlaceholder from './components/MapPlaceholder.jsx'

export default function App() {
  const data = {
    total: 240,
    occupied: 156,
    available: 84,
  }

  return (
    <MainLayout>
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Live Parking Status</h2>
          <p className="mt-1 text-sm text-gray-400">Monitoring real-time parking availability</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard label="Total Spots" value={data.total} delta={0} accent="indigo" />
          <StatCard label="Occupied Spots" value={data.occupied} delta={+3} accent="emerald" />
          <StatCard label="Available Spots" value={data.available} delta={-2} accent="indigo" />
        </div>

        <div className="mt-2">
          <MapPlaceholder />
        </div>
      </section>
    </MainLayout>
  )
}
