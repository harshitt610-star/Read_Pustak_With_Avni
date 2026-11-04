---
name: Literary Editorial
colors:
  surface: '#fff7ff'
  surface-dim: '#e2d5ed'
  surface-bright: '#fff7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf0ff'
  surface-container: '#f6e9ff'
  surface-container-high: '#f1e3fc'
  surface-container-highest: '#ebdef6'
  on-surface: '#201829'
  on-surface-variant: '#4a4450'
  inverse-surface: '#352d3f'
  inverse-on-surface: '#f8edff'
  outline: '#7c7481'
  outline-variant: '#ccc3d1'
  surface-tint: '#704e9c'
  primary: '#1c003c'
  on-primary: '#ffffff'
  primary-container: '#35105f'
  on-primary-container: '#a17dcf'
  inverse-primary: '#d9b9ff'
  secondary: '#7d5700'
  on-secondary: '#ffffff'
  secondary-container: '#ffc55f'
  on-secondary-container: '#755100'
  tertiary: '#160f19'
  on-tertiary: '#ffffff'
  tertiary-container: '#2c232e'
  on-tertiary-container: '#968997'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eedcff'
  primary-fixed-dim: '#d9b9ff'
  on-primary-fixed: '#2a0054'
  on-primary-fixed-variant: '#573582'
  secondary-fixed: '#ffdeaa'
  secondary-fixed-dim: '#f5bd58'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5f4100'
  tertiary-fixed: '#eddeee'
  tertiary-fixed-dim: '#d1c2d1'
  on-tertiary-fixed: '#211924'
  on-tertiary-fixed-variant: '#4e4350'
  background: '#fff7ff'
  on-background: '#201829'
  surface-variant: '#ebdef6'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 68px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 50px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: '0'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  title-editorial:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies a modern literary salon: refined, inspiring, and distinctly editorial. Built for a distinguished young author and independent publishing imprint, the aesthetic balances the timeless gravity of classic book design with contemporary digital elegance.

The visual narrative relies on deliberate pacing, generous margins reminiscent of wide book folios, and delicate ornamentations. Every element conveys trust, creative vitality, and artistic prestige. The design movement is a sophisticated blend of Modern Editorial and Warm Literary Minimalism—eschewing sterile corporate conventions in favor of tactile warmth, rich purple anchors, and restrained antique gold embellishments.

## Colors

The palette establishes an immediate sense of literary heritage and luminous craft:

- **Primary Deep Royal Purple (`#35105F`):** Anchors page titles, key call-to-actions, headers, footers, and institutional brand touchpoints. Represents authorial prestige and gravitas.
- **Secondary Antique Gold (`#D9A441`):** Applied deliberately for book awards, star accents, refined borders, gilded rules, and high-value micro-interactions.
- **Tertiary Soft Lavender Pink (`#F4E4F4`):** Provides gentle editorial contrast for callout cards, quotation blocks, soft badge backgrounds, and spotlight sections.
- **Warm Ivory Background (`#FFF9F1`):** The primary paper-like canvas throughout the experience, reducing eye fatigue and evoking premium archival book stock.
- **Pure White (`#FFFFFF`):** Reserved for elevated surface containers, navigation bars, and publication card backings to create clean, readable planes against the warm canvas.
- **Dark Charcoal Neutral (`#30283A`):** Deep, legible text neutral carrying a faint warm-violet undertone to harmonize seamlessly with the royal purple.

## Typography

The typographical pair establishes tension between classical literature and modern publishing clarity:

- **Headlines (Playfair Display):** Selected for high-contrast transitional serif elegance, bringing the cadence of printed hardcover titles, editorial reviews, and chapter openings.
- **Body & Labels (Plus Jakarta Sans):** Selected for warm, open apertures and high legibility across digital devices. It contrasts gently against the serif headers while keeping body copy fluid and contemporary.
- **Editorial Flourishes:** Italicized serif treatments are encouraged for pull quotes, author notes, and chapter subheadings. Section headers may pair an all-caps label (e.g., `label-sm` with letter-spacing) above a `headline-lg` title.

## Layout & Spacing

The layout philosophy mirrors literary publications: intentional breathing room, rhythmic vertical cadence, and structured margins.

- **Grid Architecture:** 12-column fixed-max-width grid (capped at 1280px) on desktop to guarantee controlled line lengths (55–75 characters per line for reading comfort). Fluid single-column layout on mobile devices.
- **Breakpoints:** Mobile (< 768px), Tablet (768px – 1024px), Desktop (> 1024px).
- **Vertical Rhythm:** Section-level padding uses dramatic breathing space (`space-xl` scaled up to `5rem`–`6rem` on desktop) to allow editorial vignettes, book covers, and author reflections to stand out distinctly.

## Elevation & Depth

Visual hierarchy relies on quiet tactile depth rather than stark digital drops:

- **Ambient Tinted Shadows:** Shadows utilize warm purple tones rather than harsh black (`rgba(53, 16, 95, 0.06)` to `rgba(53, 16, 95, 0.12)`). This imparts a soft, velvety paper lift under publication cards and hover states.
- **Low-Contrast Fine Outlines:** Surfaces are frequently bordered by hairline strokes (`1px solid rgba(53, 16, 95, 0.08)` or `1px solid rgba(217, 164, 65, 0.3)`) mimicking fine bookbinding and stationery.
- **Layered Paper Metaphor:** White surfaces sit upon the warm ivory canvas (`#FFF9F1`), creating natural physical dimension without requiring heavy drop shadows.

## Shapes

The design system maintains a balanced `0.5rem` (`8px`) baseline corner radius. This conveys modern polish without drifting into juvenile playfulness. 

- **Cards & Surfaces:** Styled with subtle rounding (`rounded-lg` / `16px`) to keep silhouettes structured and book-like.
- **Pill Accents:** Reserved strictly for author genre tags, status pills, and small badges to juxtapose against the structured rectangular format of book jackets and cards.

## Components

### Buttons
- **Primary:** Deep Royal Purple (`#35105F`) background with Pure White text. Hover state shifts with subtle elevation and a faint Antique Gold border (`1px solid #D9A441`).
- **Secondary / Ghost:** Transparent background, `1.5px` border in `#35105F` or `#D9A441`, styled with `label-md` typography.
- **Text Button:** Understated text link in `#35105F` accompanied by an Antique Gold animated underline effect on hover.

### Cards & Book Displays
- **Publication Card:** Pure White background, `rounded-lg` radius, `1px solid rgba(53, 16, 95, 0.08)`, softly lifted on hover with an ambient tinted shadow. Features space for book jacket imagery, gold star ratings/accolades, and metadata.
- **Spotlight / Feature Card:** Soft Lavender Pink (`#F4E4F4`) background, Antique Gold left border (`3px solid #D9A441`), designed for author quotes, upcoming releases, or literary awards.

### Chips & Badges
- **Editorial Tag:** Pill-shaped, Soft Lavender Pink background, Deep Royal Purple text (`#35105F`), `label-sm` typography.
- **Gilded / Award Badge:** Antique Gold tinted background (`rgba(217, 164, 65, 0.12)`), Antique Gold border (`1px solid #D9A441`), and Deep Royal Purple text, paired with a small star icon.

### Form Inputs & Checkboxes
- **Input Fields:** Warm white surface, border `1px solid rgba(53, 16, 95, 0.15)`. Active/focus state transitions to a refined Deep Royal Purple border with a `2px` subtle antique gold glow ring.
- **Checkboxes & Radios:** Royal Purple fill when active with gold checkmarks or indicators, maintaining deliberate literary precision.

### Editorial Ornaments
- **Section Dividers:** Fine decorative dividers featuring a centered antique gold diamond or star ornament, honoring heritage printing traditions.
- **Blockquotes:** Large serif quotation mark in `#D9A441` with `headline-md` typography in `#35105F`.