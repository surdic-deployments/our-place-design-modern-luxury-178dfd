import { hours, restaurant } from "@/content/site";
import { Reveal } from "./Reveal";
import { ReservationButton } from "./ReservationButton";
import { ArrowUpRight, ClockIcon, MapPinIcon, PhoneIcon } from "./icons";

export function VisitBook() {
  return (
    <section
      id="besuch"
      className="relative border-t border-noir-800 px-5 py-24 sm:px-8 sm:py-32"
    >
      <span className="scene-tag absolute right-5 top-8 sm:right-8">
        Szene 05
      </span>
      <Reveal
        as="div"
        className="reveal mx-auto grid max-w-5xl gap-14 sm:grid-cols-2 sm:gap-20"
      >
        <div>
          <h2 className="font-display text-3xl text-cream-100 sm:text-4xl">
            Besuch &amp; Buchung
          </h2>
          <p className="mt-2 mb-8 font-body text-sm text-cream-300">
            Wir freuen uns auf euch.
          </p>

          <div className="flex flex-col gap-5 text-sm text-cream-300">
            <div className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-4 w-4 flex-none text-gold-400" />
              <div>
                {hours.lines.map((line) => (
                  <div key={line.days} className="flex justify-between gap-8">
                    <span>{line.days}</span>
                    <span className="text-cream-100">{line.time}</span>
                  </div>
                ))}
                <div className="mt-1 text-xs text-cream-500">
                  Stand {hours.lastConfirmed}
                </div>
              </div>
            </div>

            <a
              href={restaurant.mapsUrl}
              className="flex items-start gap-3 hover:text-cream-100"
            >
              <MapPinIcon className="mt-0.5 h-4 w-4 flex-none text-gold-400" />
              <span>
                {restaurant.address.street}
                <br />
                {restaurant.address.postalCode} {restaurant.address.city}
              </span>
            </a>

            <a
              href={`tel:${restaurant.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 hover:text-cream-100"
            >
              <PhoneIcon className="h-4 w-4 flex-none text-gold-400" />
              {restaurant.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <ReservationButton id="visit" />
            <a href={restaurant.takeawayUrl} className="link-underline text-sm">
              Takeaway bestellen
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 border-t border-noir-800 pt-10 sm:border-t-0 sm:border-l sm:pl-16 sm:pt-0">
          <p className="font-display text-2xl leading-snug text-cream-100">
            Ein Fachwerkhaus in der Fürther Altstadt — leicht zu finden,
            schwer zu verlassen.
          </p>
          <a
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm"
          >
            Route planen <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
