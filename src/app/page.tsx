"use client"

import { useState, useEffect } from "react"
import { Instagram, Folder, X, ZoomIn, Bookmark } from "lucide-react"
import { SiTiktok } from "react-icons/si"
import { SocialLink } from "@/app/components/SocialLink"


export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setModalImage(src)
  }

  const closeModal = () => {
    setModalImage(null)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    if (modalImage) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [modalImage])

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)" }}>
      <header className="header-custom text-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">By Hour</h1>
                <p className="text-white/80 font-medium text-sm sm:text-base">Mixed Media Artist</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-6">
              <a
                href="https://instagram.com/hourrahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 sm:px-4 py-2 rounded-full transition-all duration-300"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline font-medium text-sm">Instagram</span>
              </a>
              <a
                href="https://tiktok.com/@hourahmed1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 sm:px-4 py-2 rounded-full transition-all duration-300"
                aria-label="Follow on TikTok"
              >
                <SiTiktok className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline font-medium text-sm">TikTok</span>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1dvrNgnnLliSLaF29AVwjjJ8WsnpET1N-?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 sm:px-4 py-2 rounded-full transition-all duration-300"
                aria-label="View Art Drive"
              >
                <Folder className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline font-medium text-sm">Drive</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-screen">
        <section className="py-8 sm:py-12 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Posters
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                { src: "/images/drawings/mattab.png", title: "Mattab" },
                { src: "/images/drawings/v7.png", title: "V7" },
                { src: "/images/drawings/fish.png", title: "Fish" },
                { src: "/images/drawings/houses.png", title: "Houses" },
                { src: "/images/drawings/gold_pattern.png", title: "Gold Pattern" },
                { src: "/images/drawings/dancer.png", title: "Dancer" },
                { src: "/images/drawings/alne3am.png", title: "Al Ne3am" },
                { src: "/images/drawings/Insect.png", title: "Insect" },
                { src: "/images/drawings/abwab_poem.png", title: "Abwab Poem" },
              ].map((artwork, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 border border-white/50"
                  onClick={() => openModal(artwork.src)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${artwork.title} in full size`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      openModal(artwork.src)
                    }
                  }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={artwork.src || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{artwork.title}</h3>
                      <div className="flex items-center gap-2 text-white/80">
                        <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">Click to view</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-1.5 sm:p-2 shadow-lg">
                    <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 lg:py-16" style={{ background: "linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Bookmarks</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-end">
              {[
                {
                  src: "/images/bookmarks/bookmark2.png",
                  size: "w-24 sm:w-32",
                  height: "h-40 sm:h-56",
                  title: "Bookmark 2",
                },
                {
                  src: "/images/bookmarks/bookmark3.png",
                  size: "w-28 sm:w-36",
                  height: "h-48 sm:h-64",
                  title: "Bookmark 3",
                },
                {
                  src: "/images/bookmarks/bookmark1.png",
                  size: "w-32 sm:w-40",
                  height: "h-56 sm:h-72",
                  title: "Bookmark 1",
                },
                {
                  src: "/images/bookmarks/bookmark4.png",
                  size: "w-28 sm:w-36",
                  height: "h-48 sm:h-64",
                  title: "Bookmark 4",
                },
                {
                  src: "/images/bookmarks/bookmark5.png",
                  size: "w-24 sm:w-32",
                  height: "h-40 sm:h-56",
                  title: "Bookmark 5",
                },
              ].map((bookmark, index) => (
                <div
                  key={index}
                  className={`group relative bg-white/80 backdrop-blur-sm p-2 sm:p-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-3 border border-white/50 ${bookmark.size}`}
                  onClick={() => openModal(bookmark.src)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${bookmark.title} in full size`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      openModal(bookmark.src)
                    }
                  }}
                >
                  <img
                    src={bookmark.src || "/placeholder.svg"}
                    alt={bookmark.title}
                    className={`w-full ${bookmark.height} object-contain rounded-lg transition-transform duration-500 group-hover:scale-105`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                      <div className="flex items-center justify-center gap-2 text-white">
                        <ZoomIn className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm font-medium">View</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-12">        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold">By Hour</h3>
          </div>

          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto">
            Hour Ahmed - Mixed Media Artist & Creator
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <SocialLink
              href="https://instagram.com/hourrahmed"
              label="@hourrahmed"
              Icon={Instagram}
              accentClassName="text-pink-400"
              textClassName="text-pink-300 group-hover:text-pink-200"
              ariaLabel="Follow on Instagram"
            />
            <SocialLink
              href="https://tiktok.com/@hourahmed1"
              label="@hourahmed1"
              Icon={({ className }) => <SiTiktok className={className} />}
              accentClassName="text-blue-400"
              textClassName="text-blue-300 group-hover:text-blue-200"
              ariaLabel="Follow on TikTok"
            />
            <SocialLink
              href="https://drive.google.com/drive/folders/1dvrNgnnLliSLaF29AVwjjJ8WsnpET1N-?usp=drive_link"
              label="Art Drive"
              Icon={Folder}
              accentClassName="text-green-400"
              textClassName="text-green-300 group-hover:text-green-200"
              ariaLabel="View Art Drive"
            />
          </div>

          <div className="border-t border-white/20 pt-6 sm:pt-8">
            <p className="text-gray-400 text-xs sm:text-sm">© 2025 By Hour. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white transition-all duration-300 hover:scale-110"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300">
            <img
              src={modalImage || "/placeholder.svg"}
              alt="Artwork in full size"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          
        </div>
      )}
    </div>
  )
}