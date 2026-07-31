---
name: Gunpreet Singh — Portfolio
description: A personal engineering portfolio styled as a scientific instrument control panel.
colors:
  signal-amber: "#e2a33b"
  signal-amber-dim: "#8c6a2e"
  graphite-base: "#191815"
  panel: "#211f1b"
  panel-raised: "#262420"
  line: "#3a352c"
  line-soft: "#2a2721"
  paper-text: "#ede7dc"
  paper-text-dim: "#a89d8b"
  paper-text-faint: "#6f6656"
typography:
  display:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "0.93rem–1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.66rem–0.85rem"
    fontWeight: 500
    letterSpacing: "0.04em–0.08em"
rounded:
  xs: "2px"
  sm: "3px"
  md: "4px"
  lg: "6px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "28px"
  xl: "44px"
components:
  key-primary:
    backgroundColor: "{colors.signal-amber}"
    textColor: "#1a1509"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  key-secondary:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.paper-text}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  module-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.paper-text}"
    rounded: "{rounded.lg}"
    padding: "26px 28px"
---

# Design System: Gunpreet Singh — Portfolio

## Overview

**Creative North Star: "The Bench Instrument"**

The site reads as a precision instrument control panel — the kind of calibrated console you'd find on lab or broadcast equipment — rather than a landing page pitching a product. It's built to be operated, not sold: a nameplate, labeled modules, a calibrated scale, a patch panel. Nothing on the page asks the visitor to convert; it exists to be read and used like a piece of equipment someone assembled with care.

This is a deliberate rejection of the site's own first draft, which used the default AI-generated dev-portfolio look: near-black background, mint/cyan accent, glowing card shadows, monospace-as-costume. That look is documented here only as the confirmed anti-reference. The instrument-panel world replaces it entirely: warm graphite instead of cool near-black, a single brass/amber signal color instead of neon glow, IBM Plex (Sans + Mono) instead of Inter/JetBrains Mono, and an oscilloscope trace as the one authored motion signature instead of a generic floating 3D shape.

The oscilloscope started as a dependency-free Canvas 2D drawing, then was rebuilt in Three.js (real WebGL depth, a GridHelper screen, an UnrealBloomPass for authentic phosphor glow) once the threejs-webgl skill was available — same signature, real technique instead of a 2D imitation of one. Scroll reveals moved from a hand-rolled IntersectionObserver to GSAP + ScrollTrigger, and module tilt moved from a hand-rolled mousemove handler to Vanilla-Tilt.js (lightweight-3d-effects skill). All three load from CDN as progressive enhancement: content and layout are correct in plain HTML/CSS with no JS, each enhancement hides-then-animates only after confirming it loaded, and each fails independently (try/catch) without breaking the other two or the page.

**Key Characteristics:**
- Warm graphite base, never near-black or pure black
- One committed accent (brass/amber), used for signal/state, never decoration
- Every surface reads as a labeled, calibrated module — plate tags, tick rules, riveted corners
- Real elevation shadows (offset + blur), never a zero-offset colored glow on UI chrome
- One authored motion moment (the oscilloscope trace); everything else is a state response, not a scattered effect

## Colors

A single committed accent against a warm graphite scale — no secondary or tertiary hue.

### Primary
- **Signal Amber** (`#e2a33b`): the one accent. Used for the nameplate role label, plate tags, active nav/hover states, primary CTA fill, focus rings, status LEDs, and the oscilloscope trace. Nothing else uses color.
- **Signal Amber Dim** (`#8c6a2e`): borders and dividers on accent-adjacent elements (module-link borders, plate-tag borders) where full-strength amber would be too loud.

### Neutral
- **Graphite Base** (`#191815`): page background. Warm, not cool — explicitly not the `#0E1013`-style near-black the redesign rejected.
- **Panel** (`#211f1b`): module/card surface, one step up from the base.
- **Panel Raised** (`#262420`): hover/pressed surface for interactive chrome (keys, jack rows).
- **Line** (`#3a352c`): structural dividers, borders, tick marks.
- **Line Soft** (`#2a2721`): the body's graph-paper grid; quieter than `Line`.
- **Paper Text** (`#ede7dc`): primary text. Warm off-white, not stark white.
- **Paper Text Dim** (`#a89d8b`): secondary/body copy on dark surfaces.
- **Paper Text Faint** (`#6f6656`): tertiary labels, channel numbers, footer plate text.

### Named Rules
**The One Signal Rule.** Amber is the only color in the system besides the graphite/paper neutrals. If a second hue is needed for a future state (e.g. an error), it must earn its place the same way amber did — never added as decoration.

## Typography

**Display/Body Font:** IBM Plex Sans (with system-ui, sans-serif fallback)
**Label/Mono Font:** IBM Plex Mono (with monospace fallback)

**Character:** A technical, engraved-plate voice. Plex Sans carries both display and body so the system reads as one coherent instrument typeface rather than a display/body pairing; Plex Mono is reserved for anything that functions as a label, measurement, or data value — never used decoratively "for the tech look."

### Hierarchy
- **Display** (700, `clamp(2rem, 4.4vw, 3rem)`, line-height 1.1, letter-spacing -0.02em): the nameplate `<h1>` only.
- **Headline** (700, `clamp(1.5rem, 3vw, 1.9rem)`): section headings (Modules, Service record, Patch panel).
- **Title** (700, 1.08–1.2rem): module and timeline entry names.
- **Body** (400, 0.93–1rem, line-height 1.6, max 65–68ch measure): descriptions, bios, summaries.
- **Label** (500–600, 0.66–0.85rem, letter-spacing 0.04–0.08em, uppercase where stated): nav links, plate tags, spec lines, channel numbers, status text — always IBM Plex Mono.

### Named Rules
**The Labels-Are-Mono Rule.** Monospace is used exclusively for things that are actually labels, data, or measurements (STACK lines, dates, channel numbers, status). It never appears on body prose or headings — mono-as-costume is the exact tell this system was built to avoid.

## Layout

Single-column content capped at `--max-width: 900px`, centered with 24px side padding. Sections stack vertically, separated by a 1px `Line` border rather than whitespace alone. The About/nameplate module uses a two-column grid (1.3fr text / 1fr oscilloscope readout) above 720px, collapsing to one column below it. Work renders as a single-column stack of full-width modules (not a multi-column card grid) so each module reads as a full instrument panel, not a tile. Experience uses a left-aligned vertical scale (a ruler with tick dots) rather than a two-column date/content grid. The header nav wraps to a second row under 640px instead of overflowing or truncating.

Section spacing rule: more space precedes a section head (64px top padding + the divider) than follows the heading before body content begins (44px), per the "space above > space below a heading" heuristic.

## Elevation & Depth

Layered, not flat: panels sit above the graphite base on real elevation shadows (negative-offset, blurred, uncolored), never a zero-offset colored halo. The one deliberate exception is the oscilloscope trace itself, now a Three.js scene with a real `UnrealBloomPass` (strength 1.1, radius 0.4, threshold 0.15) — that's an authored property of the depicted instrument (a literal light-emitting phosphor trace), not UI chrome faking depth.

### Shadow Vocabulary
- **Nameplate elevation** (`box-shadow: 0 20px 40px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03)`): the hero module; largest, softest shadow plus a 1px inner highlight for a bezel edge.
- **Module elevation** (`box-shadow: 0 10px 24px -16px rgba(0,0,0,0.55)`), hover state `0 16px 32px -18px rgba(0,0,0,0.65)` with a 2px lift: Work modules.

### Named Rules
**The Real-Shadow Rule.** Every `box-shadow` carries an offset and blur. A `0 0 Npx accent-color` halo is banned on UI chrome; it is decoration wearing the name of depth.

## Shapes

Corners are quietly rounded (3–6px), never sharp and never pill-shaped — the panel-and-plate language wants a machined edge, not a soft consumer-app curve. Structural rhythm comes from hairline (1px) borders and repeating tick-mark patterns (`repeating-linear-gradient`), not from shape variation. The nameplate module carries two small circular rivet marks at its top corners; this detail is reserved for the hero module only, not repeated on every panel.

## Components

### Buttons ("keys")
- **Shape:** 4px radius, 1px border with a 2px bottom border (mechanical key bevel).
- **Primary:** amber gradient fill (`#f0b658` → `#e2a33b`), near-black text (`#1a1509`).
- **Secondary:** panel-raised-to-panel gradient fill, paper text.
- **Hover / Focus:** border shifts to amber-dim/amber; `:focus-visible` gets a 2px solid amber outline with 2px offset. Active state presses down 1px and loses the bottom-border thickness, simulating a physical key press.

### Modules (work items)
- **Corner style:** 6px radius.
- **Background:** Panel.
- **Shadow strategy:** see Module elevation above; hover lifts 2px and deepens the shadow.
- **Border:** 1px Line, shifting to Amber Dim on hover.
- **Internal padding:** 26px/28px.
- **Status indicator:** a 6px amber LED dot + mono status label, not a colored badge/chip.
- **Tilt:** Vanilla-Tilt.js (max 6°, perspective 1200, subtle glare) when it loads; the CSS hover lift/border-glow above is both the reduced-motion state and the no-JS/blocked-CDN fallback — never a hidden default.

### Patch panel (contact)
- **Style:** rows ("jacks") inside one bordered panel, each with a channel number (CH1/CH2/CH3), a hollow dot that fills amber on hover, a label, and a value.
- **State:** hover tints the row background to Panel Raised and the value text to amber.

### Navigation
- Mono labels, transparent by default, gaining a Line border and Panel background on hover/active. Wraps to a second row rather than scrolling or truncating below 640px.

## Do's and Don'ts

### Do:
- **Do** keep amber as the only accent color; express new states (success, error) as amber intensity/position changes before reaching for a second hue.
- **Do** use IBM Plex Mono only for labels, data, and measurements.
- **Do** give every shadow a real offset and blur.
- **Do** keep the oscilloscope as the system's one signature motion moment; new pages should each get at most one authored motion idea, not scattered hover effects.
- **Do** use the graph-paper grid only on canvas/measurement/blueprint-like surfaces (it's already page-wide here because the whole page plays a calibrated-instrument surface; a new, unrelated surface should earn it the same way, not inherit it by default).
- **Do** treat every CDN-loaded enhancement (Three.js, GSAP, Vanilla-Tilt) as progressive: real content and layout must be correct in plain HTML/CSS first, JS only adds motion on top, and each library's failure must be caught independently so one blocked script never takes down another or the page.

### Don't:
- **Don't** reintroduce the near-black + neon-glow dev-portfolio look this redesign replaced.
- **Don't** hide `.reveal` content by default in CSS; only hide-then-animate via JS after confirming the animation library loaded.
- **Don't** add a second accent color for decoration.
- **Don't** use pill-shaped buttons or badge/chip components — status and tags render as mono label + dot/LED instead.
- **Don't** stack more than one rivet/corner-mark detail per page; it's a hero-module accent, not a repeating card motif.
