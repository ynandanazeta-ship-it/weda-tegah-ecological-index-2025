"use client"
import Link from "next/link"

export default function CosmicHomescreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-[#020617] text-white p-6 relative overflow-hidden font-sans">
      
      {/* Efek Cahaya Kosmik di Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Konten Utama */}
      <div className="max-w-3xl w-full text-center flex flex-col items-center gap-6 z-10 animate-fade-in">
        
        {/* Badge Atas - REVISI NAMA KELOMPOK */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Kelompok 4 Kelas C Sistem Informasi Perencanaan
        </div>

        {/* Visual Globe Mini + Peta Maluku Utara & Koordinat Penanda */}
        <div className="relative my-4 flex items-center justify-center w-48 h-48 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-sm shadow-2xl shadow-emerald-500/5">
          <div className="absolute inset-4 rounded-full border border-dashed border-slate-700/60 animate-spin [animation-duration:20s]" />
          <div className="absolute inset-10 rounded-full border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-transparent" />
          
          {/* Wadah Peta di Tengah Orbit */}
          <div className="w-24 h-24 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden shadow-lg z-10 relative">
            {/* SVG Peta Mini Maluku Utara (Representasi Geografis) */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full opacity-60 p-2 text-emerald-500 fill-current"
            >
              <path d="M45,20 Q50,15 52,25 T60,35 T55,55 T48,70 T40,60 T35,45 Z" />
              <path d="M62,45 Q68,40 70,50 T65,65 T58,60 Z" />
            </svg>

            {/* Titik Merah Penanda Lokasi Weda Bay (Berdasarkan Posisi Koordinat di dalam Peta) */}
            <span className="absolute top-[48%] left-[52%] w-2.5 h-2.5 bg-red-500 rounded-full z-20 shadow-[0_0_8px_#ef4444]">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
            </span>
          </div>

          <span className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-emerald-400 rounded-full opacity-70" />
        </div>

        {/* Judul Utama */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Weda <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Eco-Spatial</span> Center
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Monitoring ecological impacts of industrial expansion in Weda Bay through Remote Sensing Ecological Index (RSEI) analysis.
          </p>
        </div>

        {/* Baris Indikator Ringkasan Data - REVISI 2 KOLOM */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md mt-2">
          <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md p-3.5 rounded-xl text-center">
            <span className="text-sm md:text-base font-bold text-white block">7,167</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block mt-0.5">Ha Deforested</span>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md p-3.5 rounded-xl text-center">
            <span className="text-sm md:text-base font-bold text-emerald-400 block">2025</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block mt-0.5">Analysis Period</span>
          </div>
        </div>

        {/* Tombol yang Menyambungkan ke Dashboard Peta */}
        <div className="mt-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-xl shadow-emerald-500/10 hover:from-emerald-500 hover:to-green-600 transform hover:-translate-y-0.5 transition duration-200"
          >
            Explore Dashboard →
          </Link>
        </div>

      </div>

      <div className="absolute bottom-4 text-[10px] text-slate-600 tracking-wide uppercase">
        Utilizing Landsat 8/9 and Sentinel-2 Imagery for Comprehensive Environmental Assessment
      </div>
    </div>
  )
}