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
        How is the Mattab <Ar>ح</Ar>areq?
      </>
    ),
    excerpt:
      "My instagram summer dump post but make it a sketch instead",
    thumb: "/images/notes/mattab-sign.jpg",
    thumbAlt: "Night road sign reading مطب حارق with glowing lights",
    paragraphs: [
      <>
        Last summer with my friends in the north coast, walking back to our chalet salty and sandy at night, we passed a flashy sign that
        was supposed to read <Ar>مطب خارق</Ar>. The dot over the <Ar>خ</Ar> had gone out, so what
        it actually said was <Ar>مطب حارق</Ar> making it a spicy/flaming speed bump. I love this incident because it&apos;s one
        of those times you are with your friends and you can&apos;t stop laughing at something that&apos;s not even that funny.
      </>,
      <>
        The shoes are my favourite Mary Janes, patent
        black, worn with striped socks. Not much to mention except the aura I had
        going to the office in these shoes.
      </>,
      <>
        The sushi is just something i love lol. I was teaching my friends how to use chopsticks.
      </>,
      <>
        It&apos;s just a combination of some things I really enjoyed that summer: what I wore, what I ate, and a sign that stayed funny long after the walk
        back to the chalet.
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
  {
    id: "fish",
    number: "NOTE 02",
    readTime: "2 MIN",
    workLabel: "ON FISH",
    title: "Why is my drawing on a mouse pad?",
    excerpt:
      "A friend of mine liked my fish poster and somehow had the idea: this should be made into a mouse pad",
    thumb: "/images/notes/fish-mousepad.jpg",
    thumbAlt: "Fish mouse pad with a black wireless mouse on a white surface",
    paragraphs: [
      <>
        My fish poster came first, then a dear friend of mine liked it so much, he surprised me with a mouse pad with 
        my drawing on it as a gift. I have to admit this was one of the most thoughtful and precious gifts I&apos;ve ever received.
      </>,
      <>
        I loved the mouse pad and the touch it gives to my desk, and everyone of my friends and co-workers wanted one too!
        so I decided to make a small special edition batch and start selling them at the very next chance i get.
      </>,
    ],
    sources: [
      {
        src: "/images/drawings/fish.jpg",
        caption: "The drawing.",
        alt: "Original Fish illustration with orange and blue fish on a red patterned field",
      },
      {
        src: "/images/notes/fish-mousepad-desk.jpg",
        caption: "On a desk.",
        alt: "Fish mouse pad on a glass desk with a black mouse and a floral coffee mug",
      },
      {
        src: "/images/notes/fish-mousepad.jpg",
        caption: "The mouse pad.",
        alt: "Fish mouse pad with a black wireless mouse on a white background",
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
          <SectionEyebrow
            index={index}
            title={
              <>
                Stories behind the work
              </>
            }
          />
          <p className="m-0 max-w-[620px] text-[15px] leading-[1.6] text-muted">
            I love sharing the inpirations and stories behind my artworks, if they have one
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
        </div>
      </section>

      {openNote && <NoteModal note={openNote} onClose={() => setOpenId(null)} />}
    </>
  )
}
