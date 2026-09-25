"use client"

import { useCallback, useEffect, useState } from "react"
import { ImageLightbox } from "@/app/components/ImageLightbox"

export type ComicPage = {
  src: string
  caption: string
  alt: string
}

type ComicReaderProps = {
  pages: ComicPage[]
}

export function ComicReader({ pages }: ComicReaderProps) {
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const last = pages.length - 1
  const page = pages[index]

  const step = useCallback(
    (delta: number) => {
      setIndex((i) => Math.min(last, Math.max(0, i + delta)))
    },
    [last]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxOpen) return
      if (e.key === "ArrowLeft") step(1)
      else if (e.key === "ArrowRight") step(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [step, lightboxOpen])

  useEffect(() => {
    const next = pages[index + 1]
    if (!next) return
    const img = new Image()
    img.src = next.src
  }, [index, pages])

  const atStart = index === 0
  const atEnd = index === last

  return (
    <>
      <div className="flex flex-col gap-[18px]">
        <p
          className="m-0 text-center font-arabic text-[14px] font-semibold text-ink"
          dir="rtl"
          role="note"
        >
          اقرأ من اليمين إلى اليسار
        </p>

        <div className="flex w-full items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={() => step(1)}
            disabled={atEnd}
            aria-label="Next page"
            className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-line bg-surface text-[20px] leading-none text-ink transition-colors hover:bg-inset disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden>‹</span>
          </button>

          <div className="flex min-w-0 items-center justify-center">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="cursor-zoom-in border-0 bg-transparent p-0"
              aria-label={`Zoom page ${index + 1}`}
            >
              <img
                key={page.src}
                src={page.src}
                alt={page.alt}
                className="page-crossfade block h-auto max-h-[78vh] w-auto max-w-full rounded border border-line bg-white shadow-page"
              />
            </button>
          </div>

          <button
            type="button"
            onClick={() => step(-1)}
            disabled={atStart}
            aria-label="Previous page"
            className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-line bg-surface text-[20px] leading-none text-ink transition-colors hover:bg-inset disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden>›</span>
          </button>
        </div>

        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="font-mono text-xs font-bold text-ink">
              Page {index + 1}
            </span>
            <span className="text-sm text-muted">{page.caption}</span>
          </div>
          <span className="font-mono text-xs text-faint">
            {index + 1} / {pages.length}
          </span>
        </div>

        <div className="flex flex-row-reverse flex-wrap justify-center gap-2.5">
          {pages.map((p, n) => {
            const active = n === index
            return (
              <button
                key={p.src}
                type="button"
                onClick={() => setIndex(n)}
                aria-label={`Go to page ${n + 1}`}
                aria-current={active ? "true" : undefined}
                className="w-[58px] overflow-hidden rounded-md bg-white p-0"
                style={{
                  border: `2px solid ${active ? "#101828" : "transparent"}`,
                }}
              >
                <img
                  src={p.src}
                  alt=""
                  className="block h-auto w-full"
                  style={{ opacity: active ? 1 : 0.45 }}
                  loading={n === 0 ? "eager" : "lazy"}
                />
              </button>
            )
          })}
        </div>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          src={page.src}
          alt={page.alt}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
