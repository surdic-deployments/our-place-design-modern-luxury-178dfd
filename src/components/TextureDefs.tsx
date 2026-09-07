// Procedural noise filters. #fine-grain is a near-invisible anti-banding
// pass for the hero's dark gradient. #film-grain is a coarser, higher-
// contrast pass meant to actually be seen — the page's film-stock material.
export function TextureDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="fine-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves={2}
            seed={2}
            stitchTiles="stitch"
            result="n"
          />
          <feColorMatrix in="n" type="saturate" values="0" />
        </filter>
        <filter id="film-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.55"
            numOctaves={2}
            seed={7}
            stitchTiles="stitch"
            result="n"
          />
          <feColorMatrix in="n" type="saturate" values="0" />
          {/* Force full, constant alpha so the noise is opaque grayscale —
              composited on a near-black page with mix-blend-mode: screen
              (in globals.css), which always adds light regardless of the
              base color. `overlay` on this dark a base collapses toward
              2*base*blend and self-cancels; screen does not. */}
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="1" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}
