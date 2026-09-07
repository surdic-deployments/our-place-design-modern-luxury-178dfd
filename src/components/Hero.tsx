import { hours } from "@/content/site";
import { ReservationButton } from "./ReservationButton";
import { ParallaxLayer } from "./ParallaxLayer";
import { ChevronDown, ClockIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="atmosphere relative flex min-h-[100svh] flex-col justify-center px-5 sm:px-8"
    >
      <span className="letterbox-bar letterbox-top" aria-hidden="true" />
      <span className="letterbox-bar letterbox-bottom" aria-hidden="true" />
      <ParallaxLayer />
      <div className="light-leak" aria-hidden="true" />

      <span className="scene-tag absolute right-6 top-12 sm:right-10 sm:top-14">
        Szene 01
      </span>

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-6 py-32 text-center">
        <h1 className="font-display text-5xl leading-[1.05] text-cream-100 sm:text-6xl lg:text-7xl">
          <span className="hero-line inline-block" style={{ animationDelay: "80ms" }}>
            Rauch. Ribs.
          </span>
          <br />
          <span className="hero-line inline-block" style={{ animationDelay: "260ms" }}>
            Gute Abende.
          </span>
        </h1>

        <p
          className="hero-line max-w-xl font-body text-base leading-relaxed text-cream-300 sm:text-lg"
          style={{ animationDelay: "460ms" }}
        >
          American Barbecue &amp; Cocktailhouse in einem Fachwerkhaus mitten
          in Fürth — hickory-geräuchert, langsam gezogen, für einen Abend,
          der bleibt.
        </p>

        <div
          className="hero-line mt-4 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "620ms" }}
        >
          <ReservationButton id="hero" />
          <a href="#speisekarte" className="link-underline text-sm">
            Speisekarte entdecken
          </a>
        </div>

        <div
          className="hero-line mt-6 flex items-center gap-2 text-xs text-cream-500"
          style={{ animationDelay: "760ms" }}
        >
          <ClockIcon className="h-3.5 w-3.5" />
          {hours.lines[0].days} {hours.lines[0].time}
        </div>
      </div>

      <a
        href="#platte"
        aria-label="Zum Inhalt scrollen"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream-500 transition-colors hover:text-gold-400"
      >
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
}
