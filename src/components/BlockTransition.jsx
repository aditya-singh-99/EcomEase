import React from 'react';

/**
 * High-end architectural block transition component.
 * Inspired by OnePlus and Linear flagship launch experiences:
 * - Horizon curved atmospheric glow with animated laser sweep
 * - Traveling photon beam across precision tracks
 * - Zero tacky cartoon SVG waves, purely premium light and motion craft.
 */
export default function BlockTransition({ variant = 'horizon', className = '' }) {
  if (variant === 'horizon') {
    return (
      <div className={`relative w-full overflow-hidden pointer-events-none select-none py-10 ${className}`}>
        {/* Ambient atmospheric glow expanding behind the seam */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-32 bg-blue-600/15 rounded-full filter blur-3xl animate-pulse-slow"></div>
        
        {/* Subtle curved atmospheric horizon SVG seam */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative h-12 flex items-center justify-center">
            {/* Base subtle track */}
            <svg 
              className="w-full h-12 text-slate-800/80" 
              viewBox="0 0 1200 48" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <path 
                d="M0 24 Q 600 0 1200 24" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeOpacity="0.4"
              />
              <path 
                d="M100 24 Q 600 4 1100 24" 
                stroke="url(#horizonGrad)" 
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient id="horizonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                  <stop offset="35%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
                  <stop offset="65%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Traveling Laser Photon along the horizon */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute top-1/2 -translate-y-1/2 w-40 h-8 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm animate-beam-sweep"></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-12 h-1 bg-white rounded-full shadow-[0_0_16px_rgba(255,255,255,1)] animate-beam-sweep"></div>
              </div>
            </div>

            {/* Central focal node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_#3B82F6] ring-4 ring-blue-500/20"></div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'beam') {
    return (
      <div className={`relative w-full overflow-hidden pointer-events-none select-none py-8 ${className}`}>
        {/* Diffuse ambient glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-20 bg-blue-500/10 rounded-full filter blur-2xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent">
            {/* Animated Laser Pulse traveling along the hairline */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="h-full w-48 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-80 animate-beam-sweep"></div>
            </div>

            {/* Central Diamond Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1 bg-[#090D16]">
              <span className="w-1.5 h-1.5 rotate-45 bg-blue-500 shadow-[0_0_8px_#3B82F6]"></span>
              <span className="w-1 h-1 rounded-full bg-white/40"></span>
              <span className="w-1.5 h-1.5 rotate-45 bg-blue-500 shadow-[0_0_8px_#3B82F6]"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default minimal high-precision hairline
  return (
    <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 ${className}`}>
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400/80 shadow-[0_0_6px_#3B82F6]"></div>
      </div>
    </div>
  );
}
