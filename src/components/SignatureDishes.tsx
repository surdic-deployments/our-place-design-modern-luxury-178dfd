import { signatureDishes } from "@/content/site";
import { Reveal } from "./Reveal";

export function SignatureDishes() {
  return (
    <section id="platte" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <span className="scene-tag absolute right-5 top-8 sm:right-8">
        Szene 02
      </span>

      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl text-cream-100 sm:text-5xl">
            Von der Platte
          </h2>
        </div>

        <Reveal as="div" className="spotlight-group stagger reveal flex flex-col">
          {signatureDishes.map((dish, i) => (
            <div key={dish.index}>
              {i > 0 && <div className="hairline" />}
              <div className="spotlight-item flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-2xl text-cream-100 sm:text-3xl">
                      {dish.name}
                    </h3>
                    <span className="label-caps !text-cream-500 !tracking-widest">
                      {dish.tag}
                    </span>
                  </div>
                  <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-cream-300">
                    {dish.description}
                  </p>
                </div>
                <span className="font-display text-xl text-gold-400 sm:text-2xl">
                  {dish.price}
                </span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
