"use client";

import { useEffect } from "react";

export function CursorSpotlight() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const root = document.documentElement;
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--spot-x", `${event.clientX}px`);
        root.style.setProperty("--spot-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <div className="spotlight-layer" aria-hidden="true" />;
}
