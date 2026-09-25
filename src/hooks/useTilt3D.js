import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * useTilt3D: Hook for hardware-accelerated 3D card tilt & specular glare.
 * Inspired by Apple VisionOS & Stripe Keynote cards.
 * Automatically disabled on touch devices (mobile & tablet) for native scrolling and zero jitter.
 */
export function useTilt3D(maxAngle = 7, scale = 1.015) {
  const [isTouch, setIsTouch] = useState(true); // Default to true until verified desktop fine-pointer
  const [style, setStyle] = useState({});
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const detectTouch = () => {
      if (typeof window === 'undefined') return;
      const touchDetected =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches ||
        !window.matchMedia('(hover: hover)').matches ||
        window.innerWidth < 1024;

      setIsTouch(touchDetected);

      if (!touchDetected) {
        setStyle({
          transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: 'transform 400ms cubic-bezier(0.23, 1, 0.32, 1)'
        });
      } else {
        setStyle({});
        setGlare({ x: 50, y: 50, opacity: 0 });
      }
    };

    detectTouch();
    window.addEventListener('resize', detectTouch);
    return () => window.removeEventListener('resize', detectTouch);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isTouch || !ref.current) return;
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
  }, [isTouch, maxAngle, scale]);

  const handleMouseLeave = useCallback(() => {
    if (isTouch) return;
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 500ms cubic-bezier(0.23, 1, 0.32, 1)'
    });
    setGlare({ x: 50, y: 50, opacity: 0 });
  }, [isTouch]);

  return { ref, style, glare, handleMouseMove, handleMouseLeave, isTouch };
}
