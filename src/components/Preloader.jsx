import React, { useState, useEffect } from 'react';

/**
 * Preloader:
 * - Pure white background only (bg-white)
 * - Authentic blue EcomEase logo (com_transparent.png)
 * - Clean circular loop / loader ring
 * - Silky smooth, GPU hardware-accelerated zoom across all mobile, tablet, and desktop devices
 * - Nothing else
 */
export default function Preloader() {
  const [phase, setPhase] = useState('enter'); // 'enter' | 'active' | 'zooming' | 'completed'

  useEffect(() => {
    // 1. Enter smoothly to active state
    const enterTimer = setTimeout(() => {
      setPhase('active');
    }, 40);

    // 2. Trigger silky smooth exit zoom transition
    const exitTimer = setTimeout(() => {
      setPhase('zooming');
    }, 1400);

    // 3. Complete and unmount from DOM
    const finishTimer = setTimeout(() => {
      setPhase('completed');
    }, 2050);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (phase === 'completed') {
    return null;
  }

  const isZooming = phase === 'zooming';

  return (
    <div
      id="site-preloader"
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white transition-opacity duration-600 ease-out select-none ${
        isZooming ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading EcomEase Business Solution"
    >
      <div className="relative flex items-center justify-center">
        {/* Clean Blue Loader Loop Ring */}
        <div
          className={`absolute w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center transition-opacity duration-350 ease-out pointer-events-none ${
            isZooming ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <svg className="w-full h-full -rotate-90" viewBox="0 0 240 240">
            {/* Subtle background track */}
            <circle
              cx="120"
              cy="120"
              r="106"
              fill="none"
              stroke="#F1F5F9"
              strokeWidth="3"
            />
            {/* Smooth animated blue gradient loop */}
            <circle
              cx="120"
              cy="120"
              r="106"
              fill="none"
              stroke="url(#blueLoopGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="666"
              strokeDashoffset="200"
              className="animate-spin"
              style={{
                animationDuration: '1.35s',
                transformOrigin: 'center',
              }}
            />
            <defs>
              <linearGradient id="blueLoopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Center Blue Brand Logo */}
        <div
          className={`relative z-10 flex items-center justify-center p-4 ${
            isZooming ? 'animate-preloader-exit' : 'animate-preloader-enter'
          }`}
        >
          <img
            src="/com_transparent.png"
            alt="EcomEase Business Solution"
            className="w-40 sm:w-52 md:w-56 max-w-[70vw] h-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

