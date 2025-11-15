import React from 'react'

const items = [
  { label: 'Dashboard', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 0A2.25 2.25 0 0 0 1.5 7.5v9a2.25 2.25 0 0 0 2.25 2.25h16.5A2.25 2.25 0 0 0 22.5 16.5v-9a2.25 2.25 0 0 0-2.25-2.25m-16.5 0V3.75A2.25 2.25 0 0 1 6 1.5h12a2.25 2.25 0 0 1 2.25 2.25V5.25M8.25 9h7.5"/></svg>
    ) },
  { label: 'Map', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 6.75 5.25-2.25 6 3 5.25-2.25v12l-5.25 2.25-6-3-5.25 2.25v-12Z"/></svg>
    ) },
  { label: 'Analytics', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7.5 15V9.75M12 15V6.75M16.5 15v-4.5"/></svg>
    ) },
  { label: 'Device Status', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 6.75h4.5m-7.5 10.5h10.5M5.25 3.75h13.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5Z"/></svg>
    ) },
  { label: 'Settings', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.938a1.5 1.5 0 0 1 2.812 0l.284.852a1.5 1.5 0 0 0 1.004.96l.876.263a1.5 1.5 0 0 0 1.37-.3l.686-.548a1.5 1.5 0 0 1 2.12.21l.047.06a1.5 1.5 0 0 1-.21 2.12l-.548.686a1.5 1.5 0 0 0-.3 1.37l.263.876a1.5 1.5 0 0 0 .96 1.004l.852.284a1.5 1.5 0 0 1 0 2.812l-.852.284a1.5 1.5 0 0 0-.96 1.004l-.263.876a1.5 1.5 0 0 0 .3 1.37l.548.686a1.5 1.5 0 0 1-.21 2.12l-.06.047a1.5 1.5 0 0 1-2.12-.21l-.686-.548a1.5 1.5 0 0 0-1.37-.3l-.876.263a1.5 1.5 0 0 0-1.004.96l-.284.852a1.5 1.5 0 0 1-2.812 0l-.284-.852a1.5 1.5 0 0 0-1.004-.96l-.876-.263a1.5 1.5 0 0 0-1.37.3l-.686.548a1.5 1.5 0 0 1-2.12-.21l-.047-.06a1.5 1.5 0 0 1 .21-2.12l.548-.686a1.5 1.5 0 0 0 .3-1.37l-.263-.876a1.5 1.5 0 0 0-.96-1.004l-.852-.284a1.5 1.5 0 0 1 0-2.812l.852-.284a1.5 1.5 0 0 0 .96-1.004l.263-.876a1.5 1.5 0 0 0-.3-1.37l-.548-.686a1.5 1.5 0 0 1 .21-2.12l.06-.047Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
    ) },
]

export default function Sidebar({ open, onClose }) {
  return (
    <div>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`fixed z-50 inset-y-0 left-0 w-64 transform transition-transform duration-200 lg:translate-x-0 lg:static lg:inset-auto
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex h-full flex-col border-r border-white/5 bg-[#0B0F19]/80 backdrop-blur-xl">
          <div className="flex h-14 items-center gap-2 px-4 border-b border-white/5">
            <div className="size-6 rounded bg-emerald-500/20 ring-1 ring-emerald-500/30" />
            <span className="text-sm font-semibold text-white">ParkSense</span>
          </div>

          <nav className="flex-1 space-y-1 p-3">
            {items.map((item) => (
              <button key={item.label} className="group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors
                ring-1 ring-inset ring-white/5 bg-white/0 hover:bg-white/5">
                <span className="text-gray-400 group-hover:text-white transition-colors">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto p-3">
            <div className="card p-3">
              <p className="text-xs text-gray-400">System status</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-gray-300">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
