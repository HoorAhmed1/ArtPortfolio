# Handoff: By Hour — comics portfolio site

## Overview

A single-page portfolio for Hour Ahmed, a Cairo-based comics and mixed-media artist. It replaces
the existing site at https://hour-art-portfolio.vercel.app, which is a flat grid of posters and
bookmarks. This redesign leads with a complete comic book, presented as a page-turning reader, and
cuts the illustration work down to a short edit. The purpose is a jury submission to a comics
exhibition, so the page is ordered the way a juror reads: who, what the book is, the book itself,
proof of craft, then everything else.

## About the design files

The files in this bundle are **design references written in HTML**. They are a prototype of the
intended look and behaviour, not production code to lift. The task is to rebuild this in the
existing site's environment — the live site is a React/Next.js app deployed on Vercel, so the work
is to add these sections and this reader to that codebase using its own components and conventions.
Do not port the prototype's authoring format.

`Comics Portfolio.dc.html` is authored in a component format whose markup lives between the
`<x-dc>` tags and whose behaviour lives in the `class Component` script at the bottom. Read both.
All styling is inline on the elements, so every value below is visible in the source.

## Fidelity

**High fidelity.** Colours, type sizes, spacing and interaction are final. Recreate faithfully.
The one exception: the prototype pulls its colour values from a design-token stylesheet that is
specific to the prototyping environment. Use the hex values listed under **Design tokens** instead.

## Page structure

Single scrolling page, one column, content capped at **1040px** and centred, **24px** horizontal
page padding, **120px** bottom padding. Page background `#F7F8FA`. Body type Figtree; Arabic text
set in IBM Plex Sans Arabic with `dir="rtl"`.

Every section after the header is preceded by a two-part eyebrow: a monospace two-digit index
(`01`, `02`, …) in `#98A2B3` at 11px/700/0.14em tracking, followed by the section name at
13px/800/0.14em tracking, uppercase, `#667085`. Sections are separated by 88px of bottom padding
and lay out their contents in a flex column with 32px gap.

### Header

96px top padding, 56px bottom.

- **Name** — `Hour Ahmed`, 56px / 800 / line-height 1.02 / letter-spacing -0.035em / `#101828`.
- **Role line** — `Comics and mixed-media artist. Cairo, Egypt.` 17px / `#667085`.
- **Link row**, right-aligned on the same baseline, wraps below on narrow screens. Three pills,
  9px 16px padding, fully rounded. "Email" is the primary: background `#FEEE00`, text `#101828`,
  weight 700. "Instagram" and "TikTok" are secondary: white background, 1px `#E4E7EC` border,
  text `#344054`, weight 600.
- **Intro paragraph** — 19px / line-height 1.6 / `#344054`, capped at 640px.
- **Editorial note** — a dashed-border callout, `#FFFBE0` background, 1px dashed `#CDD3DC`, 10px
  radius. Uppercase "REPLACE" label plus a 12px note. This is scaffolding for the artist; it is not
  part of the finished site. Drop it in the real build.

### 01 — Comic book

Two-column grid, `repeat(auto-fit, minmax(300px, 1fr))`, 40px gap, items aligned to start.

Left: the cover image in a 16px-radius card, 1px `#E4E7EC` border, white background, shadow
`0 12px 40px rgba(16,24,40,0.10)`, image `width: 100%`.

Right, stacked with 22px gap:
- **Arabic title** `ذباب وعودة` — 44px / 700 / line-height 1.2 / `#101828`, `dir="rtl"`.
- **Transliteration line** — 15px / `#667085`. The inline Arabic inside it keeps the Arabic face.
- **Synopsis** — 17px / line-height 1.65 / `#344054`.
- **Fact grid** — `repeat(auto-fit, minmax(150px, 1fr))` with a 1px gap over an `#E4E7EC`
  background, so the gap reads as hairlines; outer 1px border, 12px radius, overflow hidden. Each
  cell is white, 14px 16px padding, with an 11px/700/uppercase `#98A2B3` label above a 15px/600
  `#101828` value. Six cells: Year, Pages, Language, Medium, Format, Credits.
- A second dashed "CHECK" callout, same treatment as the header's. Also scaffolding.

### 02 — Read it: the seven-page reader

This is the centrepiece and the part the old site lacked. One page is shown at a time.

Layout, in a flex column with 18px gap:

1. **Viewer row** — flex, centred, 14px gap, full width. No background plate; the page sits
   directly on the site background. Left button, image, right button.
   - **Buttons** — 42×42px circles, white, 1px `#E4E7EC` border, glyphs `‹` and `›` at 20px in
     `#101828`. Hover fills `#F2F4F7`. Because the comic is Arabic and reads right to left, the
     **left button advances** and the **right button goes back**.
   - **Page image** — `max-height: 78vh`, `max-width: 100%`, auto width/height so the aspect ratio
     holds, 4px radius, 1px `#E4E7EC` border, white background, shadow
     `0 10px 34px rgba(16,24,40,0.10)`.
2. **Caption row** — space-between, wraps. On the left: a monospace `Page N` in `#101828` at
   12px/700, then the page's one-line caption at 14px `#667085`. On the right, monospace 12px
   `#98A2B3`: `N / 7 · reads right to left · ← → keys`.
3. **Thumbnail rail** — flex, `row-reverse` so page 1 sits on the right, wrapping, centred, 10px
   gap. Each thumb is a 58px-wide button, 6px radius, white, no padding. The active thumb has a 2px
   `#101828` border and full opacity; the others have a transparent 2px border and `opacity: 0.45`.
   Clicking a thumb jumps to that page.

**Do not set the `src` attribute from a reactive value at parse time in the prototype's format** —
that detail is an artefact of the prototyping runtime and is irrelevant in React. In React, a plain
`<img src={pages[i].src}>` is correct.

### 03 — Process

Three equal cards, `repeat(auto-fit, minmax(240px, 1fr))`, 20px gap. Each is a 16px-radius box,
1px **dashed** `#CDD3DC`, white, `min-height: 260px`, contents bottom-aligned with 20px padding:
a 13px/700 `#101828` title over a 13px `#667085` description.

These are empty placeholders in the prototype — the artist has not supplied the images yet. In the
real build they become three ordinary captioned images:

1. **Rough layout** — the scribbled panel plan for one page.
2. **Pencils before ink** — the same page at pencil stage.
3. **Character sheet** — the fly drawn six or seven times in different poses and expressions.

### 04 — Selected illustration

Three captioned images, `repeat(auto-fit, minmax(220px, 1fr))`, 24px gap. Each figure: image in a
12px-radius, 1px `#E4E7EC` bordered white card, with a 13px caption below — title in `#101828`/600,
then ` · medium, size, year` in `#667085`. Followed by a 14px `#667085` note capped at 620px.

Images (currently referenced from the existing live site):
`/images/drawings/mattab.png`, `/images/drawings/v7.png`, `/images/drawings/fish.png`.

The old site showed nine of these. Three is deliberate.

### 05 — Digital illustration

Two placeholder figures, `repeat(auto-fit, minmax(280px, 1fr))`, 24px gap. Each placeholder is a
16px-radius dashed `#CDD3DC` box with `aspect-ratio: 4 / 5`, white, label bottom-aligned at 20px
padding. Caption below reads `Title · digital · 2026`. Two finished digital pieces go here.

### 06 — Bookmarks

Intro line at 15px `#344054`, capped 620px. Then a grid of five bookmark images:
`grid-template-columns: repeat(5, minmax(0, 88px))`, 16px gap, items aligned to start — so the
column is narrow and left-aligned rather than stretching across the page. Each image 8px radius,
1px `#E4E7EC` border, white background.

Images: `/images/bookmarks/bookmark1.png` … `bookmark5.png`.

### Footer

1px `#E4E7EC` top border, 40px top padding, space-between, wraps. Left: name at 18px/700 `#101828`
over a 14px `#667085` line. Right: a 20px-gap row of text links — Email, Instagram, TikTok,
High-res files.

## Interactions & behaviour

The reader is the only interactive element.

- State: a single integer `i`, the current page index, `0`–`6`, initial `0`.
- Left button / `ArrowLeft`: `i = min(6, i + 1)`.
- Right button / `ArrowRight`: `i = max(0, i - 1)`.
- Thumbnail click: `i = n`.
- Clamped at both ends — no wrap-around. Buttons stay enabled at the ends in the prototype; give
  them a disabled style in the real build if the codebase has one.
- The keyboard listener is bound to `window` on mount and removed on unmount.
- No transition between pages. If you add one, keep it under 150ms and cross-fade only — a slide
  would fight the right-to-left reading direction.

Consider adding, since this is a real site and the prototype does not cover it: a click-to-zoom
or lightbox on the current page (jurors will want to read the lettering), and preloading page
`i + 1`.

## Responsive behaviour

Everything is fluid. All grids use `auto-fit`/`minmax`, so they collapse to one column on narrow
viewports without breakpoints. The header link row and the caption row both wrap. The one fixed
measurement is the bookmark grid's five 88px columns — give that a wrapping fallback on mobile.
The page image is capped by `78vh`, so tall screens do not push the caption off-screen.

## Design tokens

Colours (these come from the prototyping environment's token set; map them to the codebase's own
palette if it has one):

| Role | Hex |
|---|---|
| Page background | `#F7F8FA` |
| Card / surface | `#FFFFFF` |
| Inset (button hover) | `#F2F4F7` |
| Hairline border | `#E4E7EC` |
| Strong border (dashed placeholders, inputs) | `#CDD3DC` |
| Ink (headings, active states) | `#101828` |
| Body text | `#344054` |
| Muted text (captions, labels) | `#667085` |
| Faint text (indices, counters) | `#98A2B3` |
| Brand accent (primary button only) | `#FEEE00` |
| Brand tint (callout background) | `#FFFBE0` |
| Link | `#1F6FEB` |

The accent is used for exactly one thing: the primary Email button. Do not extend it to hovers,
dividers, or section headings.

Typography: **Figtree** 400/500/600/700/800 for Latin; **IBM Plex Sans Arabic** 400–700 for Arabic;
the browser monospace stack (`ui-monospace, Menlo, monospace`) for indices, page numbers and the
counter. Sizes in use: 11, 12, 13, 14, 15, 17, 18, 19, 44, 56px.

Radii: 4px (comic page), 6px (thumbnail), 8px (bookmark), 10px (callout), 12px (small card),
16px (large card), 999px (pills and arrows).

Shadows: `0 12px 40px rgba(16,24,40,0.10)` on the cover, `0 10px 34px rgba(16,24,40,0.10)` on the
current comic page. Nothing else carries a shadow.

Spacing: 6, 10, 14, 16, 18, 20, 22, 24, 32, 40, 56, 88, 96, 120px.

## Assets

- `comic/cover.jpeg` and `comic/p1.jpeg` … `p7.jpeg` — the comic book, supplied by the artist as
  phone photos of the scanned pages. **These are compressed WhatsApp exports.** The artist also has
  the book as an EPUB; re-export the pages from that source at full resolution before shipping.
  Serve them as WebP with a JPEG fallback and lazy-load everything past the first page.
- Illustrations and bookmarks are already hosted on the live site under `/images/drawings/` and
  `/images/bookmarks/` and are referenced by absolute URL in the prototype. Use local paths.
- Fonts are loaded from Google Fonts in the prototype. Self-host if the codebase does.

## Content that is still placeholder

Flag these to the artist before launch; they are drafts written from the artwork, not supplied copy:

- The intro paragraph in the header and the email address (`hello@example.com`).
- The synopsis and every value in the fact grid (year, page count, format, credits).
- All captions under the seven comic pages.
- Every caption in sections 04, 05 and 06.

## Files in this bundle

- `Comics Portfolio.dc.html` — the full design. Markup between the `<x-dc>` tags, reader logic in
  the `class Component` script at the end.
- `comic/` — cover plus the seven interior pages.
