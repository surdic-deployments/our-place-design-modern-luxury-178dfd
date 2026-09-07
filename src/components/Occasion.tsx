import { occasion } from "@/content/site";
import { Reveal } from "./Reveal";

export function Occasion() {
  return (
    <section
      id="unser-place"
      className="relative border-y border-noir-800 bg-noir-900/40 px-5 py-24 sm:px-8 sm:py-32"
    >
      <span className="scene-tag absolute right-5 top-8 sm:right-8">
        Szene 03
      </span>
      <Reveal as="div" className="reveal mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl text-cream-100 sm:text-4xl">
          {occasion.heading}
        </h2>
        <div className="mt-6 flex flex-col gap-6">
          {occasion.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "font-display text-2xl leading-snug text-cream-100 sm:text-3xl"
                  : "font-body text-base leading-relaxed text-cream-300"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
