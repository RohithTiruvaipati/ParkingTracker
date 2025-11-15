import React from 'react'

export default function StatCard({ label, value, delta, accent = 'emerald' }) {
  const accentRing = accent === 'indigo' ? 'ring-indigo-500/30 bg-indigo-500/15' : 'ring-emerald-500/30 bg-emerald-500/15'
  const accentText = accent === 'indigo' ? 'text-indigo-400' : 'text-emerald-400'

  return (
    <div className="card p-4 hover:shadow-lg hover:shadow-black/20 transition-shadow">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">{label}</p>
        <span className={`size-6 rounded ${accentRing} ring-1`} />
      </div>
      <div className="mt-3 flex items-end justify-between">
        <h3 className="text-2xl font-semibold text-white tracking-tight">{value}</h3>
        {delta != null && (
          <span className={`${accentText} text-xs font-medium`}>{delta >= 0 ? `+${delta}` : delta}%</span>
        )}
      </div>
    </div>
  )
}
