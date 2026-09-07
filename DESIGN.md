---
name: Our Place — Barbecue & Cocktailhouse
description: A hand-painted trade sign — brush-lettered, gold-shaded type on warm painted wood boards, for a real Fürth BBQ house.
colors:
  cream-50: "#fffbf1"
  cream-100: "#f8edd2"
  cream-200: "#f0dfb6"
  parchment-300: "#e4cd99"
  soot-900: "#2a2117"
  soot-700: "#4d3f2e"
  soot-500: "#6e5d46"
  barn-red-400: "#c1503c"
  barn-red-500: "#a63a2a"
  barn-red-600: "#8a2f21"
  barn-red-700: "#6e2519"
  hunter-500: "#3d6448"
  hunter-600: "#33553c"
  hunter-700: "#274330"
  gold-300: "#ecd08a"
  gold-400: "#d1a13f"
  gold-500: "#b98a32"
  gold-600: "#a97c28"
  dusk-500: "#a8543a"
  dusk-600: "#85402d"
  dusk-700: "#642f20"
  dusk-900: "#3a1c12"
typography:
  display:
    fontFamily: "Rye, ui-serif, Georgia, serif"
    fontSize: "clamp(2.5rem, 15vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
  headline:
    fontFamily: "Rye, ui-serif, Georgia, serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: "Bitter, ui-serif, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Karla, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "16px"
  pill: "999px"
spacing:
  section-y-mobile: "4rem"
  section-y-desktop: "6rem"
  panel-padding-mobile: "1.5rem"
  panel-padding-desktop: "2.5rem"
  container-max: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.barn-red-500}"
    textColor: "{colors.cream-50}"
    typography: "{typography.headline}"
    rounded: "{rounded.pill}"
    padding: "0.7em 1.6em"
  button-primary-hover:
    backgroundColor: "{colors.barn-red-500}"
    textColor: "{colors.cream-50}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.soot-700}"
    typography: "{typography.label}"
  card-board:
    backgroundColor: "{colors.cream-100}"
    textColor: "{colors.soot-900}"
    rounded: "{rounded.lg}"
  tag-plaque:
    backgroundColor: "{colors.hunter-600}"
    textColor: "{colors.gold-300}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.3em 0.7em"
---

# Design System: Our Place — Barbecue & Cocktailhouse

## Overview

**Creative North Star: "The Sign Painter's Board"**

The page is built as if every panel were a hand-painted trade sign hung on the wall of a real barbecue house: warm cream-and-parchment painted wood, brush-lettered display type with a hard offset gold "shade" (the classic sign-painting technique of a duplicate letter shape behind the main stroke — never a soft drop-shadow), and a small set of bold sign-paint colors — barn-red, hunter-green, gold-leaf — used as full players rather than one accent on a neutral field. This replaces a retired dark industrial-instrument-panel world (riveted steel, brass switches, gauge dials); the confirmed rejection was that world's cold, metallic harshness, not warmth or craft-object framing — this system keeps both, just built from paint and wood instead of steel and brass.

Material is produced, not painted on: wood and paper grain come from real SVG `feTurbulence` noise filters (`#wood-grain`, `#paper-grain` in `TextureDefs.tsx`), rendered as a leading sibling `<span>` with `mix-blend-mode: multiply` inside every `.board` container — never a flat CSS gradient standing in for texture. The `.board` surface itself carries a soft inset vignette plus a gold-then-barn-red double pinstripe border (`.board::before`) so it reads as a mounted physical object, not a vector-clean rectangle.

The cream-to-dusk transition into the Visit/Booking section is a deliberate short gradient handoff — a dedicated `aria-hidden` div between MenuTeaser and VisitBook blending `--cream-50` to `--dusk-700` — not a hard color-block cut and not a full-page continuous gradient. Motion is a small, deliberate set tied to the sign-hanging metaphor: boards settle in with a gentle drop-and-rotate (`.reveal`, never a mechanical snap), dish columns chase in with a staggered fade, and flame marks light up one at a time on reveal. Nothing loops for attention, and every animation collapses under `prefers-reduced-motion`.

**Key Characteristics:**
- Warm cream/parchment ground carrying three sign-paint colors as genuine role-players — barn-red, hunter-green, gold-leaf — not a single accent on neutral
- One display voice (Rye) used for both H1 and H2 alike, paired with a serif body (Bitter) and a sans label face (Karla); no monospace face anywhere in the system
- The painted board (`.board`) is the one repeating container motif: procedural grain, pinstripe border, inset vignette
- Motion is restrained and physical in character: settle, chase, light up — never bounce or spin for its own sake

## Colors

A warm cream-and-parchment ground carries three bold sign-paint colors as a genuine full palette, deepening to a rust-ember dusk tone by the visit/booking section and footer.

### Primary
- **Barn Red** (`#a63a2a`, ranged `#c1503c` → `#6e2519`): the boldest sign-paint color — the hero's second display line, the ribbon-cta reservation button, prices, focus outlines, hover states on quiet links, and lit flame marks. The system's single most attention-getting color.

### Secondary
- **Hunter Green** (`#3d6448`, ranged → `#274330`): the plaque/tag color (dish index numbers, "Bald buchbar" pending note) and menu category labels. Reads as the sign-painter's second ink, reserved for small stamped or labeled elements rather than large fills.

### Tertiary
- **Gold Leaf** (`#d1a13f`, ranged `#ecd08a` → `#a97c28`): the hand-lettering shade color behind display headlines (`.shade-gold`), the board's outer pinstripe, the wordmark's brass-adjacent glow, scrollwork flourish dividers, and text selection. This is decoration in the sign-painting sense — the shade that makes lettering read as painted, not printed.

### Neutral
- **Cream/Parchment** (`#fffbf1` → `#e4cd99`): the page ground (`cream-50`) and every board surface (`cream-100`), default border color, and dividers.
- **Soot** (`#2a2117` → `#6e5d46`): text. `soot-900` for headlines and high-emphasis copy, `soot-700` for body/nav text, `soot-500` for tertiary/meta text (footer-adjacent captions, "Stand ..." notes).
- **Dusk** (`#a8543a` → `#3a1c12`): the warm rust-ember ground for the Visit/Booking section and footer — a genuinely warm family (blue channel clearly lowest at every step), deliberately distinct from a cool wine/burgundy read.

### Named Rules
**The Full-Palette Rule.** Barn-red, hunter-green, and gold-leaf are each a real role-player, not variations on one accent: red for the boldest calls-to-action and prices, green for stamped tags and labels, gold for the lettering shade and dividers. No single color is asked to carry every job.

**The Hard-Shade Rule.** Display headlines carry their gold or cream "shade" as a hard 2-3px offset duplicate letterform (`text-shadow: Npx Npx 0 [color]`), never a blurred drop-shadow. A soft shadow here would read as a UI effect, not hand-lettering.

## Typography

**Display Font:** Rye (with ui-serif, Georgia fallback)
**Body Font:** Bitter (with ui-serif, Georgia fallback)
**Label Font:** Karla (with ui-sans-serif, system-ui fallback)

**Character:** Rye's heavy, brush-lettered slab presence gives every headline the look of hand-painted signage; Bitter's slab-serif body keeps prose warm and legible without competing with the display voice; Karla's plain geometric sans is reserved for anything that behaves like a label — nav, tags, prices, hours — keeping the "painted vs. printed" distinction legible throughout. No monospace face appears anywhere in the system.

### Hierarchy
- **Display** (400, `clamp(2.5rem, 15vw, 6rem)`, line-height 0.95): the hero H1 only, gold-shaded, two lines.
- **Headline** (400, `text-4xl`–`text-5xl` responsive, line-height 1): every section H2 ("Von der Platte", "Von der Karte", "Besuch & Buchung", the Occasion heading) and the header wordmark. Rye is one voice for H1 and H2 alike — there is no separate "headline" cut, only a smaller size of the same display face.
- **Title** (400, `text-2xl`, Rye): dish names on signature-dish cards.
- **Body** (400, 1rem–1.125rem, line-height 1.625, `max-w-xl`–`max-w-2xl` measure): descriptive paragraphs in the hero, Occasion, and dish cards.
- **Label** (600, 0.6875rem–0.875rem, uppercase, tracking-wide): nav links, quiet secondary links, plaque tags, prices, hours, footer meta — anything that reads as printed information rather than lettering.

### Named Rules
**The One Display Voice Rule.** Rye is used for both H1 and H2 alike, at different sizes, never mixed with a second display face for "headline" vs. "display" roles. It never appears in body copy or UI labels, keeping the brush-lettered impact rare and legible.

## Layout

Single-column content flow inside a shared `max-w-6xl` (72rem) container, edge-padded `px-4` on mobile and `px-8` from `sm:` up. Vertical rhythm between major sections is `py-16` (mobile) stepping to `py-24` (`sm:` and up); the hero uses its own tighter panel-specific padding instead. Board interiors pad `p-6` on mobile, `p-8`–`p-10` at `sm`/`lg`.

Responsive layout is mostly a column-to-row flip at the `sm` breakpoint: the Occasion section moves from a stacked heading+paragraphs to a `[220px_1fr]` two-column grid; the VisitBook board moves from a stacked column to a two-column grid split (info / signpost); SignatureDishes' three dish columns move from a divided vertical stack (`divide-y`) to a divided horizontal row (`divide-x`); MenuTeaser's categories move from a single column to a three-column grid. The header collapses its inline nav into a `<details>`-based dropdown below `md`, with a 44×44px tap target for the toggle.

The cream-to-dusk background transition ahead of Visit/Booking is implemented as a dedicated `aria-hidden` gradient `<div>` (`h-24 sm:h-36`, `linear-gradient(to bottom, var(--cream-50), var(--dusk-700))`) placed between MenuTeaser and VisitBook in `page.tsx` — a deliberate short blend, not a hard section-boundary color cut and not a continuous full-page gradient.

## Elevation & Depth

Depth is structural, not decorative: every `.board` container carries a soft directional highlight gradient, a drop shadow (`--shadow-board: 0 14px 30px -16px rgb(42 33 23 / 0.35)`), and an inset double pinstripe border plus a soft inset vignette (`.board::before`) to read as a physical panel mounted slightly proud of the wall behind it. There are no ambient card shadows scattered around for generic hierarchy; shadow is reserved for the board material system and the ribbon-cta button.

### Shadow Vocabulary
- **Board depth** (`box-shadow: 0 14px 30px -16px rgb(42 33 23 / 0.35)`, plus inset pinstripe + vignette via `::before`): every `.board` container (hero, signature-dish strip, menu teaser, visit panel, mobile nav drawer).
- **Ribbon CTA rest** (`box-shadow: 0 10px 22px -12px rgb(110 37 25 / 0.65)`): the reservation button at rest, deepening to a gold-tinted glow plus outline ring on hover.

### Named Rules
**The Material-Not-Decoration Shadow Rule.** Shadow only ever describes a physical material relationship (a board sitting proud of the wall, a ribbon lifting on hover) — it is never applied to give an otherwise flat element arbitrary "lift."

## Shapes

Boards use a generous radius (`rounded-2xl`, 16px) that reads as a cut wooden panel edge rather than a sharp instrument plate; small chips and the mobile nav toggle use a tighter radius (`rounded-md`/`rounded-lg`, 6-8px). The double pinstripe border (gold outer, barn-red inner) is the recurring signature edge treatment on every board. The ribbon-cta button is clipped into a hand-cut ribbon-banner silhouette (`clip-path` chevron notches on both ends) rather than a rectangle or pill — the one non-rectilinear interactive shape in the system. The plaque tag is a small pill (999px radius), styled as a hand-painted oval nailed to a board. The scrollwork flourish (a small symmetric SVG line ornament) is the only divider glyph, used once between the hero and the proof strip.

## Components

### Buttons
- **Shape:** ribbon-banner clip-path silhouette (chevron-notched both ends), not a rectangle or pill
- **Primary ("ribbon-cta"):** `.ribbon-cta` — barn-red-500 fill, cream-50 text, display-weight (Rye) label, `0.7em 1.6em` padding, 1px barn-red-700 border. This is the only primary action on the page (reservation), rendered identically at four call sites (header desktop, header mobile, hero, visit panel), each with a unique `id` prop so the pending-tag's `aria-describedby` never collides.
- **Hover / Focus:** lifts 1px and scales 1.015 with a gold-tinted glow ring on hover; on `:active` it settles back to scale 0.99. Focus-visible uses a barn-red-500 outline with 3px offset site-wide.
- **Secondary / Ghost:** `.link-quiet` — no fill, soot-700 text with a parchment-300 underline that shifts to barn-red on hover. Used for "Speisekarte entdecken," "Takeaway bestellen," "Route planen."

### Chips
- **Style ("plaque"):** hunter-600 background, gold-300 label text, hunter-700 hairline border, pill radius, uppercase with 0.08em tracking, small drop shadow. Used for dish index numbers ("Nr. 01"), the "Stand ..." menu-update tag, and the "Bald buchbar" pending-reservation note.

### Cards / Containers
- **Corner Style:** `rounded-2xl` (16px)
- **Background:** cream-100 base with a diagonal white-alpha sheen gradient and procedural wood-grain overlay (`.grain-wood`, mix-blend multiply, 0.14 opacity)
- **Shadow Strategy:** see Elevation & Depth — board depth shadow plus inset pinstripe border and vignette
- **Border:** inset double pinstripe (gold-400 then barn-red-500) via `.board::before`, plus a soft inset vignette
- **Internal Padding:** `p-6` mobile, `p-8`–`p-10` desktop

### Navigation
- Sticky header, `cream-50/95` with backdrop-blur, bottom hairline parchment-300 border. Desktop nav links use the label style (uppercase, tracking-wide, `.link-quiet` hover). Below `md`, collapses into a native `<details>`/`<summary>` dropdown; the toggle is a bordered 44×44px square icon button (meets touch target minimum), opening a `.board`-styled dropdown panel with its own grain overlay.

### Flame Marks (signature component)
A small hand-painted flame glyph (`FlameMark`), rendered 1-3 in a row as the spice-level indicator on each signature dish card, filling in with a scale+opacity transition on scroll-reveal. Always paired with a real visible "Schärfe" label above the group, not only an `aria-label` on the group. This replaces the retired gauge-needle dial from the prior world.

### Signpost Arrow (signature component)
A hand-painted wooden signpost with two overlapping arrow boards (hunter-green pointing to "FÜRTH", barn-red pointing to "OUR PLACE"), used in the Visit panel in place of the retired compass dial. Static, not animated — it reads as a fixed piece of yard signage rather than an instrument.

## Do's and Don'ts

### Do:
- **Do** render material grain (wood/paper) as a real leading sibling element with `filter: url(#...)` and `mix-blend-mode: multiply`, never as a flat gradient standing in for texture.
- **Do** use a hard offset `text-shadow` for the display "shade" effect (`.shade-gold`, `.shade-cream`) — never a blurred drop-shadow, which would read as a UI effect rather than hand lettering.
- **Do** give every repeated instance of a shared component (e.g. `ReservationButton`) its own unique `id`/ARIA-linked id when rendered more than once on a page — a shared hardcoded id breaks `aria-describedby` silently.
- **Do** pair any icon-only or `aria-label`-only indicator group (like the flame-mark spice rating) with a real visible text label, not just an accessible name.
- **Do** keep interactive tap targets at minimum 44×44px, as established on the mobile nav toggle.
- **Do** treat the cream-to-dusk section transition as a short dedicated gradient blend, not a hard color-block cut.

### Don't:
- **Don't** add a kicker/eyebrow label above headings anywhere in this system.
- **Don't** use flat CSS gradient fills to fake wood/paper material — texture must come from the procedural SVG filters in `TextureDefs.tsx`.
- **Don't** ship a placeholder/dead CTA silently. `ReservationButton` shows a visible "Bald buchbar" pending tag rather than pretending the reservation link is live.
- **Don't** mix a second display face into the system for "headline" vs. "display" — Rye is the one voice at every size, per the One Display Voice Rule.
- **Don't** use the dusk ramp as a cool wine/burgundy tone. It was corrected during build specifically to be a warm rust-ember family (blue channel lowest at every step); regressing it back toward blue-forward tones is a defect, not a valid variant.
- **Don't** loop or bounce motion for attention. Every animation in this system (board settle, chase stagger, flame-mark light-up) describes a physical event once, respects `prefers-reduced-motion`, and never gates a booking or scroll action on completing.
