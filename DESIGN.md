---
name: Gunpreet Singh — Portfolio
description: A dual-theme personal portfolio with a drifting WebGL nebula, in muted periwinkle and moss.
colors:
  paper: "#efece4"
  paper-surface: "#e7e3d9"
  paper-surface-2: "#ddd8cb"
  paper-border: "#d5cfc1"
  slate: "#131519"
  slate-surface: "#1a1d23"
  slate-surface-2: "#22262e"
  slate-border: "#2a2e37"
  ink: "#1c1e24"
  bone: "#e9e6df"
  periwinkle-deep: "#5a5e96"
  periwinkle-light: "#989dd8"
  moss-deep: "#4f6a55"
  moss-light: "#8aa88d"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 8vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  heading:
    fontFamily: "Bricolage Grotesque, Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.35rem)"
    fontWeight: 700
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.94rem–1.28rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.73rem–0.9rem"
    fontWeight: 600
    letterSpacing: "0.14em"
rounded:
  xs: "4px"
  sm: "9px"
  md: "11px"
  lg: "18px"
  lg-tight: "20px"
  xl: "24px"
  pill: "999px"
spacing:
  xs: "7px"
  sm: "13px"
  md: "20px"
  lg: "38px"
  xl: "104px"
components:
  btn-primary:
    backgroundColor: "{colors.periwinkle-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
  btn-ghost:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
  card:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "28px"
---

# Design System: Gunpreet Singh — Portfolio

## Overview

**Creative North Star: "The Warm Observatory"**

Quietly cosmic, not sci-fi. The page is a calm, warm surface — oat paper by day, deep slate by night — with a single slow-drifting celestial object behind everything. The object is real WebGL, but it is blurred far past the point of being legible as geometry, so it registers as atmosphere rather than as a 3D prop bolted onto a website. The result is meant to read as playful and senior at the same time: nothing bounces, nothing glows neon, but the page is never inert.

This is the site's fourth visual world and it fully replaces the third (a stark bone-and-rust "tactile brutalism" masthead), which in turn replaced a graphite/amber instrument panel and, before that, a default near-black/mint look. All three prior worlds are anti-reference only; this system shares no tokens with any of them. The brief that produced it was explicit: fun, spacey, and professional at once; muted grounded tones rather than mainstream palette choices; both light and dark themes as first-class citizens; and a 3D background element that integrates seamlessly and stays mobile-friendly.

Two accents carry everything: a muted **periwinkle** (the "spacey" half — dusty blue-violet, never electric indigo or the default SaaS purple gradient) and a muted **moss** (the "grounded" half — desaturated sage, never a success-state green). Both are deliberately low-saturation so they tint rather than shout.

**Key Characteristics:**
- Two full themes, neither an afterthought: warm oat paper and warm deep slate, both desaturated
- Exactly two accents (periwinkle + moss), used together as a pair in gradients and separately for state
- Soft, generous radii (9–24px, pills for actions) — the opposite of the previous world's 0-radius rule
- Depth is real but gentle: wide, low-opacity shadows and a hairline border, never a hard drop shadow
- One WebGL object, blurred into atmosphere; the page must be complete and handsome without it
- Fine grain over everything, so gradients and large flat fields never look plasticky

## Colors

Two neutral ramps (one per theme) plus a two-accent system. Every semantic token flips between themes; components reference the token, never a raw hex.

### Primary
- **Periwinkle** — `#5a5e96` deep (light theme) / `#989dd8` light (dark theme): the primary accent. Primary buttons, links, the `.glyph` project numerals, timeline dots, focus rings, and half of every accent gradient.
- **Moss** — `#4f6a55` deep (light theme) / `#8aa88d` light (dark theme): the secondary accent. The "open to work" status pip, the employer line in the timeline, and the other half of every accent gradient.

### Neutral — light theme
- **Paper** (`#efece4`): page background. Warm oat, never white.
- **Paper Surface** (`#e7e3d9`) / **Surface 2** (`#ddd8cb`): cards, contact panel, tag pills.
- **Ink** (`#1c1e24`) with dim `#55575f` and faint `#6f7078`: text ramp.
- **Border** (`#d5cfc1`) / **Border Strong** (`#c3bcab`): hairlines and ghost-button outlines.

### Neutral — dark theme
- **Slate** (`#131519`): page background. Warm-leaning near-black, never pure `#000` and never blue-cold.
- **Slate Surface** (`#1a1d23`) / **Surface 2** (`#22262e`): cards, contact panel, tag pills.
- **Bone** (`#e9e6df`) with dim `#a2a4ad` and faint `#797b85`: text ramp.
- **Border** (`#2a2e37`) / **Border Strong** (`#3a3f4a`).

### Named Rules
**The Two-Accent Rule.** Periwinkle and moss are the entire chromatic vocabulary. They may be paired in a gradient, but a third hue is never introduced for decoration; a genuine new state (destructive, warning) is the only thing that could earn one.

**The On-Accent Rule.** Never hardcode a foreground colour on a filled accent surface. `--accent` flips from *deep* in light to *light* in dark, so anything filled with it reads its foreground from `--on-accent` (`#f7f6f2` light / `#16181d` dark). This exists because the first build hardcoded near-white on the button and produced ~2.4:1 text in dark mode; the token is the fix.

## Typography

**Display / Headings:** Bricolage Grotesque — a grotesk with real personality (irregular widths, optical sizing) that supplies the "fun" without resorting to a novelty face.
**Body / UI:** Manrope — geometric, quiet, and highly legible at small sizes.

**Character:** The pairing does the brief's two jobs separately: Bricolage carries the playful, slightly quirky voice in the few places type is large, and Manrope keeps every paragraph, label, and control sober and professional. Both are chosen partly to avoid the training-default set (Fraunces, Playfair, Space Grotesk, Inter-as-display, DM Sans, Plus Jakarta, IBM Plex, and the rest), which the previous three worlds had already worked through.

### Hierarchy
- **Display** (800, `clamp(2.7rem, 8vw, 5.6rem)`, line-height 1.02): the hero statement only.
- **Heading** (700, `clamp(1.7rem, 3.4vw, 2.35rem)`): section headings; the contact panel goes slightly larger at `clamp(1.9rem, 4.4vw, 3rem)`.
- **Title** (700, 1.08–1.22rem): card and timeline-entry titles.
- **Body** (400, 0.94–1.28rem, line-height 1.6, ~48–58ch measure): lede, descriptions, summaries.
- **Label** (600, 0.73–0.9rem, `0.14em` tracking on the uppercase kicker): kickers, tags, dates, meta, buttons.

### Named Rules
**The One-Gradient-Word Rule.** The periwinkle→moss text gradient appears exactly once per page, on a two-word fragment of the hero statement. It is the page's single flourish; applying it to section headings would turn a signature into a tic.

## Layout

Single column, capped at `--max-width: 1080px`, 26px side padding via `.wrap`.

**`.wrap` owns horizontal spacing, `section` owns vertical, and neither may use the `padding` shorthand.** Both halves of this rule were learned from real bugs. First, `#about` / `#contact` are ID selectors that outrank `.wrap`'s class, so a `padding` shorthand on them zeroed the horizontal padding and pinned content to the viewport edge on narrow screens. Then the mirror image: `.wrap`'s own `padding: 0 26px` is a *class* and outranks the `section` element selector, so its implicit vertical `0` silently wiped the vertical padding from every section except `#about` — Work, Experience and Contact were running at **0px top and bottom** on all viewports, which is what made the contact panel butt straight up against the timeline. `.wrap` now uses `padding-inline` and `section` uses `padding-block`, so they address different properties and cannot collide at all.

Work is a two-column card grid collapsing to one below 860px. Experience is a rail-and-dot timeline with a fixed 168px date column, collapsing to a stacked single column below 700px. Contact is a single large rounded panel — the only full-width surface on the page, which is what makes it read as the closing invitation. The header is sticky with a translucent, backdrop-blurred background, and its nav wraps to a second row below 700px rather than overflowing or clipping.

## Elevation & Depth

Soft and atmospheric. Shadows are wide, heavily negative-spread, and low opacity, so surfaces feel lifted off the page rather than stamped onto it; every raised surface also carries a 1px border, which is what actually defines its edge. This replaces the previous world's flat, shadowless doctrine and the one before that's hard bezel language.

### Shadow Vocabulary
- **Rest** (`0 18px 40px -28px`, 45% light / 75% dark): primary buttons, contact panel.
- **Lift** (`0 26px 54px -28px`, 55% light / 85% dark): the hover state of cards and primary buttons, paired with a 2–4px `translateY`.

### Named Rules
**The Border-Defines-Edge Rule.** Shadow suggests height; the 1px border draws the actual boundary. A raised surface never relies on shadow alone, which is what keeps the soft shadows from turning into mush on the low-contrast light theme.

## Shapes

Rounded and soft throughout: 4px focus rings, 9–11px small chrome (brand mark, nav links, glyphs), 18px cards, 24px contact panel (tightening to 20px below 700px, where the panel is narrower and the full 24px reads disproportionately round), and full pills for every button, tag, and status chip. Roundness is the deliberate reversal of the previous world's 0-radius rule and is a load-bearing part of reading "friendly" rather than "severe" — sharpening the corners would put the page back in the brutalist world.

## Components

### Buttons
- **Primary:** filled `--accent`, foreground `--on-accent`, pill, rest shadow. Hover lifts 2px into the lift shadow. Never hardcode its text colour (see The On-Accent Rule).
- **Ghost:** translucent surface fill, `--border-strong` outline, pill. Hover shifts border and text to accent and lifts 2px.
- Both may carry a trailing `.arw` glyph that translates up-right on hover.

### Cards (work)
- 18px radius, translucent surface, 1px border, 28px padding, flex column so the tag row can sit on `margin-top: auto` and keep card bottoms aligned at uneven description lengths.
- Header pairs the title with a `.glyph` numeral chip in a 12% accent tint.
- Hover: 4px lift, accent border, lift shadow.
- Tags are neutral `--surface-2` pills, not accent-coloured — the accent is reserved for interactive things.

### Timeline (experience)
- A single hairline rail with hollow accent-ringed dots, a tabular-numeral date column, and a moss employer line.

### Status pill
- Pill with a moss pip and a slow `box-shadow` pulse. The pulse is gated behind `.js` and disabled under reduced motion.

### Theme toggle
- Icon button in the header; shows sun in light, moon in dark. Writes an explicit choice to `localStorage` and sets `data-theme` on `<html>`; with no stored choice the OS preference governs. An inline pre-paint script applies the stored value before first paint so the theme never flashes.

### Navigation and anchor scrolling
- Nav links are pills that mark the current section (`.is-current` + `aria-current`), set both by scroll position and immediately on click so the control responds on contact rather than after the scroll lands.
- **Anchor scrolling is owned by JS, not `scroll-behavior: smooth`.** That CSS property is honoured inconsistently — in particular when the body is a scroll container — and where it is ignored the page hard-jumps instead of scrolling. A rAF tween with an ease-in-out cubic behaves identically in every engine, lands on an offset that clears the sticky header, and is abandoned the moment the visitor scrolls manually so it never fights them. Under reduced motion it resolves instantly instead.
- Relatedly, `body` uses `overflow-x: clip` rather than `hidden`: `hidden` forces `overflow-y` to `auto`, which makes body a scroll container and is what breaks smooth scrolling and sticky positioning in some engines. `hidden` is kept as the preceding declaration so browsers without `clip` still contain the page.

### Projects revolver (mobile)
- Below 700px the projects grid becomes a full-bleed horizontal track with `scroll-snap-type: x mandatory`. Native scrolling drives it, so momentum and snap remain the platform's own; JS only paints per-frame transforms from each card's distance to centre.
- The drum read comes from `perspective-origin: 92% 50%` plus per-card `rotateY`, `translateZ`, `scale` and a small `skewY` — cards recede and rotate away as they leave the middle, and the neighbours stay visible so the rotation is legible. Cards in the track are **opaque** and carry **no blur**: the system's translucent card surface let stacked cards show through each other once rotated, and an animated `filter: blur()` repainted every card every frame and made them fail to paint mid-swipe.
- **The "warp" is deliberately faux.** A true pixel warp means rasterising the DOM to a WebGL texture, which breaks text selection and link taps and costs far more than the effect is worth. Skew plus motion blur reads as warp while the cards remain real, selectable, tappable HTML.
- Transforms are written as `--rv-*` custom properties rather than inline `transform`, so they compose with the reveal (which animates `translate`) instead of overwriting it.
- On first sight the track nudges out and back once, advertising that it rotates. Desktop keeps the plain two-column grid; the effect is bound behind a `matchMedia` listener and torn down on resize.

### Experience climb
- On first reaching the section the rail draws upward (`scaleY` from a bottom origin) and the dots light **bottom-to-top**, so the sequence reads as ascending even though the list is newest-first. The most recent role then reveals a "Looking ahead →" marker whose arrow nudges right on a slow loop.
- This replaces a requested rigged 3D figure climbing a ladder. A convincing humanoid climb needs an authored, skeletally animated model; a procedural stand-in would have read as cheap, and a downloaded rig contradicts the no-build-step, no-asset constraint. The rail carries the same narrative — ascent, arrival, looking onward — for essentially no weight.

### Background object (signature)
- A `TorusKnotGeometry` — a genuine looping structure — displaced in the vertex shader by 3D simplex noise, coloured by a two-stop periwinkle→moss mix with a light rim term, then **CSS-blurred 48–58px** so it reads as a drifting nebula. Colours, opacity, and blur radius all come from CSS custom properties, so the theme toggle re-tints the 3D object through the same tokens as the rest of the page.
- **Cursor interaction** is layered in four responses so the object reads as *aware* of the pointer rather than merely sliding with it:
  1. **Position** — camera parallax plus the knot itself leaning toward the cursor (~0.6 world units of travel across the viewport).
  2. **Attitude** — additional yaw and pitch, so moving the cursor shows you around its curves rather than translating a flat mass.
  3. **Turbulence** — pointer *speed* (not position) accumulates an `energy` value that both deepens `uAmp` and advances the noise clock up to 2.4× faster, so a quick flick makes the surface visibly churn, then settles. Energy decays frame-rate independently (`pow(0.06, dt)`).
  4. **Colour** — cursor X drives `uMix`, tipping the periwinkle/moss balance about ±0.17. This is the response that matters most: at 48–58px of blur, fine shading detail is destroyed, and a hue shift is the one change that reliably survives to the eye.
- All four ease toward their targets rather than tracking the cursor rigidly, and the object returns to rest on `mouseleave`. The interaction is bound only behind `(hover: hover) and (pointer: fine)` and never under reduced motion.
- **Mobile and performance:** because the output is blurred, resolution is nearly free to give away — the renderer runs at a *sub-native* pixel ratio (0.8 desktop, 0.6 mobile) with antialiasing off and `powerPreference: 'low-power'`, and the mesh drops to 128×16 segments below 760px. It pauses in a background tab, clamps delta so a resumed tab cannot jump, renders a single static frame under `prefers-reduced-motion`, and binds no pointer listener at all on touch devices.
- **Placement:** kept to the upper right on desktop and high-centre on mobile so the diffuse mass never sits behind the headline and erodes its contrast. Cursor offsets are applied *relative to* that rest position, which is stored on resize rather than baked into the mesh.

## Do's and Don'ts

### Do:
- **Do** read every theme-dependent colour from a semantic custom property; both themes must be checked whenever one is touched.
- **Do** use `--on-accent` for any foreground on a filled accent surface.
- **Do** use `padding-block` (not the `padding` shorthand) on any section that also carries `.wrap`.
- **Do** keep the 3D object subordinate: blurred, low-opacity, and positioned clear of running text. The page must look finished with the canvas removed entirely.
- **Don't** put vertical scroll snap on the page at all. It was tried at `proximity`, the gentlest setting, and still fought the reader partway through a section (sections are taller than the viewport) and tugged at the end of nav tweens. Horizontal snap *inside* the projects carousel is a different case and is correct there.
- **Do** animate only `transform` and `opacity` in the carousel — both are compositor-only. An animated `filter: blur()` repaints every card every frame.
- **Do** keep carousel cards opaque, since rotated cards overlap heavily and a translucent surface shows through to the card behind.
- **Do** keep large CSS blurs off anything fixed and full-viewport on mobile. Profiling a throttled scroll isolated the blurred background canvas as the single largest source of dropped frames (removing it alone took janky frames from 9/128 to 0/139), with the header's `backdrop-filter` second. Below 700px the canvas blur drops to 26px, the scene renders at 0.35x resolution to buy the softness back, it paints at ~30fps instead of 60, and the header goes near-opaque instead of blurring its backdrop.
- **Do** set that mobile blur on `#bg-canvas` directly, not by overriding `--blob-blur`. The theme selectors (`:root[data-theme="dark"]`, `:root:not([data-theme="light"])`) are more specific than a bare `:root`, so a custom-property override in a media query silently loses in dark mode.
- **Do** treat WebGL and the webfonts as progressive enhancement — the CSS radial-gradient background and the fallback font stack are the real baseline, and a failed dynamic import must be caught and swallowed.

### Don't:
- **Don't** add a third accent hue, or reach for a mainstream indigo/violet gradient — the muted periwinkle/moss pair is the whole point of the brief.
- **Don't** sharpen the radii or remove the shadows; that is the previous (rejected) brutalist world, not this one.
- **Don't** let the background object become legible geometry. If someone can tell it is a torus knot, the blur is too low and it stops being atmosphere.
- **Don't** raise the blob's opacity to where it competes with body-copy contrast in the light theme — light is the fragile case, since the object is darker than the paper.
- **Don't** hide content by default in CSS for reveal animations; the `.js`-gated `.reveal` pattern exists so content can never be stranded invisible.
