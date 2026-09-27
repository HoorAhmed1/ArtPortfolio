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

export function AboutSection({ index = "08" }: AboutSectionProps) {
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
              Graduated with a bachelor degree in Software Engineering from Cairo University, and
              studied a semester abroad in Grand Valley State University.
            </p>
            <p className="m-0 text-[15px] leading-[1.65] text-body text-pretty sm:text-[16px]">
              As part of the Global UGRAD scholarship, I studied Art abroad and visited MoMa, and
              Art Institute of Chicago, where I saw Van Gogh’s Starry Night and Dalí and checked the
              biggest boxes of my wishlist.
            </p>
            <p className="m-0 text-[15px] leading-[1.65] text-body text-pretty sm:text-[16px]">
              I do different forms of art, but my favorite is creating comic books to send a message
              through art. I also do acrylic posters, and I love doing geometric patterns and
              studying them. As a side thing, I do fabric design for @HoorDesigns which is my
              family’s business.
            </p>
            <p className="m-0 text-[15px] leading-[1.65] text-body text-pretty sm:text-[16px]">
              Whether through stories, posters, patterns, or illustrations, I love to create
              artworks that speak to the viewer, and tells them something -sometimes whispering,
              sometimes shouting, and other times completely missing the point.
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
