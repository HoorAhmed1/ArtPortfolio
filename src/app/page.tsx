"use client"

import { useState } from "react"
import { ComicReader, type ComicPage } from "@/app/components/ComicReader"
import { ImageLightbox } from "@/app/components/ImageLightbox"
import { AboutSection } from "@/app/components/AboutSection"
import { AtTheTableSection } from "@/app/components/AtTheTableSection"
import { NotesSection } from "@/app/components/NotesSection"
import { SectionEyebrow } from "@/app/components/SectionEyebrow"
import { ILLUSTRATIONS } from "@/app/data/illustrations"

const EMAIL = "mailto:Hourahmed11@gmail.com"
const INSTAGRAM_HOORDIDIT = "https://www.instagram.com/hoordidit"
const INSTAGRAM_HOURRAHMED = "https://www.instagram.com/hourrahmed"
const TIKTOK = "https://www.tiktok.com/@hourahmed"
const DRIVE =
  "https://drive.google.com/drive/folders/1dvrNgnnLliSLaF29AVwjjJ8WsnpET1N-?usp=drive_link"

const COMIC_PAGES: ComicPage[] = [
  {
    src: "/images/comic/p1.jpeg",
    caption: "Lands. Looks for a bus to the تجمع and settles for a taxi.",
    alt: "Page 1 — the fly leaves the airport, reads street signs, and takes a taxi",
  },
  {
    src: "/images/comic/p2.jpeg",
    caption: "Asks a cat for directions, but the cat attacks him.",
    alt: "Page 2 — the fly asks a cat for help and flees, then finds a glowing screen",
  },
  {
    src: "/images/comic/p3.jpeg",
    caption: "Finally a public transportation arrives!",
    alt: "Page 3 — full-page splash of a city bus and crowded street",
  },
  {
    src: "/images/comic/p4.jpeg",
    caption: "But not so fast! a passenger swats him off the bus and he is left in the rain.",
    alt: "Page 4 — inside the crowded bus, swatted out onto the highway, rained on",
  },
  {
    src: "/images/comic/p5.jpeg",
    caption: "Settled for a ride on a bicycle, then a familiar smell hits him.",
    alt: "Page 5 — settled for a ride on a bicycle, then a familiar smell hits him",
  },
  {
    src: "/images/comic/p6.jpeg",
    caption: "Arrives. أخيرًا! بيتي الجديد",
    alt: "Page 6 — last story page, the rubbish collection point",
  },
  {
    src: "/images/comic/back.jpeg",
    caption: "Back cover.",
    alt: "Back cover of ذهاب وعودة — blurb and the fly against a blue sky",
  },
]

// Bookmarks section hidden — assets kept in public/images/bookmarks/
// const BOOKMARKS = [
//   "/images/bookmarks/bookmark1.png",
//   "/images/bookmarks/bookmark2.png",
//   "/images/bookmarks/bookmark3.png",
//   "/images/bookmarks/bookmark4.png",
//   "/images/bookmarks/bookmark5.png",
// ]

const FACTS = [
  { label: "Year", value: "2026" },
  { label: "Pages", value: "6 + cover + back" },
  { label: "Language", value: "Egyptian Arabic" },
  { label: "Medium", value: "Digital" },
  { label: "Format", value: "A4, black and white" },
  { label: "Credits", value: "Written, drawn, lettered by Hour Ahmed" },
]

const PROCESS_STEPS = [
  {
    title: "Rough layout",
    description:
      "A story board for the plots and events",
    src: "/images/process/rough-layout.jpg",
    alt: "Pencil sketchbook page with a five-panel comic rough layout and handwritten Arabic text",
  },
  {
    title: "Pencil drafts",
    description:
      "The process of drafting all panels in pencil on paper",
    src: "/images/process/pencils-before-ink.jpg",
    alt: "Full pencil comic page with five panels before inking",
  },
  {
    title: "Character sheet",
    description:
      "A pencil study of the fly character, designing the character's expressions and body language",
    src: "/images/process/character-sheet.jpg",
    alt: "Pencil character sheet of the fly with journey notes",
  },
]

export default function Home() {
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="flex min-h-screen flex-col items-center bg-ground px-6 pb-[120px] text-body">
      <header className="flex w-full max-w-page flex-col gap-7 pb-14 pt-24 animate-rise-in">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-2.5">
            <h1 className="m-0 text-[40px] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink sm:text-[56px]">
              Hour Ahmed
            </h1>
            <p className="m-0 text-[17px] text-muted">
              Comics and mixed-media artist. Cairo, Egypt.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a
              href={EMAIL}
              className="inline-flex items-center rounded-full bg-brand px-4 py-[9px] text-[13px] font-bold text-ink no-underline hover:text-ink hover:no-underline"
            >
              Email
            </a>
            <a
              href={INSTAGRAM_HOORDIDIT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-line bg-surface px-4 py-[9px] text-[13px] font-semibold text-body no-underline hover:text-ink hover:no-underline"
            >
              @hoordidit
            </a>
            <a
              href={INSTAGRAM_HOURRAHMED}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-line bg-surface px-4 py-[9px] text-[13px] font-semibold text-body no-underline hover:text-ink hover:no-underline"
            >
              @hourrahmed
            </a>
            <a
              href={TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-line bg-surface px-4 py-[9px] text-[13px] font-semibold text-body no-underline hover:text-ink hover:no-underline"
            >
              TikTok
            </a>
          </div>
        </div>
        <p className="m-0 max-w-[640px] text-[19px] leading-[1.6] text-body text-pretty animate-rise-in-delay-1">
        I view my art as a way to impress not express, which is in a way or another expressive of how I view life, as full, chaotic, magical, colorful, dull, repetitive, and beautiful as it is. 
        <br />
        I use acrylic markers for drawing on paper, and Krita for drawing digitally. 
        </p>
      </header>

      <section className="flex w-full max-w-page flex-col gap-8 pb-[88px] animate-rise-in-delay-2">
        <SectionEyebrow index="01" title="Comic book" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-10">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-cover">
            <img
              src="/images/comic/cover.jpeg"
              alt="Cover of ذهاب وعودة — a fly clinging to an airplane wing"
              className="block h-auto w-full"
            />
          </div>
          <div className="flex flex-col gap-[22px]">
            <div className="flex flex-col gap-1.5">
              <h3
                dir="rtl"
                className="m-0 font-arabic text-[36px] font-bold leading-[1.2] text-ink sm:text-[44px]"
              >
                ذباب وعودة
              </h3>
              {/* <p className="m-0 text-[15px] text-muted">
                Dhobab wa ‘Awda — a play on{" "}
                <span dir="rtl" className="font-arabic">
                  ذهاب وعودة
                </span>
                , “round trip”.
              </p> */}
            </div>
            <p
              dir="rtl"
              lang="ar"
              className="m-0 font-arabic text-[17px] leading-[1.75] text-body text-pretty"
            >
              عمرك فكرت الدبانة الي ركبت معاك العربية من اسكندرية وهشتها خرجتها من الشباك عالصحراوي
              عملت أيه؟
              <br />
              دا الي حصل مع شريفة لما صحيت لقيت نفسها ركبت الطيارة وراحت بلد
              <br />
              جديدة
              <br />
              يا ترى هندور على ايه يساعدها
              <br />
              وهتوصله ازاي؟
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-px overflow-hidden rounded-xl border border-line bg-line">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 bg-surface px-4 py-3.5"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-faint">
                    {fact.label}
                  </span>
                  <span className="text-[15px] font-semibold text-ink">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-page flex-col gap-8 pb-[88px]">
        <SectionEyebrow index="02" title="Read it — six pages, then the back cover" />
        <ComicReader pages={COMIC_PAGES} />
      </section>

      <section className="flex w-full max-w-page flex-col gap-8 pb-[88px]">
        <SectionEyebrow index="03" title="Process" />
        <div className="-mx-6 overflow-x-auto snap-x snap-mandatory scroll-px-6 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:overflow-visible md:scroll-px-0 md:pb-0 md:snap-none">
          <div className="flex w-max gap-4 px-6 md:grid md:w-full md:grid-cols-3 md:gap-5 md:px-0">
            {PROCESS_STEPS.map((step) => (
              <figure
                key={step.title}
                className="m-0 flex w-[min(72vw,260px)] shrink-0 snap-start flex-col gap-2.5 md:w-auto md:min-w-0 md:shrink"
              >
                <button
                  type="button"
                  onClick={() => setModal({ src: step.src, alt: step.alt })}
                  className="aspect-[3/4] cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-surface p-0 text-left transition-opacity hover:opacity-90"
                  aria-label={`View ${step.title} in full size`}
                >
                  <img
                    src={step.src}
                    alt={step.alt}
                    className="block h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </button>
                <figcaption className="flex flex-col gap-1">
                  <span className="text-[13px] font-bold text-ink">{step.title}</span>
                  <span className="text-[13px] leading-[1.5] text-muted">
                    {step.description}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="flex w-full max-w-page flex-col gap-8 pb-[88px]">
        <SectionEyebrow index="04" title="Illustrations" />
        <div className="grid grid-cols-2 gap-6">
          {ILLUSTRATIONS.map((art, i) => (
            <figure key={art.src ?? `placeholder-${i}`} className="m-0 flex flex-col gap-2.5">
              {art.placeholder || !art.src ? (
                <div
                  className="aspect-[4/5] rounded-2xl border border-dashed border-line-strong bg-surface"
                  aria-hidden
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setModal({ src: art.src!, alt: art.title })}
                  className="cursor-zoom-in overflow-hidden rounded-xl border border-line bg-surface p-0 text-left transition-opacity hover:opacity-90"
                  aria-label={`View ${art.title} in full size`}
                >
                  <img
                    src={art.src}
                    alt={art.title}
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                </button>
              )}
              <figcaption className="text-[13px] text-muted">
                <span className="font-semibold text-ink">{art.title}</span> · {art.meta}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Bookmarks section intentionally hidden — keep assets on disk for later */}

      <NotesSection index="05" />

      <AtTheTableSection index="06" />

      <AboutSection index="07" />

      <footer className="flex w-full max-w-page flex-wrap items-start justify-between gap-6 border-t border-line pt-10">
        <div className="flex flex-col gap-1.5">
          <span className="text-lg font-bold text-ink">Hour Ahmed</span>
          <span className="text-sm text-muted">
            Cairo, Egypt · available for exhibitions and commissions
          </span>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a href={EMAIL}>Email</a>
          <a href={INSTAGRAM_HOORDIDIT} target="_blank" rel="noopener noreferrer">
            @hoordidit
          </a>
          <a href={INSTAGRAM_HOURRAHMED} target="_blank" rel="noopener noreferrer">
            @hourrahmed
          </a>
          <a href={TIKTOK} target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
          <a href={DRIVE} target="_blank" rel="noopener noreferrer">
            High-res files
          </a>
        </div>
      </footer>

      {modal && (
        <ImageLightbox
          src={modal.src}
          alt={modal.alt}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  )
}
