'use client';

import { useState } from 'react';

export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  // Close modal with Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50" onKeyDown={handleKeyDown} tabIndex={-1}>
      {/* Simple Header */}
      <header className="header-custom text-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center flex-wrap">
            <div>
              <h1 className="text-2xl font-bold">By Hour</h1>
              <p className="text-sm opacity-90">Mixed Media Artist</p>
            </div>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a
                href="https://instagram.com/hourrahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@hourahmed1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors text-sm"
              >
                TikTok
              </a>
              <a
                href="https://drive.google.com/drive/folders/1dvrNgnnLliSLaF29AVwjjJ8WsnpET1N-?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors text-sm"
              >
                Drive
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)' }}>
        {/* Drawings Section */}
        <section className="py-4 sm:py-6 lg:py-8 bg-white">
          <div className="max-w-5xl mx-auto px-2 sm:px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Posters
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {/* Drawing 1 - Mattab */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer relative"
                   onClick={() => openModal('/images/drawings/mattab.png')}>
                <img
                  src="/images/drawings/mattab.png"
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Mobile zoom indicator - subtle */}
                <div className="absolute top-2 right-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20 rounded-full p-1">
                  <svg className="w-3 h-3 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                {/* Desktop center zoom indicator - hover only */}
                <div className="hidden sm:flex absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Drawing 2 - V7 */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer relative"
                   onClick={() => openModal('/images/drawings/v7.png')}>
                <img
                  src="/images/drawings/v7.png"
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Mobile zoom indicator - subtle */}
                <div className="absolute top-2 right-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-20 rounded-full p-1">
                  <svg className="w-3 h-3 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                {/* Desktop center zoom indicator - hover only */}
                <div className="hidden sm:flex absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 rounded-full p-2">
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Drawing 3 - Fish */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="/images/drawings/fish.png"
                  alt=""
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('/images/drawings/fish.png')}
                />
              </div>
              
              {/* Drawing 4 - Houses */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="/images/drawings/houses.png"
                  alt=""
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('/images/drawings/houses.png')}
                />
              </div>
              
              {/* Drawing 5 - Gold Pattern */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="/images/drawings/gold_pattern.png"
                  alt=""
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('/images/drawings/gold_pattern.png')}
                />
              </div>
              
              {/* Drawing 6 - Dancer */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="/images/drawings/dancer.png"
                  alt=""
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('/images/drawings/dancer.png')}
                />
              </div>
              
              {/* Drawing 7 - Al Ne3am */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="/images/drawings/alne3am.png"
                  alt=""
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('/images/drawings/alne3am.png')}
                />
              </div>
              
              {/* Drawing 8 - Insect */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="/images/drawings/Insect.png"
                  alt=""
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('/images/drawings/Insect.png')}
                />
              </div>
              
              {/* Drawing 9 - Abwab Poem */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden col-span-2 sm:col-span-1 justify-self-center max-w-[50%] sm:max-w-none">
                <img
                  src="/images/drawings/abwab_poem.png"
                  alt=""
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('/images/drawings/abwab_poem.png')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bookmarks Section */}
        <section className="py-8 sm:py-12 lg:py-16" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)' }}>
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              Bookmarks
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 items-center">
              {/* Bookmark 2 - Small size */}
              <div className="bg-white px-2 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden w-32">
                <img
                  src="/images/bookmarks/bookmark2.png"
                  alt=""
                  className="w-full h-56 object-contain rounded cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('/images/bookmarks/bookmark2.png')}
                />
              </div>
              
              {/* Bookmark 3 - Medium size */}
              <div className="bg-white px-2 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden w-36">
                <img
                  src="/images/bookmarks/bookmark3.png"
                  alt=""
                  className="w-full h-64 object-contain rounded cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('/images/bookmarks/bookmark3.png')}
                />
              </div>
              
              {/* Bookmark 1 - Center, largest */}
              <div className="bg-white px-2 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden w-40">
                <img
                  src="/images/bookmarks/bookmark1.png"
                  alt=""
                  className="w-full h-72 object-contain rounded cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('/images/bookmarks/bookmark1.png')}
                />
              </div>
              
              {/* Bookmark 4 - Medium size */}
              <div className="bg-white px-2 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden w-36">
                <img
                  src="/images/bookmarks/bookmark4.png"
                  alt=""
                  className="w-full h-64 object-contain rounded cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('/images/bookmarks/bookmark4.png')}
                />
              </div>
              
              {/* Bookmark 5 - Small size */}
              <div className="bg-white px-2 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden w-32">
                <img
                  src="/images/bookmarks/bookmark5.png"
                  alt=""
                  className="w-full h-56 object-contain rounded cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('/images/bookmarks/bookmark5.png')}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold mb-4">By Hour</h4>
          <p className="text-gray-300 mb-6">
            Hour Ahmed - Mixed Media Artist & Creator
          </p>
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
            <a
              href="https://drive.google.com/drive/folders/1dvrNgnnLliSLaF29AVwjjJ8WsnpET1N-?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Art Drive
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 By Hour. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modal - Matching HTML version exactly */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
          style={{ zIndex: 1000 }}
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-8 text-white text-4xl font-bold cursor-pointer hover:text-gray-300 transition-colors z-10"
          >
            ×
          </button>
          
          {/* Modal content - matching HTML version */}
          <img
            src={modalImage}
            alt=""
            className="max-w-[90%] max-h-[90%] object-contain block mx-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
