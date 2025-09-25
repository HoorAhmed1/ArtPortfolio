'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [modalAlt, setModalAlt] = useState<string>('')

  const openModal = (src: string, alt: string) => {
    setModalImage(src)
    setModalAlt(alt)
  }

  const closeModal = () => {
    setModalImage(null)
    setModalAlt('')
  }

  const drawings = [
    { src: '/images/drawings/abwab_poem.png', alt: 'Abwab Poem by Hour Ahmed', title: 'Abwab Poem' },
    { src: '/images/drawings/alne3am.png', alt: 'Alne3am by Hour Ahmed', title: 'Alne3am' },
    { src: '/images/drawings/dancer.png', alt: 'Dancer by Hour Ahmed', title: 'Dancer' },
    { src: '/images/drawings/fish.png', alt: 'Fish by Hour Ahmed', title: 'Fish' },
    { src: '/images/drawings/gold_pattern.png', alt: 'Gold Pattern by Hour Ahmed', title: 'Gold Pattern' },
    { src: '/images/drawings/houses.png', alt: 'Houses by Hour Ahmed', title: 'Houses' },
    { src: '/images/drawings/mattab.png', alt: 'Mattab by Hour Ahmed', title: 'Mattab' },
    { src: '/images/drawings/v7.png', alt: 'V7 by Hour Ahmed', title: 'V7' },
  ]

  const bookmarks = [
    { src: '/images/bookmarks/bookmark2.png', alt: 'Bookmark 1 by Hour Ahmed', title: 'Bookmark 1', width: 'w-36', height: 'h-80' },
    { src: '/images/bookmarks/bookmark1.png', alt: 'Bookmark 2 by Hour Ahmed', title: 'Bookmark 2', width: 'w-44', height: 'h-96' },
    { src: '/images/bookmarks/bookmark3.png', alt: 'Bookmark 3 by Hour Ahmed', title: 'Bookmark 3', width: 'w-32', height: 'h-72' },
  ]

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)' }}>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center flex-wrap">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">By Hour</h1>
              <p className="text-gray-600">Hour Ahmed - Digital Artist</p>
            </div>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a
                href="https://instagram.com/hourrahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@hourahmed1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Drawings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            My Drawings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {drawings.map((drawing, index) => (
              <div
                key={index}
                className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-transform"
                onClick={() => openModal(drawing.src, drawing.alt)}
              >
                <Image
                  src={drawing.src}
                  alt={drawing.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4"></div>
                            <p class="text-gray-600">${drawing.title}</p>
                            <p class="text-sm text-gray-500">Loading...</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bookmarks Section */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Bookmarks
          </h3>
          <div className="flex flex-wrap justify-center gap-4 items-end">
            {bookmarks.map((bookmark, index) => (
              <div
                key={index}
                className={`bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden ${bookmark.width} cursor-pointer transform hover:scale-[1.02] transition-transform`}
                onClick={() => openModal(bookmark.src, bookmark.alt)}
              >
                <div className={`w-full ${bookmark.height} relative`}>
                  <Image
                    src={bookmark.src}
                    alt={bookmark.alt}
                    fill
                    className="object-contain rounded"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded"></div>
                        `;
                      }
                    }}
                  />
                </div>
                <p className="text-sm text-gray-700 mt-2 text-center font-medium">{bookmark.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold mb-4">By Hour</h4>
          <p className="text-gray-300 mb-6">Hour Ahmed - Digital Artist & Creator</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://instagram.com/hourrahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              @hourrahmed
            </a>
            <a
              href="https://tiktok.com/@hourahmed1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              @hourahmed1
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 By Hour. All rights reserved.</p>
        </div>
      </footer>

      {/* Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <Image
              src={modalImage}
              alt={modalAlt}
              width={800}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center text-white mt-4 text-lg">
              {modalAlt}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
