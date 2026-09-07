---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Home page surface brief

Scope: `/` (home page only). Visitor mode: Persuade. Audience: local diners and visitors in Fürth/Nürnberg, plus the date-night/special-occasion segment. German-only copy. No Groups & Events page, no staff CMS, no live open/closed computation in this pass.

Third visual world on this project, on its own branch (`design/modern-luxury`), not a replacement of `main`'s Sign Painter's Board.

## Direction change: canon retired in favor of the rolled assignment

The first round on this branch took the standing exit/canon (a conventional, restrained dark restaurant site). Built and shipped clean, but the user's verdict: "too boring... quite boring and empty," specifically calling back to the cinematic scroll-driven animation the original direction roll offered and they'd initially passed on. This brief now formally adopts that rolled assignment instead: **Film Noir Title Sequence** (assigned index 4 of the model's own ranked list, seed key 4605bf22, first offered and declined in favor of canon; now built for real). Convention is no longer the commitment on this branch — the canon's restraint was tried and explicitly rejected as underwhelming.

What survives from the canon build (validated independently, not part of the complaint): the warm near-black ground (`--noir-900` body background), the restrained one-gold-accent palette, Italiana + Manrope typography, the hairline-divided editorial list layout (no boxed cards), and the atmospheric gradient standing in for full-bleed photography. What changes: motion goes from one quiet fade-up to genuinely cinematic — kinetic entrance, visible film grain, scene-numbered sections, and a spotlight isolate-and-dim interaction.

## Direction contract

THESIS: The page unfolds like a moody film's opening credits — kinetic credit-style type on load, a persistent film-grain material, scene-numbered sections like a shooting script, and a spotlight law where focusing one element dims everything else. Not a generic "dark elegant restaurant" template with one quiet fade-up.

OWN-WORLD: Warm near-black ground (`--noir-900`/`--noir-950`, carried over from the canon build), cream text, one gold accent (carried over). New devices this round: a visible procedural film-grain overlay (not the near-invisible anti-banding pass from the canon build — this one is a real, seen material, animated so it doesn't sit static), thin letterbox bars framing the hero, a monospace "scene number" readout (Red Hat Mono) as a corner tag per section — never positioned as a kicker above a heading, always a distinct corner/side element per the craft-floor ban already enforced on this branch. Display face stays Italiana (one voice, proven to work); body stays Manrope.

STORY: A visitor arrives to a title sequence, not a static page — headline lines resolve into focus as if a lens were pulled, sections announce themselves like scene slates, and hovering a dish or nav item pulls it into a spotlight while the rest of the page recedes. The effect should read as considered cinematography, not scattered hover gimmicks.

FIRST VIEWPORT: Full-bleed atmospheric hero framed by thin letterbox bars top/bottom. On load, the H1 lines animate in staggered with a blur-to-sharp focus-pull (not a flat fade). A small scene-number tag ("Szene 01") sits in a hero corner, not above the H1. CTA and tagline follow the headline's entrance beat.

FORM: Film Noir Title Sequence — assigned index 4 of the model's own ranked direction list, seed key 4605bf22. Superseded the earlier canon choice per explicit user feedback that the canon read as boring/empty.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and every shipping raster carrying its provenance. DESIGN.md stays untouched on this branch (documents main's Sign Painter's Board).

## Motion (this is the whole point of this rework — go further than the canon build)

- **Kinetic hero entrance** (on mount, not scroll-triggered): H1 lines slide up + resolve from blurred to sharp, staggered ~120ms apart; tagline and CTA follow.
- **Visible film grain**: a real, seen procedural texture layered across the page (not the prior near-invisible anti-banding pass), subtly animated (e.g. stepped seed shift) so it reads as film stock rather than a static PNG-like overlay. Respects `prefers-reduced-motion` (grain can stay static, just not animated, under reduced motion).
- **Scene-number corner tags**: small mono readout per section ("Szene 01", "Szene 02"...), corner-positioned, never a pre-heading kicker.
- **Isolate-and-dim spotlight**: hovering/focusing a nav link or a signature-dish row brings it to full brightness while sibling items dim — one thing held in the light at a time.
- **Section entrance**: replace the flat fade-up with a cinematic "focus pull" (slight scale + blur convergence + brightness ramp) as each section enters, more filmic than a translateY fade.
- Everything still respects `prefers-reduced-motion` (settle instantly, no blur/scale animation, but content remains visible and fully usable) and no booking/scroll action ever depends on animation completing.

## Open decisions / TODOs

- Real Resmio reservation (and takeaway) URL — placeholder href + visible TODO until supplied.
- Final approved German copy/tagline (using "Rauch. Ribs. Gute Abende." as working headline, flagged as proposed not final).
- Real photography/logo — authored atmospheric/grain treatment stands in.
- Hours conflict across listings — shown with a "Stand: [date]" (last updated) label, not a live open/closed indicator.
