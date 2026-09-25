import React from 'react';
import { useTilt3D } from '../hooks/useTilt3D';

/**
 * TiltCard: Wrapper component applying 3D perspective tilt and specular reflection
 */
export default function TiltCard({ children, className = '', maxAngle = 6, scale = 1.015 }) {
  const { ref, style, glare, handleMouseMove, handleMouseLeave, isTouch } = useTilt3D(maxAngle, scale);

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Specular Glare Reflection (Desktop only) */}
      {!isTouch && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}), transparent 70%)`
          }}
        />
      )}
      {children}
    </div>
  );
}
