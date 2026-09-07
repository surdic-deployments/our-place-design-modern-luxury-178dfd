import { restaurant } from "@/content/site";

const PENDING = restaurant.reservationUrl.startsWith("#todo");

export function ReservationButton({
  className = "",
  id,
}: {
  className?: string;
  id: string;
}) {
  const noteId = `reservation-pending-note-${id}`;

  return (
    <span className="inline-flex flex-col items-center gap-1.5">
      <a
        href={restaurant.reservationUrl}
        className={`cta-gold ${className}`}
        aria-describedby={PENDING ? noteId : undefined}
      >
        Tisch reservieren
      </a>
      {PENDING && (
        <span id={noteId} className="text-[0.65rem] text-cream-500">
          Reservierung folgt in Kürze
        </span>
      )}
    </span>
  );
}
