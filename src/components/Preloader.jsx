import React, { useState, useEffect } from 'react';

/**
 * Preloader:
 * Clean opening animation with a white background and centered brand logo.
 * Stripped of loading text, bars, spinners, and orbit rings.
 */
export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Trigger smooth entrance animation right after mount
    const mountTimer = setTimeout(() => {
      setMounted(true);
    }, 40);

    // Trigger smooth fade/exit transition
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1300);

    // Unmount from DOM after transition completes
    const finishTimer = setTimeout(() => {
      setCompleted(true);
    }, 1900);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (completed) {
    return null;
  }

  return (
    <div
      id="site-preloader"
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white transition-opacity duration-600 ease-out select-none ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading EcomEase Business Solution"
    >
      <div
        className={`transition-all duration-700 ease-out transform ${
          isExiting
            ? 'scale-105 opacity-0'
            : mounted
            ? 'scale-100 opacity-100'
            : 'scale-95 opacity-0'
        }`}
      >
        <img
          src="/com_transparent.png"
          alt="EcomEase Business Solution"
          className="w-56 sm:w-72 md:w-80 max-w-[82vw] h-auto object-contain"
        />
      </div>
    </div>
  );
}

