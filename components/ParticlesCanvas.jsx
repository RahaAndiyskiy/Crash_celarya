'use client';

import { useEffect, useRef } from 'react';

const COLORS = [
  { r: 15, g: 23, b: 42 },
  { r: 168, g: 85, b: 247 },
  { r: 56, g: 189, b: 248 },
  { r: 236, g: 72, b: 153 },
];

function createParticles(count, width, height) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: 1.4 + Math.random() * 3.2,
    speed: 0.02 + Math.random() * 0.08,
    alpha: 0.18 + Math.random() * 0.3,
    drift: Math.random() * Math.PI * 2,
    vx: (Math.random() - 0.5) * 0.14,
    vy: (Math.random() - 0.5) * 0.14,
    phase: Math.random() * Math.PI * 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));
}

export default function ParticlesCanvas() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    particlesRef.current = createParticles(140, width, height);

    const handleResize = () => {
      resizeCanvas();
      particlesRef.current = createParticles(140, width, height);
    };

    window.addEventListener('resize', handleResize);

    const drawFrame = () => {
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = 'source-over';

      const pointer = window.__particlesPointer;

      particlesRef.current.forEach((particle) => {
        if (pointer && pointer.x !== null && pointer.y !== null) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 160;

          if (dist < repelRadius && dist > 0) {
            const repelStrength = (1 - dist / repelRadius) * 0.22;
            const nx = dx / dist;
            const ny = dy / dist;
            particle.vx += nx * repelStrength;
            particle.vy += ny * repelStrength;
            particle.x += nx * repelStrength * 2;
            particle.y += ny * repelStrength * 2;
          }
        }

        particle.x += Math.cos(particle.drift) * particle.speed + particle.vx;
        particle.y += Math.sin(particle.drift) * particle.speed + particle.vy;
        particle.phase += 0.012;

        particle.vx *= 0.98;
        particle.vy *= 0.98;

        if (particle.x > width + 30) particle.x = -30;
        if (particle.x < -30) particle.x = width + 30;
        if (particle.y > height + 30) particle.y = -30;
        if (particle.y < -30) particle.y = height + 30;

        const alpha = Math.max(0, Math.min(1, particle.alpha + Math.sin(particle.phase) * 0.04));
        const { r, g, b } = particle.color;
        const color = `rgba(${r}, ${g}, ${b}, ${alpha})`;

        context.save();
        context.fillStyle = color;
        context.shadowColor = `rgba(${r}, ${g}, ${b}, ${alpha * 0.95})`;
        context.shadowBlur = particle.size * 18;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      });

      animationRef.current = requestAnimationFrame(drawFrame);
    };

    drawFrame();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block h-full w-full"
      aria-hidden="true"
    />
  );
}
