export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">By Hour</h1>
              <p className="text-gray-600">Hour Ahmed - Digital Artist</p>
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
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to My Art World
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Discover my collection of digital drawings and creative bookmarks
          </p>
        </div>
      </section>

      {/* Drawings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            My Drawings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-gray-100 aspect-square rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600">Drawing {item}</p>
                  <p className="text-sm text-gray-500">
                    Replace with your artwork
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bookmarks Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Creative Bookmarks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg mb-4"></div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Bookmark {item}
                </h4>
                <p className="text-sm text-gray-600">
                  Replace with your bookmark design
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold mb-4">By Hour</h4>
          <p className="text-gray-300 mb-6">
            Hour Ahmed - Digital Artist & Creator
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
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 By Hour. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
