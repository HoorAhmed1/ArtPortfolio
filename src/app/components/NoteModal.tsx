"use client"

import { useEffect, type ReactNode } from "react"
import { createPortal } from "react-dom"

export type NoteSource = {
  src: string
  caption: string
  alt: string
}

export type Note = {
  id: string
  number: string
  readTime: string
  workLabel: string
  title: ReactNode
  excerpt: string
  thumb: string
  thumbAlt: string
  paragraphs: ReactNode[]
  sources: NoteSource[]
}

type NoteModalProps = {
  note: Note
  onClose: () => void
}

export function NoteModal({ note, onClose }: NoteModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = previous
    }
  }, [onClose])

  if (typeof document === "undefined") return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 p-4 animate-fade-in sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`note-title-${note.id}`}
    >
      <div
        className="relative max-h-[min(90vh,820px)] w-full max-w-[640px] overflow-y-auto rounded-2xl border border-line bg-surface p-6 shadow-cover sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-lg leading-none text-muted transition-colors hover:bg-inset hover:text-ink sm:right-5 sm:top-5"
          aria-label="Close note"
        >
          ×
        </button>

        <div className="flex flex-col gap-5 pr-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-faint">
              {note.number} · {note.workLabel}
            </span>
            <h3
              id={`note-title-${note.id}`}
              className="m-0 text-[26px] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink sm:text-[30px]"
            >
              {note.title}
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            {note.paragraphs.map((paragraph, i) => (
              <p key={i} className="m-0 text-[16px] leading-[1.7] text-body text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-faint">
              What it came from
            </span>
            <div className="grid grid-cols-3 gap-3">
              {note.sources.map((source) => (
                <figure key={source.caption} className="m-0 flex flex-col gap-1.5">
                  <div className="aspect-square overflow-hidden rounded-xl border border-line bg-inset">
                    <img
                      src={source.src}
                      alt={source.alt}
                      className="block h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="text-[12px] text-muted">{source.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export function Ar({ children }: { children: ReactNode }) {
  return (
    <span dir="rtl" lang="ar" className="font-arabic font-semibold text-ink">
      {children}
    </span>
  )
}
