import React, { useState, useEffect } from 'react';

/**
 * SitePreloader:
 * Displays a cinematic loading screen when visiting the direct link.
 * Features:
 * - Center EcomEase Logo
 * - Glowing circular orbit loading animation around the logo
 * - Once loaded, the logo cinematically zooms in and smoothly opens the website
 */
export default function Preloader() {
  const [loadingState, setLoadingState] = useState('loading'); // 'loading' | 'zooming' | 'completed'

  useEffect(() => {
    // Ensure smooth minimum display so the animation is visually appreciated
    const minLoadTimer = setTimeout(() => {
      // Trigger the cinematic zoom-in transition
      setLoadingState('zooming');
      
      // After zoom completes (600ms), transition to completed and remove from DOM
      const completeTimer = setTimeout(() => {
        setLoadingState('completed');
      }, 700);

      return () => clearTimeout(completeTimer);
    }, 1400);

    return () => clearTimeout(minLoadTimer);
  }, []);

  if (loadingState === 'completed') {
    return null;
  }

  const isZooming = loadingState === 'zooming';

  return (
    <div
      id="site-preloader"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070A12] transition-opacity duration-700 ease-out select-none ${
        isZooming ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading EcomEase Business Solution"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.12),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.08),transparent_50%)] pointer-events-none" />

      {/* Center animation container */}
      <div className="relative flex items-center justify-center">
        {/* Outer Pulsing Aura Ring */}
        <div
          className={`absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-cyan-500/20 bg-cyan-500/5 transition-all duration-700 ease-out ${
            isZooming ? 'scale-[2.8] opacity-0' : 'animate-ping opacity-30'
          }`}
          style={{ animationDuration: '3s' }}
        />

        {/* Circular Loading SVG Spinner Rings */}
        <div
          className={`relative w-36 h-36 sm:w-48 sm:h-48 flex items-center justify-center transition-all duration-500 ease-out ${
            isZooming ? 'scale-150 opacity-0' : 'opacity-100'
          }`}
        >
          {/* Static track circle */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="72"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="3"
            />
            {/* Smooth animated gradient stroke */}
            <circle
              cx="80"
              cy="80"
              r="72"
              fill="none"
              stroke="url(#preloaderGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="452"
              strokeDashoffset="120"
              className="animate-spin"
              style={{
                animationDuration: '1.8s',
                transformOrigin: 'center',
              }}
            />
            {/* Orbiting accent glow dot */}
            <defs>
              <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>

          {/* Secondary counter-rotating dashed ring */}
          <div
            className="absolute inset-1 rounded-full border border-dashed border-cyan-400/30 animate-spin"
            style={{ animationDuration: '8s', animationDirection: 'reverse' }}
          />

          {/* Center Brand Logo with cinematic zoom-in effect */}
          <div
            className={`relative z-10 w-24 sm:w-32 flex items-center justify-center p-2 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-700 ${
              isZooming
                ? 'scale-[2.6] opacity-0 blur-sm -translate-y-2'
                : 'scale-100 opacity-100'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          >
            <img
              src="/com_white.png"
              alt="EcomEase Logo"
              className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            />
          </div>
        </div>
      </div>

      {/* Loading caption & glowing pulse bar */}
      <div
        className={`mt-8 flex flex-col items-center gap-2 transition-all duration-500 ${
          isZooming ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-300/90 font-mono">
            EcomEase • Enterprise eCommerce
          </span>
        </div>
        <div className="w-36 h-1 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-full animate-marquee"
            style={{ width: '60%' }}
          />
        </div>
      </div>
    </div>
  );
}
