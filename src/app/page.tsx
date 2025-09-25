'use client';

import { useState } from 'react';

export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState<string>('');

  const openModal = (src: string, alt: string) => {
    setModalImage(src);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalAlt('');
  };

  // Close modal with Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50" onKeyDown={handleKeyDown} tabIndex={-1}>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">By Hour</h1>
              <p className="text-gray-600">Hour Ahmed - Mixed Media Artist</p>
            </div>
            <div className="flex space-x-4">
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
              <a
                href="https://drive.google.com/drive/folders/1dvrNgnnLliSLaF29AVwjjJ8WsnpET1N-?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 transition-colors"
              >
                Drive
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)' }}>
        {/* Drawings Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              My Drawings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Drawing 1 */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="./public/images/drawings/abwab_poem.png"
                  alt="Abwab Poem by Hour Ahmed"
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('./public/images/drawings/abwab_poem.png', 'Abwab Poem by Hour Ahmed')}
                />
              </div>
              
              {/* Drawing 2 */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="public/images/drawings/alne3am.png"
                  alt="Alne3am by Hour Ahmed"
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('public/images/drawings/alne3am.png', 'Alne3am by Hour Ahmed')}
                />
              </div>
              
              {/* Drawing 3 */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="public/images/drawings/dancer.png"
                  alt="Dancer by Hour Ahmed"
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('public/images/drawings/dancer.png', 'Dancer by Hour Ahmed')}
                />
              </div>
              
              {/* Drawing 4 */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="public/images/drawings/fish.png"
                  alt="Fish by Hour Ahmed"
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('public/images/drawings/fish.png', 'Fish by Hour Ahmed')}
                />
              </div>
              
              {/* Drawing 5 */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="public/images/drawings/gold_pattern.png"
                  alt="Gold Pattern by Hour Ahmed"
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('public/images/drawings/gold_pattern.png', 'Gold Pattern by Hour Ahmed')}
                />
              </div>
              
              {/* Drawing 6 */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="public/images/drawings/houses.png"
                  alt="Houses by Hour Ahmed"
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('public/images/drawings/houses.png', 'Houses by Hour Ahmed')}
                />
              </div>
              
              {/* Drawing 7 */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="public/images/drawings/mattab.png"
                  alt="Mattab by Hour Ahmed"
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('public/images/drawings/mattab.png', 'Mattab by Hour Ahmed')}
                />
              </div>
              
              {/* Drawing 8 */}
              <div className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="public/images/drawings/v7.png"
                  alt="V7 by Hour Ahmed"
                  className="w-full h-full object-cover cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('public/images/drawings/v7.png', 'V7 by Hour Ahmed')}
                />
              </div>
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
              {/* Bookmark 1 - Medium size */}
              <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden w-36">
                <img
                  src="public/images/bookmarks/bookmark2.png"
                  alt="Bookmark 1 by Hour Ahmed"
                  className="w-full h-80 object-contain rounded cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('public/images/bookmarks/bookmark2.png', 'Bookmark 1 by Hour Ahmed')}
                />
              </div>
              
              {/* Bookmark 2 - Large size */}
              <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden w-44">
                <img
                  src="public/images/bookmarks/bookmark1.png"
                  alt="Bookmark 2 by Hour Ahmed"
                  className="w-full h-96 object-contain rounded cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('public/images/bookmarks/bookmark1.png', 'Bookmark 2 by Hour Ahmed')}
                />
              </div>
              
              {/* Bookmark 3 - Small size */}
              <div className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden w-32">
                <img
                  src="public/images/bookmarks/bookmark3.png"
                  alt="Bookmark 3 by Hour Ahmed"
                  className="w-full h-72 object-contain rounded cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal('public/images/bookmarks/bookmark3.png', 'Bookmark 3 by Hour Ahmed')}
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
            alt={modalAlt}
            className="max-w-[90%] max-h-[90%] object-contain block mx-auto"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white text-lg">
            {modalAlt}
          </div>
        </div>
      )}
    </div>
  );
}
