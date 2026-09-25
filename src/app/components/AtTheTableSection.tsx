import type { ReactNode } from "react"
import { SectionEyebrow } from "@/app/components/SectionEyebrow"

type Product = {
  id: string
  title: string
  subtitle: ReactNode
  meta?: string
  image: ReactNode
}

const BOOKMARK_SRCS = [
  "/images/bookmarks/bookmark1.png",
  "/images/bookmarks/bookmark2.png",
  "/images/bookmarks/bookmark3.png",
  "/images/bookmarks/bookmark4.png",
  "/images/bookmarks/bookmark5.png",
] as const

const PRODUCTS: Product[] = [
  {
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
  },
  {
    id: "mousepads",
    title: "Mouse pads",
    subtitle: "Fish · other designs to come",
    image: (
      <img
        src="/images/notes/fish-mousepad.jpg"
        alt="Fish mouse pad with a black wireless mouse on a white surface"
        className="block h-full w-full object-cover"
        loading="lazy"
      />
    ),
  },
  {
    id: "posters",
    title: "Posters",
    subtitle: "All designs — digital and works on paper",
    image: (
      <img
        src="/images/drawings/mattab.jpg"
        alt="Mattab illustration — sushi, road sign, and red shoes"
        className="block h-full w-full object-cover object-top"
        loading="lazy"
      />
    ),
  },
  {
    id: "bookmarks",
    title: "Bookmarks",
    subtitle: "Set of five, or singles",
    image: (
      <div
        role="img"
        aria-label="Set of five patterned bookmarks side by side"
        className="flex h-full w-full items-stretch justify-center gap-1.5 bg-inset px-3 py-4 sm:gap-2 sm:px-4"
      >
        {BOOKMARK_SRCS.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className="h-full w-auto max-w-[18%] flex-1 object-contain object-center"
            loading="lazy"
          />
        ))}
      </div>
    ),
  },
]

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

      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:px-0 md:pb-0 md:snap-none">
        {PRODUCTS.map((product) => (
          <article
            key={product.id}
            className="flex w-[min(72vw,240px)] shrink-0 snap-start flex-col gap-3 md:w-auto md:min-w-0 md:shrink"
          >
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
        ))}
      </div>
    </section>
  )
}
