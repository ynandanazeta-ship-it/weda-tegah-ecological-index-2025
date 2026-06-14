"use client"
import { useState } from "react"

export default function WedaDashboard() {
  // State untuk kontekstual overlay (IWIP Boundary) - tetap dipertahankan jika nanti dibutuhkan
  const [overlays, setOverlays] = useState({ 
    iwipBoundary: true 
  })

  return (
    <div className="fixed inset-0 flex flex-col h-screen w-screen bg-[#020617] text-slate-100 font-sans overflow-hidden z-50">
      
      {/* HEADER UTAMA */}
      <header className="flex items-center justify-between px-6 py-4 bg-slate-900/60 border-b border-slate-800/80 backdrop-blur-md z-20 shrink-0">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-xl font-bold">🍃</span>
            <h1 className="text-lg font-bold tracking-tight text-white">Weda Ecological Monitoring System (RSEI Analysis)</h1>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">Kelompok 4 Kelas C Sistem Informasi Perencanaan — 2025</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/60 border border-slate-700/50 rounded-lg hover:bg-slate-700 transition">Data Export</button>
          <button className="px-3 py-1.5 text-xs font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition">Report PDF</button>
        </div>
      </header>

      <div className="flex flex-1 w-full min-h-0 relative overflow-hidden">
        
        {/* PETA TENGAH-KANAN: SEKARANG MENJADI FULL WIDTH */}
        <main className="flex-1 h-full bg-slate-950 relative">
          <iframe 
            src="/peta-weda/Weda Tengah Ecological Index 2025.html" 
            className="w-full h-full border-none"
            title="Weda Map"
            allow="geolocation"
          />
        </main>

      </div>
    </div>
  )
}