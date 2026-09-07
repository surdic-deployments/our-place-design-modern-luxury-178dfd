"use client";

import { useEffect, useRef } from "react";

/** Restrained scroll-linked drift on a single background layer — not a
 * cinematic effect, just enough depth to feel considered. */
export function ParallaxLayer({
  strength = 0.12,
  className = "",
}: {
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.parentElement?.getBoundingClientRect();
        const y = rect ? rect.top * strength : 0;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return <div ref={ref} className={`atmosphere-bg atmosphere-parallax ${className}`} />;
}
