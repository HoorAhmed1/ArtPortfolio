"use client"

import { useState } from "react"
import { SectionEyebrow } from "@/app/components/SectionEyebrow"
import { Ar, NoteModal, type Note } from "@/app/components/NoteModal"

const NOTES: Note[] = [
  {
    id: "mattab",
    number: "NOTE 01",
    readTime: "4 MIN",
    workLabel: "ON MATTAB",
    title: (
      <>
        The dot that fell off the <Ar>خ</Ar>
      </>
    ),
    excerpt:
      "A shoe, a sushi dinner and a broken road sign, and how the three of them ended up in the same drawing.",
    thumb: "/images/notes/mattab-sign.jpg",
    thumbAlt: "Night road sign reading مطب حارق with glowing lights",
    paragraphs: [
      <>
        Last summer on the north coast, driving back at night with my friends, we passed a sign that
        was supposed to read <Ar>مطب خارق</Ar>. The dot over the <Ar>خ</Ar> had gone out, so what
        it actually said was <Ar>مطب حارق</Ar> — a burning speed bump. That is where the drawing
        got its name.
      </>,
      <>
        The other two things in it are just as small. The shoes are my favourite Mary Janes, patent
        black, worn with striped socks nearly every day that year. The chopsticks and the glass are
        from a sushi dinner that was genuinely very good, the kind you keep bringing up months
        later.
      </>,
      <>
        None of them mean anything on their own. Put together they are a fairly accurate picture of
        one summer: what I wore, what I ate, and a sign that stayed funny long after the drive
        home.
      </>,
    ],
    sources: [
      {
        src: "/images/notes/mattab-shoes.jpg",
        caption: "The shoes.",
        alt: "Black patent Mary Janes with purple and black striped socks",
      },
      {
        src: "/images/notes/mattab-dinner.jpg",
        caption: "The dinner.",
        alt: "Sushi dinner table with chopsticks and a water glass",
      },
      {
        src: "/images/notes/mattab-sign.jpg",
        caption: "The sign.",
        alt: "Illuminated road sign reading مطب حارق at night",
      },
    ],
  },
]

type NotesSectionProps = {
  index?: string
}

export function NotesSection({ index = "06" }: NotesSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const openNote = NOTES.find((n) => n.id === openId) ?? null

  return (
    <>
      <section className="flex w-full max-w-page flex-col gap-8 pb-[88px]">
        <div className="flex flex-col gap-3">
          <SectionEyebrow index={index} title="Notes on the work" />
          <p className="m-0 max-w-[620px] text-[15px] leading-[1.6] text-muted">
            Short written pieces about where a drawing came from. One per work, only when there is
            something to say.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {NOTES.map((note) => (
            <button
              key={note.id}
              type="button"
              onClick={() => setOpenId(note.id)}
              className="group flex min-h-[160px] overflow-hidden rounded-2xl border border-line bg-surface p-0 text-left transition-colors hover:border-line-strong"
            >
              <div className="w-[108px] shrink-0 self-stretch overflow-hidden bg-inset sm:w-[120px]">
                <img
                  src={note.thumb}
                  alt={note.thumbAlt}
                  className="block h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-4 py-4 sm:px-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-faint">
                  {note.number} · {note.readTime}
                </span>
                <span className="text-[17px] font-extrabold leading-[1.25] tracking-[-0.015em] text-ink">
                  {note.title}
                </span>
                <span className="text-[13px] leading-[1.5] text-muted line-clamp-3">
                  {note.excerpt}
                </span>
                <span className="mt-0.5 text-[13px] font-semibold text-link group-hover:underline">
                  Read →
                </span>
              </div>
            </button>
          ))}

          <div
            className="flex min-h-[160px] flex-col justify-center gap-2 rounded-2xl border border-dashed border-line-strong bg-surface px-5 py-5"
            aria-hidden="true"
          >
            <span className="text-[17px] font-extrabold text-ink">Note 02</span>
            <span className="max-w-[280px] text-[13px] leading-[1.5] text-muted">
              Room for a second one — V7 or Fish. Two is plenty; more starts to read as a blog
              rather than a portfolio.
            </span>
          </div>
        </div>
      </section>

      {openNote && <NoteModal note={openNote} onClose={() => setOpenId(null)} />}
    </>
  )
}
