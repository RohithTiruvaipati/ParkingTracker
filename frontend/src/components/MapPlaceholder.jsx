import React from 'react'

export default function MapPlaceholder() {
  return (
    <div className="card relative flex h-[420px] w-full items-center justify-center border border-white/5 p-4 shadow-soft sm:h-[500px] lg:h-[540px]">
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5" />
      <div className="absolute inset-0 rounded-xl bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
      <span className="relative z-10 rounded-md bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-white/10">
        MAP VIEW PLACEHOLDER
      </span>
    </div>
  )
}
