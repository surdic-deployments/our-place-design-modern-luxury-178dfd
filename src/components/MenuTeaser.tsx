import { menuTeaser } from "@/content/site";
import { Reveal } from "./Reveal";

export function MenuTeaser() {
  return (
    <section id="speisekarte" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <span className="scene-tag absolute right-5 top-8 sm:right-8">
        Szene 04
      </span>
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl text-cream-100 sm:text-5xl">
            Von der Karte
          </h2>
          <span className="text-xs text-cream-500">Stand {menuTeaser.updated}</span>
        </div>

        <Reveal
          as="div"
          className="stagger reveal grid gap-x-12 gap-y-10 sm:grid-cols-3"
        >
          {menuTeaser.categories.map((category) => (
            <div key={category.name}>
              <span className="label-caps">{category.name}</span>
              <ul className="mt-5 flex flex-col gap-4">
                {category.items.map((item) => (
                  <li key={item.name} className="border-t border-noir-800 pt-4 first:border-t-0 first:pt-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-body text-sm text-cream-100">{item.name}</span>
                      <span className="font-body text-sm text-gold-400">{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <p className="mt-10 text-xs text-cream-500">
          Preise &amp; Verfügbarkeit können sich ändern. Es gilt die Karte im
          Restaurant.
        </p>
      </div>
    </section>
  );
}
