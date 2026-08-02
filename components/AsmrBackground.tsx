"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  frictionGlow: number;
};

/**
 * Atmospheric particle canvas — charcoal dust + ice glass shards
 * with a soft magnetic vortex near the cursor.
 */
export function AsmrBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId = 0;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, active: false };
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    const MAGNETIC_RADIUS = 260;
    const VORTEX_STRENGTH = 0.055;
    const PULL_STRENGTH = 0.1;

    const particleCount = () => {
      const area = window.innerWidth * window.innerHeight;
      if (window.innerWidth < 768) return Math.min(320, Math.floor(area / 4200));
      if (window.innerWidth < 1200) return Math.min(650, Math.floor(area / 2800));
      return Math.min(900, Math.floor(area / 2200));
    };

    const createParticle = (): Particle => {
      const isGlass = Math.random() > 0.68;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.45,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        color: isGlass ? "168, 198, 255" : "72, 78, 92",
        alpha: Math.random() * 0.35 + 0.08,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        frictionGlow: 0,
      };
    };

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = particleCount();
      particles = Array.from({ length: count }, createParticle);
    };

    const updateParticle = (p: Particle) => {
      if (mouse.active && !coarse) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 0.001 && dist < MAGNETIC_RADIUS) {
          const force = (MAGNETIC_RADIUS - dist) / MAGNETIC_RADIUS;
          p.vx += (dx / dist) * force * PULL_STRENGTH;
          p.vy += (dy / dist) * force * PULL_STRENGTH;
          p.vx += (dy / dist) * force * VORTEX_STRENGTH * 10;
          p.vy -= (dx / dist) * force * VORTEX_STRENGTH * 10;
          p.frictionGlow = force * 0.65;
        } else {
          p.frictionGlow *= 0.92;
        }
      } else {
        p.frictionGlow *= 0.92;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.95;
      p.vy *= 0.95;
      p.vx += (Math.random() - 0.5) * 0.035;
      p.vy += (Math.random() - 0.5) * 0.035;
      p.rotation += p.rotationSpeed + (Math.abs(p.vx) + Math.abs(p.vy)) * 0.04;

      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;
    };

    const drawParticle = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);

      const finalAlpha = Math.min(p.alpha + p.frictionGlow, 0.85);
      ctx.fillStyle = `rgba(${p.color}, ${finalAlpha})`;

      if (p.frictionGlow > 0.28) {
        ctx.shadowBlur = 10 * p.frictionGlow;
        ctx.shadowColor = `rgba(142, 182, 255, ${p.frictionGlow * 0.9})`;
      }

      ctx.beginPath();
      ctx.moveTo(0, -p.size * 2.4);
      ctx.lineTo(p.size, 0);
      ctx.lineTo(0, p.size * 2.4);
      ctx.lineTo(-p.size, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.fillStyle = "rgba(7, 8, 12, 0.2)";
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        updateParticle(p);
        drawParticle(p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(init, 120);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("mouseleave", onPointerLeave);

    init();
    // Seed opaque first frame so trail doesn't flash white
    ctx.fillStyle = "#07080c";
    ctx.fillRect(0, 0, width, height);
    render();

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("mouseleave", onPointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="asmr-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="asmr-bg__canvas" />
    </div>
  );
}
