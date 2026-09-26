export type Illustration = {
  title: string
  meta: string
  src?: string
  placeholder?: boolean
}

export const ILLUSTRATIONS: Illustration[] = [
  {
    src: "/images/drawings/cards.jpg",
    title: "Cards",
    meta: "Digital and markers, 2026",
  },
  {
    title: "Title",
    meta: "medium, year",
    placeholder: true,
  },
  {
    src: "/images/drawings/vcola.jpg",
    title: "Vcola",
    meta: "Digital and acrylic markers, 2025",
  },
  {
    src: "/images/drawings/mattab.jpg",
    title: "Mattab",
    meta: "Digital and acrylic markers, 2025",
  },
  {
    src: "/images/drawings/fish.jpg",
    title: "Fish",
    meta: "Markers and digital, 2025",
  },
  {
    src: "/images/drawings/tiger.jpg",
    title: "Tiger",
    meta: "medium, year",
  },
]

/** Real illustration assets only — no dashed placeholders. */
export const POSTER_DESIGNS = ILLUSTRATIONS.filter(
  (art): art is Illustration & { src: string } => Boolean(art.src) && !art.placeholder
)
