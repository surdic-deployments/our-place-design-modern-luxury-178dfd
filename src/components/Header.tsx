"use client";

import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { ReservationButton } from "./ReservationButton";
import { MenuGlyph } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-500 ${
        scrolled
          ? "border-b border-noir-700 bg-noir-950/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <a href="#top" className="font-display text-xl text-cream-100 sm:text-2xl">
          Our Place
        </a>

        <nav className="spotlight-group hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="spotlight-item link-underline text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ReservationButton id="header-desktop" className="text-xs" />
        </div>

        <details className="relative md:hidden">
          <summary
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-noir-600 text-cream-100 [&::-webkit-details-marker]:hidden"
            aria-label="Menü öffnen"
          >
            <MenuGlyph className="h-5 w-5" />
          </summary>
          <div className="absolute right-0 top-14 flex w-56 flex-col gap-4 border border-noir-700 bg-noir-900 p-5">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="link-underline text-sm">
                {item.label}
              </a>
            ))}
            <ReservationButton id="header-mobile" className="justify-center text-xs" />
          </div>
        </details>
      </div>
    </header>
  );
}
