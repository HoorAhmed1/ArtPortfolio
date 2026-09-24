"use client"

import { useState } from "react"
import { ComicReader, type ComicPage } from "@/app/components/ComicReader"
import { ImageLightbox } from "@/app/components/ImageLightbox"
import { SectionEyebrow } from "@/app/components/SectionEyebrow"

const EMAIL = "mailto:hello@example.com"
const INSTAGRAM = "https://instagram.com/hourrahmed"
const TIKTOK = "https://tiktok.com/@hourahmed1"
const DRIVE =
  "https://drive.google.com/drive/folders/1dvrNgnnLliSLaF29AVwjjJ8WsnpET1N-?usp=drive_link"

const COMIC_PAGES: ComicPage[] = [
  {
    src: "/images/comic/p1.jpeg",
    caption: "Lands. Looks for a bus to the nearest تجمع — settles for a taxi.",
    alt: "Page 1 — the fly leaves the airport, reads street signs, and takes a taxi",
  },
  {
    src: "/images/comic/p2.jpeg",
    caption: "Asks a cat for directions. Gets claws instead.",
    alt: "Page 2 — the fly asks a cat for help and flees, then finds a glowing screen",
  },
  {
    src: "/images/comic/p3.jpeg",
    caption: "Full-page splash. The bus arrives and the street arrives with it.",
    alt: "Page 3 — full-page splash of a city bus and crowded street",
  },
  {
    src: "/images/comic/p4.jpeg",
    caption: "Finally a bus — then swatted off and left in the rain.",
    alt: "Page 4 — inside the crowded bus, swatted out onto the highway, rain",
  },
  {
    src: "/images/comic/p5.jpeg",
    caption: "Hitches a bicycle. Catches a smell it recognises.",
    alt: "Page 5 — hitching a ride on a bicycle, then an old alley",
  },
  {
    src: "/images/comic/p6.jpeg",
    caption: "Arrives. أخيرًا — بيتي الجديد",
    alt: "Page 6 — last story page, the rubbish collection point",
  },
  {
    src: "/images/comic/back.jpeg",
    caption: "Back cover.",
    alt: "Back cover of ذهاب وعودة — blurb and the fly against a blue sky",
  },
]

const ILLUSTRATIONS = [
  {
    src: "/images/drawings/mattab.png",
    title: "Mattab",
    meta: "medium, size, year",
  },
  {
    src: "/images/drawings/v7.png",
    title: "V7",
    meta: "medium, size, year",
  },
  {
    src: "/images/drawings/fish.png",
    title: "Fish",
    meta: "medium, size, year",
  },
  {
    src: "/images/drawings/cards.jpg",
    title: "Cards",
    meta: "medium, size, year",
  },
]

const BOOKMARKS = [
  "/images/bookmarks/bookmark1.png",
  "/images/bookmarks/bookmark2.png",
  "/images/bookmarks/bookmark3.png",
  "/images/bookmarks/bookmark4.png",
  "/images/bookmarks/bookmark5.png",
]

const FACTS = [
  { label: "Year", value: "2026" },
  { label: "Pages", value: "6 + cover + back" },
  { label: "Language", value: "Egyptian Arabic" },
  { label: "Medium", value: "Ink on paper" },
  { label: "Format", value: "A4, black and white" },
  { label: "Credits", value: "Written, drawn, lettered by Hour Ahmed" },
]

const PROCESS_STEPS = [
  {
    title: "Rough layout",
    description:
      "A phone photo of the scribbled panel plan for one page — boxes, arrows, where the balloons sit.",
    src: "/images/process/rough-layout.jpg",
    alt: "Pencil sketchbook page with a five-panel comic rough layout and handwritten Arabic text",
  },
  {
    title: "Pencils before ink",
    description:
      "The same page photographed at the pencil stage, so it can be read against the finished page above.",
    src: "/images/process/pencils-before-ink.jpg",
    alt: "Full pencil comic page with five panels before inking",
  },
  {
    title: "Character sheet",
    description:
      "A pencil study of the bee character, with notes for each journey: immediate goal, conflict, what changes.",
    src: "/images/process/character-sheet.jpg",
    alt: "Pencil character sheet of the bee with journey notes",
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
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-line bg-surface px-4 py-[9px] text-[13px] font-semibold text-body no-underline hover:text-ink hover:no-underline"
            >
              Instagram
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
          I draw in pencil and ink, scan, and finish digitally. My work is about ordinary people
          moving through the city — waiting, getting lost, arriving somewhere they did not plan to
          arrive.
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
              <p className="m-0 text-[15px] text-muted">
                Dhobab wa ‘Awda — a play on{" "}
                <span dir="rtl" className="font-arabic">
                  ذهاب وعودة
                </span>
                , “round trip”.
              </p>
            </div>
            <p className="m-0 text-[17px] leading-[1.65] text-body text-pretty">
              A fly wakes up on a plane and lands in a country where it understands nothing — not
              the language, not the signs, not the traffic. It spends the whole book trying to find
              the one place that would feel like home: a rubbish tip. Six story pages, silent-comedy
              timing, written and drawn in Egyptian colloquial Arabic.
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          {PROCESS_STEPS.map((step) => (
            <figure key={step.title} className="m-0 flex flex-col gap-2.5">
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
        <p className="m-0 max-w-[620px] text-sm leading-[1.6] text-muted">
          Juries read process as proof of craft. Three images here — roughs, pencils, a character
          sheet — are worth more than three more finished posters.
        </p>
      </section>

      <section className="flex w-full max-w-page flex-col gap-8 pb-[88px]">
        <SectionEyebrow index="04" title="Digital illustration" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {[1, 2].map((n) => (
            <figure key={n} className="m-0 flex flex-col gap-2.5">
              <div
                className="aspect-[4/5] rounded-2xl border border-dashed border-line-strong bg-surface"
                aria-hidden="true"
              />
              <figcaption className="text-[13px] text-muted">
                <span className="font-semibold text-ink">Title</span> · digital · 2026
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="flex w-full max-w-page flex-col gap-8 pb-[88px]">
        <SectionEyebrow index="05" title="Works on paper" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
          {ILLUSTRATIONS.map((art) => (
            <figure key={art.src} className="m-0 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => setModal({ src: art.src, alt: art.title })}
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
              <figcaption className="text-[13px] text-muted">
                <span className="font-semibold text-ink">{art.title}</span> · {art.meta}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="m-0 max-w-[620px] text-sm leading-[1.6] text-muted">
          Freehand work on paper.
        </p>
      </section>

      <section className="flex w-full max-w-page flex-col gap-8 pb-[88px]">
        <SectionEyebrow index="06" title="Bookmarks" />
        <p className="m-0 max-w-[620px] text-[15px] leading-[1.6] text-body">
          A printed set sold at fairs — the same characters at object scale.
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(72px,88px))] gap-4 justify-start sm:grid-cols-[repeat(5,minmax(0,88px))]">
          {BOOKMARKS.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setModal({ src, alt: `Bookmark ${i + 1}` })}
              className="flex aspect-[1/4] w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-lg border border-line bg-surface p-0"
              aria-label={`View bookmark ${i + 1} in full size`}
            >
              <img
                src={src}
                alt={`Bookmark ${i + 1}`}
                className="block h-full w-full object-contain"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      <footer className="flex w-full max-w-page flex-wrap items-start justify-between gap-6 border-t border-line pt-10">
        <div className="flex flex-col gap-1.5">
          <span className="text-lg font-bold text-ink">Hour Ahmed</span>
          <span className="text-sm text-muted">
            Cairo, Egypt · available for exhibitions and commissions
          </span>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a href={EMAIL}>Email</a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            Instagram
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
