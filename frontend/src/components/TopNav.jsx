import React from 'react'

export default function TopNav({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#0B0F19]/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <button
            className="btn-icon h-9 w-9 lg:hidden"
            aria-label="Open Menu"
            onClick={onMenuClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-gray-300">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
          <span className="text-sm font-medium text-emerald-400">ParkSense</span>
          <span className="text-sm text-gray-500">•</span>
          <h1 className="text-base font-semibold text-white">Dashboard</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-icon h-9 w-9" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-gray-300"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"/></svg>
          </button>
          <button className="btn-icon h-9 w-9" aria-label="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-gray-300"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9a6 6 0 1 0-12 0v.75a8.967 8.967 0 0 1-2.311 6.022c1.733.64 3.56 1.085 5.455 1.31m5.713 0A12.317 12.317 0 0 1 12 17.25c-1.3 0-2.563-.102-3.771-.293m6.628.125a3 3 0 1 1-5.114 0"/></svg>
          </button>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="size-8 rounded-lg bg-white/5 ring-1 ring-white/10" />
        </div>
      </div>
    </header>
  )
}
