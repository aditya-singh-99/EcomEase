import React, { useEffect, useRef } from 'react';

/**
 * AmbientCursorGlow: High-performance canvas-based ambient cursor fluid lighting
 * Generates an ethereal, reactive twilight light aura and drifting micro-photons.
 * Damped with spring physics for natural momentum.
 */
export default function AmbientCursorGlow() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth interpolation (lerp)
    let mouse = { x: width * 0.5, y: height * 0.35, targetX: width * 0.5, targetY: height * 0.35 };

    // Floating micro-photons
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.5 + 0.2,
      baseAlpha: Math.random() * 0.4 + 0.2
    }));

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    const render = () => {
      // Spring interpolation towards mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Primary reactive radial twilight spotlight
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.min(width, height) * 0.45
      );
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.14)');
      gradient.addColorStop(0.35, 'rgba(37, 99, 235, 0.08)');
      gradient.addColorStop(0.7, 'rgba(15, 23, 42, 0.02)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render drifting photons
      ctx.save();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Proximity glow to cursor
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const prox = Math.max(0, 1 - dist / 300);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 + prox * 0.8), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${p.alpha * (1 + prox * 1.5)})`;
        ctx.shadowColor = '#60A5FA';
        ctx.shadowBlur = prox > 0.2 ? 8 : 0;
        ctx.fill();
      }
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-75 mix-blend-screen"
      aria-hidden="true"
    />
  );
}
