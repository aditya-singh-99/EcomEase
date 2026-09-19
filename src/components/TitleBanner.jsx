import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

export default function TitleBanner({ title, subtitle }) {
  return (
    <div className="relative pt-32 pb-16 bg-gradient-to-b from-[#070A12] via-[#0B0F19] to-[#0F1523] border-b border-slate-800/80 overflow-hidden text-white">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs text-slate-400 mb-4">
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5 text-cyan-400" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-500" />
          <span className="text-cyan-400 font-semibold">{title}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          {title} <span className="text-blue-400 font-extrabold">Solutions</span>
        </h1>

        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          {subtitle || "Enterprise marketplace growth, listing excellence, and dedicated account acceleration."}
        </p>
      </div>
    </div>
  );
}