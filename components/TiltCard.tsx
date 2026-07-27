"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export function TiltCard({
  children,
  className = "",
  intensity = 18,
}: TiltCardProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const scene = sceneRef.current;
    const card = cardRef.current;
    if (!scene || !card) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = scene.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * intensity * 2;
    const rotateX = (0.5 - y) * intensity * 1.6;

    card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    card.style.setProperty("--shine-x", `${(x * 100).toFixed(1)}%`);
    card.style.setProperty("--shine-y", `${(y * 100).toFixed(1)}%`);
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const onLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    card.style.setProperty("--shine-x", "50%");
    card.style.setProperty("--shine-y", "40%");
  };

  return (
    <div
      ref={sceneRef}
      className={`tilt-scene ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div ref={cardRef} className="tilt-card glass-card">
        <div className="tilt-card-shine" aria-hidden="true" />
        <div className="tilt-card-content">{children}</div>
      </div>
    </div>
  );
}
