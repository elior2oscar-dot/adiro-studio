"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector(".footer");
    const finalCta = document.querySelector(".final-cta");
    if (!footer) return;

    const targets = [footer, finalCta].filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0.12,
        );
        setHidden(anyVisible);
      },
      { threshold: [0, 0.12, 0.25], rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={`whatsapp-float${hidden ? " is-hidden" : ""}`}
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`דברו איתנו ב־WhatsApp: ${site.phoneDisplay}`}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
    >
      <span className="whatsapp-pulse" aria-hidden="true" />
      <span className="whatsapp-pulse whatsapp-pulse-delay" aria-hidden="true" />
      <span className="whatsapp-float-inner">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.04 3A12.8 12.8 0 0 0 5.15 22.53L3.34 29l6.63-1.74A12.81 12.81 0 1 0 16.04 3Zm0 23.46c-1.89 0-3.74-.51-5.36-1.47l-.38-.23-3.94 1.04 1.05-3.84-.25-.39a10.65 10.65 0 1 1 8.88 4.89Zm5.84-7.98c-.32-.16-1.9-.94-2.19-1.04-.3-.11-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59a9.58 9.58 0 0 1-1.78-2.21c-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.22.06-.4-.03-.57-.08-.16-.72-1.74-.99-2.38-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.58 1.16 3.12 1.32 3.33.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.76.27-1.42.19-1.55-.08-.14-.3-.22-.62-.38Z" />
        </svg>
      </span>
    </a>
  );
}
