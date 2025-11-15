import React, { useState } from 'react'
import TopNav from '../components/TopNav.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <TopNav onMenuClick={() => setSidebarOpen(true)} />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-0 px-4 sm:px-6 lg:grid-cols-[16rem_1fr] lg:px-8">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="lg:ml-0 lg:pl-6">
          <div className="py-6 lg:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
