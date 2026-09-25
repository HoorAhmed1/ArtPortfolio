import { SectionEyebrow } from "@/app/components/SectionEyebrow"

type AboutSectionProps = {
  index?: string
}

const GALLERY = [
  {
    src: "/images/about/process-painting.png",
    alt: "Hands painting a blue dome on a cityscape sketch, holding a wooden palette",
  },
  {
    src: "/images/about/process-sketch.jpg",
    alt: "Sketching architectural forms on a tabletop easel while holding a patterned mug",
  },
  {
    src: "/images/about/museum-starry-night.jpg",
    alt: "Hour Ahmed smiling beside Van Gogh’s The Starry Night at the museum",
  },
  {
    src: "/images/about/museum-van-gogh.jpg",
    alt: "Hour Ahmed pointing at a Van Gogh self-portrait in the museum",
  },
] as const

export function AboutSection({ index = "07" }: AboutSectionProps) {
  return (
    <section className="flex w-full max-w-page flex-col gap-8 pb-[88px]">
      <div className="flex flex-col gap-3">
        <SectionEyebrow index={index} title="About the artist" />
        <p className="m-0 max-w-[620px] text-[15px] leading-[1.6] text-muted">
          A little more on who is behind the pages.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
        <div className="overflow-hidden rounded-2xl border border-line bg-inset">
          <img
            src="/images/about/portrait-tiles.jpg"
            alt="Hour Ahmed standing in front of blue and red floral ceramic tiles"
            className="block h-auto w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="m-0 text-[17px] font-extrabold leading-[1.35] tracking-[-0.015em] text-ink sm:text-[19px]">
              Hour Ahmed · comics and mixed-media
            </p>
            <p className="m-0 text-[15px] leading-[1.65] text-body text-pretty sm:text-[16px]">
              I make comics and drawings on paper — pencil and ink first, sometimes paint, then
              scan and finish digitally when the piece needs it. A lot of what I draw comes from
              moving through Egyptian cities: waiting rooms, coastal roads, jokes that stick longer
              than the trip home.
            </p>
            <p className="m-0 text-[15px] leading-[1.65] text-body text-pretty sm:text-[16px]">
              The work sits between short stories and quiet observation — panels when the narrative
              asks for them, single images when a scene is enough on its own.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {GALLERY.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-2xl border border-line bg-inset"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block aspect-[4/5] h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
