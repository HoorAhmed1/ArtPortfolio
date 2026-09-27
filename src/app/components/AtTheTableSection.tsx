"use client"

import { useCallback, useState, type ReactNode } from "react"
import { SectionEyebrow } from "@/app/components/SectionEyebrow"
import { POSTER_DESIGNS } from "@/app/data/illustrations"

type Product = {
  id: string
  title: string
  subtitle: ReactNode
  meta?: string
  image: ReactNode
}

type CarouselSlide = {
  src: string
  alt: string
}

const BOOKMARK_SRCS = [
  "/images/bookmarks/bookmark1.png",
  "/images/bookmarks/bookmark2.png",
  "/images/bookmarks/bookmark3.png",
  "/images/bookmarks/bookmark4.png",
  "/images/bookmarks/bookmark5.png",
] as const

const MOUSEPAD_SLIDES: CarouselSlide[] = [
  {
    src: "/images/notes/fish-mousepad-desk.jpg",
    alt: "Fish mouse pad on a desk with a laptop and coffee",
  },
  {
    src: "/images/notes/fish-mousepad.jpg",
    alt: "Fish mouse pad with a black wireless mouse on a white surface",
  },
]

const COMIC: Product = {
  id: "comic",
  title: "The comic book",
  subtitle: (
    <span dir="rtl" lang="ar" className="font-arabic">
      ذباب وعودة
    </span>
  ),
  meta: "A4, 8 pages",
  image: (
    <img
      src="/images/comic/cover.jpeg"
      alt="Cover of ذباب وعودة — a fly clinging to an airplane wing"
      className="block h-full w-full object-cover"
      loading="lazy"
    />
  ),
}

const BOOKMARKS: Product = {
  id: "bookmarks",
  title: "Bookmarks",
  subtitle: "Set of five, or singles",
  image: (
    <div
      role="img"
      aria-label="Set of five patterned bookmarks side by side"
      className="grid h-full w-full grid-cols-5 content-center items-center gap-1.5 bg-inset px-3 py-4 sm:gap-2 sm:px-4"
    >
      {BOOKMARK_SRCS.map((src) => (
        <div
          key={src}
          className="aspect-[1/4] w-full overflow-hidden rounded-[2px]"
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  ),
}

const cardClassName =
  "flex w-[min(72vw,240px)] shrink-0 snap-start flex-col gap-3 md:w-auto md:min-w-0 md:shrink"

function ProductCard({ product }: { product: Product }) {
  return (
    <article className={cardClassName}>
      <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-inset">
        {product.image}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="m-0 text-[15px] font-extrabold leading-[1.3] tracking-[-0.01em] text-ink">
          {product.title}
        </h3>
        <p className="m-0 text-[13px] leading-[1.45] text-muted">{product.subtitle}</p>
        {product.meta ? (
          <p className="m-0 text-[12px] leading-[1.4] text-faint">{product.meta}</p>
        ) : null}
      </div>
    </article>
  )
}

function CarouselNav({
  index,
  count,
  prevLabel,
  nextLabel,
  onStep,
}: {
  index: number
  count: number
  prevLabel: string
  nextLabel: string
  onStep: (delta: number) => void
}) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/45 to-transparent px-2 pb-2 pt-10">
      <button
        type="button"
        onClick={() => onStep(-1)}
        aria-label={prevLabel}
        className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/90 text-[18px] leading-none text-ink shadow-sm transition-colors hover:bg-white"
      >
        <span aria-hidden>‹</span>
      </button>

      <span className="pointer-events-none mb-1.5 font-mono text-[11px] font-bold tracking-wide text-white">
        {index + 1} / {count}
      </span>

      <button
        type="button"
        onClick={() => onStep(1)}
        aria-label={nextLabel}
        className="pointer-events-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/90 text-[18px] leading-none text-ink shadow-sm transition-colors hover:bg-white"
      >
        <span aria-hidden>›</span>
      </button>
    </div>
  )
}

function useWrapIndex(count: number) {
  const [index, setIndex] = useState(0)
  const step = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + count) % count)
    },
    [count]
  )
  return { index, step }
}

function MousePadsCard() {
  const count = MOUSEPAD_SLIDES.length
  const { index, step } = useWrapIndex(count)
  const slide = MOUSEPAD_SLIDES[index]

  return (
    <article className={cardClassName}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-inset">
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className="block h-full w-full object-cover"
          loading={index === 0 ? "eager" : "lazy"}
        />
        <CarouselNav
          index={index}
          count={count}
          prevLabel="Previous mouse pad photo"
          nextLabel="Next mouse pad photo"
          onStep={step}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="m-0 text-[15px] font-extrabold leading-[1.3] tracking-[-0.01em] text-ink">
          Mouse pads
        </h3>
        <p className="m-0 text-[13px] leading-[1.45] text-muted">
          Fish · other designs to come
        </p>
      </div>
    </article>
  )
}

function PostersCard() {
  const count = POSTER_DESIGNS.length
  const { index, step } = useWrapIndex(count)
  const art = POSTER_DESIGNS[index]

  return (
    <article className={cardClassName}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-inset">
        <img
          key={art.src}
          src={art.src}
          alt={`${art.title} illustration`}
          className={`block h-full w-full ${
            art.objectFit === "contain"
              ? "object-contain object-center"
              : "object-cover object-top"
          }`}
          loading={index === 0 ? "eager" : "lazy"}
        />
        <CarouselNav
          index={index}
          count={count}
          prevLabel="Previous illustration"
          nextLabel="Next illustration"
          onStep={step}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="m-0 text-[15px] font-extrabold leading-[1.3] tracking-[-0.01em] text-ink">
          Posters
        </h3>
        <p className="m-0 text-[13px] leading-[1.45] text-muted">{art.title}</p>
      </div>
    </article>
  )
}

type AtTheTableSectionProps = {
  index?: string
}

export function AtTheTableSection({ index = "07" }: AtTheTableSectionProps) {
  return (
    <section className="flex w-full max-w-page flex-col gap-8 pb-[88px]">
      <div className="flex flex-col gap-3">
        <SectionEyebrow index={index} title="At the table" />
        <p className="m-0 max-w-[620px] text-[15px] leading-[1.6] text-muted">
          What I bring to a fair. The same drawings at object scale, printed small enough to carry
          home.
        </p>
      </div>

      <div className="-mx-6 overflow-x-auto snap-x snap-mandatory scroll-px-6 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:overflow-visible md:scroll-px-0 md:pb-0 md:snap-none">
        <div className="flex w-max gap-4 px-6 md:grid md:w-full md:grid-cols-4 md:gap-5 md:px-0">
          <ProductCard product={COMIC} />
          <MousePadsCard />
          <PostersCard />
          <ProductCard product={BOOKMARKS} />
        </div>
      </div>
    </section>
  )
}
