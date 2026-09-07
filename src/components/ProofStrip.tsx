import { proofPoints } from "@/content/site";
import { Reveal } from "./Reveal";

export function ProofStrip() {
  return (
    <Reveal as="section" className="reveal px-5 py-14 sm:px-8">
      <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {proofPoints.map((point, i) => (
          <li key={point} className="flex items-center gap-8">
            {i > 0 && (
              <span
                aria-hidden="true"
                className="block w-px bg-noir-600"
                style={{ height: "1rem" }}
              />
            )}
            <span className="label-caps !text-cream-300">{point}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
