# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are prospective and returning diners in Fürth and the greater Nürnberg–Fürth area — local friend groups, families, celebratory groups, casual dates, and BBQ-seeking visitors — who land on the site to decide whether to eat here and then to book a table or order takeaway. Secondary audience: people already planning a visit who need hours, location, and practical logistics fast.

## Product Purpose

The public website for Our Place Barbecue & Cocktailhouse, a restaurant in Fürth, Germany. It replaces the current near-content-free official site with a credible, appetising, accessible restaurant presence. Success means a visitor can see the food, reserve a table, and find the restaurant within seconds, with booking and takeaway handed off to the existing Resmio service rather than rebuilt.

## Positioning

American barbecue and cocktail nights in a historic Fürth half-timbered-house setting — warm, smoky, energetic, and unmistakably local. Not a generic American-diner template and not stars-and-stripes cliché. Proposed line (not yet owner-approved as final copy): "Smoke, steaks & good nights in Fürth" / "Rauch. Ribs. Gute Abende."

## Operating Context

- German-first site (optionally with an English toggle later); legal/cookie UI must be in German, unlike the current English-language cookie notice on the live site.
- Reservations and takeaway ordering are handled by the existing third-party service, Resmio — the site links or embeds rather than duplicating availability logic.
- Menu, prices, and hours are living data that changes; the site must show a visible "last updated" date and never let stale content look authoritative.
- A known operational conflict exists between listings (Resmio, Tripadvisor, and the live site disagree on hours) — the website is meant to become the single source of truth going forward.
- No staff/admin CMS in this build — regular content updates (menu, hours, announcements) are handled by editing source content directly, not through an authenticated editor UI.

## Capabilities and Constraints

- Stack is already established in this repo: Next.js (App Router) + TypeScript + Tailwind CSS v4, pnpm. Do not introduce a competing stack.
- Public marketing/content routes should be static/cached where possible; avoid an SPA-style client app shell for content pages.
- A server-side contact form using Resend (already a dependency, alongside zod for validation) is in scope: server-side validation, rate limiting/bot mitigation, notification email to the restaurant, no exposed secrets client-side. Enquiries are handled by email only — no staff inbox/interface.
- No authenticated staff interface, roles, or database-backed content editor — explicitly out of scope for this build.
- Do not fabricate or invent: menu items/prices, hours, allergens, dietary facilities, testimonials/reviews, social media handles/links, ratings, or press. Where the brief's data conflicts or is unconfirmed, show it with a clear "last updated" / TODO marker rather than guessing.
- No real photography or brand assets exist yet in the repo — build with clearly-marked placeholders for food/interior/logo imagery until real assets are supplied; do not use scraped or AI-generated food photography as a stand-in for final content.
- Accessibility target: WCAG 2.2 AA — semantic landmarks, one H1 per page, visible keyboard focus, 44×44px minimum tap targets, alt text, no color-only meaning, respects `prefers-reduced-motion`.

## Brand Commitments

- Name: "Our Place Barbecue & Cocktailhouse", signs off publicly as "Our Place".
- Location: Beim Liershof 3, 90762 Fürth, Germany.
- Standing visual preference: when an Impeccable design round offers the category-standard/canon option (the conventional, well-executed default rather than an experimental direction), the user has chosen it once explicitly for a "modern 5-star restaurant" variation and named no specific reference sites — the craft bar is top-tier hospitality/restaurant-group launch polish, left to the builder's judgment rather than a named site. This is a standing preference for future canon choices, not a mandate to always pick canon.

## Evidence on Hand

- `docs/project.md` is a detailed research brief covering confirmed restaurant facts (name, address, phone, cuisine, sample menu with prices, hours as currently shown on the live site), a full recommended sitemap and home-page sequence, visual-system suggestions, SEO/schema guidance, and a staged delivery plan. Treated as confirmed product truth per the project owner. Menu prices and hours in that brief were sourced from third-party listings/menu aggregators (dated August–September 2026) rather than the restaurant's own live confirmation for every field — the brief itself flags an hours discrepancy across Resmio, Tripadvisor, and the live official site that has not been resolved.
- No real photography, logo file, or brand assets currently exist in the repo (`public/` only holds default Next.js/Vercel placeholder SVGs). No confirmed social media handles.
- No customer testimonials, press, or case studies exist to use verbatim; Tripadvisor review themes in the brief are described as subjective and not to be used as on-site claims or star ratings.

## Product Principles

1. Booking and finding the restaurant beat everything else — the primary conversion (Resmio reservation) and core logistics (hours, address, phone, directions) must be effortless and never buried.
2. Never assert what isn't confirmed — stale or conflicting operational data (hours, prices, availability) gets a visible "last updated" marker and a TODO rather than being presented as fact.
3. Borrow clarity from competitors, not identity — win on Our Place's own Fürth personality and the barbecue + cocktailhouse occasion, not a generic BBQ-site template.
4. Keep the build lean and content-first — static/cached where possible, minimal JS, no client app shell for content, no staff CMS in this phase.
5. Accessibility and mobile one-thumb paths (menu, book, call, directions) are non-negotiable, not a later pass.

## Accessibility & Inclusion

WCAG 2.2 AA is the explicit standard from the source brief: semantic landmarks, skip link, logical heading order, visible focus, labelled form controls with useful errors, sufficient contrast, descriptive alt text, no hover-only controls, and no reliance on color alone to convey meaning (e.g. dietary flags).
