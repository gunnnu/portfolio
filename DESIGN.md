---
name: Gunpreet Singh — Portfolio
description: A personal engineering portfolio styled as a printed editorial masthead.
colors:
  paper: "#f2ede4"
  paper-deep: "#e6dfd0"
  ink: "#191512"
  ink-dim: "#6b6255"
  ink-faint: "#9c9284"
  rust-accent: "#c23b1f"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3rem, 11vw, 8.5rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.95rem–1.05rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.68rem–0.85rem"
    fontWeight: 700
    letterSpacing: "0.05em–0.08em"
rounded:
  none: "0px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "28px"
  xl: "40px"
components:
  btn-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "14px 22px"
  btn-solid-hover:
    backgroundColor: "{colors.rust-accent}"
    textColor: "{colors.paper}"
---

# Design System: Gunpreet Singh — Portfolio

## Overview

**Creative North Star: "The Printed Masthead"**

The site reads as a printed editorial masthead, not a soft dark-mode product page. Huge typography is the interface itself — the name fills most of the first viewport with no card, no glow, no container framing it. Everything below continues the masthead metaphor: work as a numbered index, experience as a tabular record, contact as a bold closing statement and colophon.

This is the site's third visual world, and it fully replaces the second (a graphite/amber "scientific instrument control panel" identity, itself a replacement of an even earlier near-black/mint-glow default look). Both prior worlds are anti-reference only — this one shares no tokens, components, or effects with either. It was sourced from current (2026) design-trend research into what's actually showing up across Dribbble and design-inspiration coverage right now, specifically the "tactile brutalism / editorial" direction: huge viewport-scaled type, sharp corners, visible structural rules, CSS grain texture, and warm chalky paper tones instead of another dark theme. That source is a deliberate, user-directed departure from this system's own dice-rolled concept process — a user-pinned direction beats the roll.

**Key Characteristics:**
- Warm chalky paper background, never white or dark mode
- Near-black ink for text, one rust-red signal color, nothing else
- A single type family (Archivo) carrying every size from huge display to small caps labels — hierarchy comes from weight and scale contrast, not from mixing families
- Sharp 0-radius corners and solid 1px structural rules everywhere; no soft shadows, no rounded cards, no card-tilt or glow effects ("anti-soft-UI" is the point)
- A fixed, subtle CSS/SVG grain overlay across the whole page for tactile, paper-like physicality
- Motion is kinetic and hard-edged (wipes, hard slides), never a gentle fade — GSAP + ScrollTrigger, progressive enhancement only

## Colors

Two neutrals plus a single signal color — no secondary or tertiary hue, and no dark-mode variant.

### Primary
- **Rust** (`#c23b1f`): the one accent. Used for the role label, hover states on nav/links/index rows, the "Company" line in experience, and the email underline. Nothing else uses color.

### Neutral
- **Paper** (`#f2ede4`): page background. Warm chalky off-white — never stark `#fff`, never dark.
- **Paper Deep** (`#e6dfd0`): reserved for a deeper paper tone if a section ever needs to sit visually behind the base (unused in the current build; don't invent a use for it without a reason).
- **Ink** (`#191512`): primary text, borders, the solid button fill. Near-black, warm, not pure `#000`.
- **Ink Dim** (`#6b6255`): secondary body copy (descriptions, summaries, bio).
- **Ink Faint** (`#9c9284`): tertiary labels — index numbers, stack lines, dates, the small index-count caption.

### Named Rules
**The One Signal Rule.** Rust is the only color in the system besides paper/ink neutrals. A future state (error, success) earns its place the same way rust did — never added as decoration. Carried forward unchanged from the prior world because it's a good rule, not because the palette was reused; the actual hex values are entirely new.

## Typography

**Family:** Archivo (with system-ui, sans-serif fallback) — the only typeface on the page.

**Character:** One grotesk family, four weight/size tiers (900 huge display, 800 sub-headings, 700 small caps labels, 400 body), doing the work three separate typefaces did in the prior system. This is a deliberate economy move core to the editorial-brutalist world, not an oversight — the mechanical single-font-family check should treat this file's declaration as the intentional answer.

### Hierarchy
- **Display** (900, `clamp(3rem, 11vw, 8.5rem)`, line-height 0.92, letter-spacing -0.02em): the masthead name only. Deliberately larger than a typical display cap because viewport-scaled type standing in for a hero image is the world's own device, confirmed with the user before building.
- **Headline** (900, `clamp(1.8rem, 4vw, 2.6rem)`): section headings (Work, Experience, Contact) and the contact lead's first line.
- **Sub-headline** (800, `clamp(1.4rem, 3vw, 2.1rem)`): index-row project names.
- **Title** (800, 1.15rem): experience entry roles.
- **Body** (400, 0.95–1.05rem, line-height 1.5, max ~62ch measure): bio, descriptions, summaries.
- **Label** (700, 0.68–0.85rem, letter-spacing 0.05–0.08em, uppercase): nav links, role label, index numbers, stack lines, dates, buttons, footer colophon.

### Named Rules
**The One-Family Rule.** Every size on the page is Archivo at some weight. Reaching for a second family (a serif for warmth, a mono for "technical" labels) is the old system's habit; this one proves hierarchy with weight and scale alone.

## Layout

Single-column content capped at `--max-width: 1080px`, centered with 28px side padding. The masthead name and its two-column bio/controls row live directly in the page flow — no card, no border, no background change; the huge type itself is the entire composition of the first viewport. Work renders as a stacked editorial index: each project is a full-width row (auto/1fr/auto grid — number, content, links) separated by 1px hairline rules, not boxed cards. Experience uses the same row-list pattern with a fixed 160px date column. Contact closes with a large two-line statement (headline + a separately-sized email link, deliberately not one run-on heading — an earlier draft crammed the whole email into the huge display size and it line-wrapped mid-word) followed by plain text links and a small-caps colophon footer. The header nav wraps to a second row under 640px rather than overflowing.

Section spacing: 72px vertical padding per section, sections separated by a solid 1px `Ink` rule (not a soft divider) — a stronger, more literal break than the prior system's hairline, matching the world's confident register.

## Elevation & Depth

Flat by design — the defining departure from both prior worlds. No box-shadows anywhere in this system; depth is never simulated with blur or offset. Structure comes entirely from solid 1px rules (`Ink` for major section breaks, `Line Soft` / `#cfc6b4` for internal list rows) and from the sharp 0-radius edges of every element meeting flush against its neighbor. Interactive state is color, not lift: index rows and links shift to rust on hover; nothing translates, scales, or tilts.

### Named Rules
**The Flat-By-Default Rule.** No `box-shadow` in this system. If a future component genuinely needs to separate from the page (a modal, a dropdown), that's the one place elevation may be introduced, and it should still use a hard, uncolored shadow — never a colored glow, which belongs to the prior world.

## Shapes

Zero radius everywhere — buttons, the brand mark, every container. Right angles only. The only exception is the circular nav-hover states, which don't exist in this system at all (nav links use a bottom border, not a pill). Corner language is the clearest single tell distinguishing this world from the previous one (which used consistent 3–6px rounding as part of an "instrument panel" bezel language); a rounded corner appearing anywhere in new work here is a regression to the old system, not a stylistic choice.

## Components

### Buttons
- **Primary ("Resume"):** solid `Ink` fill, `Paper` text, 0 radius, uppercase label, 14px/22px padding. Hover fills `Rust` instead of lifting or glowing.
- **Secondary (GitHub/LinkedIn, nav, contact links):** no fill — plain text with a 2px solid `Ink` underline, uppercase, tracked. Hover: underline and text color both shift to `Rust`.

### Index rows (work items)
- **Layout:** `auto 1fr auto` grid — index number, content (title/description/stack), right-aligned links.
- **Divider:** 1px `Line Soft` rule between rows, top and bottom of the list.
- **Hover:** the entire row's text (number, title, description, stack, links) shifts to `Rust` in one motion — no card boundary, no background change, no shadow, no tilt.
- **Stack line:** plain uppercase caps text, dot-separated — never a pill/chip/badge.

### Record rows (experience)
- Same list pattern as index rows, fixed 160px date column, `Rust`-colored company line as the only color break in an otherwise ink/paper row.

### Navigation
- Plain uppercase caps labels, 2px bottom border appearing only on hover (transparent at rest). No background pill, no border box. Wraps to a second row under 640px instead of scrolling or truncating.

### Grain overlay
- A fixed, full-viewport `body::after` layer using an inline SVG `feTurbulence` filter as a `background-image`, 5% opacity, `mix-blend-mode: multiply`, `pointer-events: none`. Pure CSS, no image asset, no CDN dependency. This is the system's one texture device — don't add a second (e.g. a paper background photo) without removing this one first.

## Do's and Don'ts

### Do:
- **Do** keep the whole page to one typeface (Archivo); prove hierarchy with weight and size, not a second family.
- **Do** keep every corner at 0 radius; a rounded element is a regression to the prior "instrument panel" world.
- **Do** use color only for interactive state (hover) and the role/company labels — never as decoration.
- **Do** treat every CDN-loaded enhancement (currently just GSAP) as progressive: content and layout must be correct in plain HTML/CSS first, and a failed import must be caught without breaking the page.
- **Do** keep motion hard-edged (wipes, hard slides, `power3`/`power4` eases) — a soft fade-and-float entrance belongs to the prior system, not this one.

### Don't:
- **Don't** reintroduce box-shadow, card framing, glow, tilt, or bloom effects — this world is flat and stark by definition ("anti-soft-UI"), not by omission.
- **Don't** reintroduce the graphite/amber instrument-panel palette or IBM Plex Mono/Sans — both are the confirmed anti-reference for this build.
- **Don't** hide reveal-targeted content by default in CSS; only hide-then-animate via JS after confirming the animation library loaded.
- **Don't** cram a long dynamic string (like an email address) into the huge display type size — size it down as its own element, confirmed after the first draft line-wrapped mid-word.
