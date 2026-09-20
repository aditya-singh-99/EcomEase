import { useState, useRef, useCallback } from 'react';

/**
 * useTilt3D: Hook for hardware-accelerated 3D card tilt & specular glare.
 * Inspired by Apple VisionOS & Stripe Keynote cards.
 */
export function useTilt3D(maxAngle = 7, scale = 1.015) {
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 400ms cubic-bezier(0.23, 1, 0.32, 1)'
  });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Normalised between -1 and 1
    const normX = (x - 0.5) * 2;
    const normY = (y - 0.5) * 2;

    const rotX = -normY * maxAngle;
    const rotY = normX * maxAngle;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`,
      transition: 'transform 80ms ease-out'
    });

    setGlare({
      x: x * 100,
      y: y * 100,
      opacity: 0.18
    });
  }, [maxAngle, scale]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 500ms cubic-bezier(0.23, 1, 0.32, 1)'
    });
    setGlare({ x: 50, y: 50, opacity: 0 });
  }, []);

  return { ref, style, glare, handleMouseMove, handleMouseLeave };
}
