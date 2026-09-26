export type Illustration = {
  title: string
  meta: string
  src?: string
  placeholder?: boolean
  /** How the image fills the fixed frame. Defaults to cover (cropped, top-anchored). */
  objectFit?: "cover" | "contain"
}

export const ILLUSTRATIONS: Illustration[] = [
  {
    src: "/images/drawings/cards.jpg",
    title: "Cards",
    meta: "Digital and markers, 2026",
  },
  {
    src: "/images/drawings/transit.jpg",
    title: "Transit",
    meta: "Digital, 2026",
    objectFit: "contain",
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
    meta: "Digital and acrylic markers, 2025",
  },
  {
    src: "/images/drawings/tiger.jpg",
    title: "Tiger",
    meta: "Digital and acrylic markers, 2026",
  },
]

/** Real illustration assets only — no dashed placeholders. */
export const POSTER_DESIGNS = ILLUSTRATIONS.filter(
  (art): art is Illustration & { src: string } => Boolean(art.src) && !art.placeholder
)
