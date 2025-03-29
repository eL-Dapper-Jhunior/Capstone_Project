import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/SideBar";

function DashboardPage() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-900 to-blue-800'} text-white`}>
      <Header />

      <main className="container mx-auto p-4 lg:p-8 flex flex-col lg:flex-row">
        {/* Sidebar - Hidden on mobile, shown on desktop */}
        <div className="lg:w-1/6 mb-6 lg:mb-0">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <section className="lg:w-5/6 lg:pl-8">
          {/* New Releases Section */}
          <div className={`p-6 rounded-3xl shadow-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-blue-700'}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">New Releases</h2>

            {/* Responsive Grid Sections */}
            <div className="space-y-10">
              {/* Top Charts */}
              <SectionWithTitle 
                title="Top Charts" 
                darkMode={darkMode}
                items={5}
              />

              {/* Top Artists */}
              <SectionWithTitle 
                title="Top Artists" 
                darkMode={darkMode}
                items={5}
              />

              {/* Genres */}
              <SectionWithTitle 
                title="Genres" 
                darkMode={darkMode}
                items={5}
              />
            </div>
          </div>

          {/* Music Player */}
          <div className={`rounded-lg p-4 flex flex-col sm:flex-row items-center ${darkMode ? 'bg-gray-800' : 'bg-blue-900'} transition-colors duration-300`}>
            <div className="flex items-center mb-4 sm:mb-0">
              <img src="/disc.png" alt="Track Cover" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
              <p className="ml-4 text-lg sm:text-xl text-white">In My Blood</p>
            </div>

            <div className="sm:ml-auto flex items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0">
              <PlayerButton icon="/previous.png" alt="Previous" darkMode={darkMode} />
              
              <Link to="/music">
                <PlayerButton 
                  icon="/Play.png" 
                  alt="Play/Pause" 
                  darkMode={darkMode} 
                  className="w-10 h-10 sm:w-12 sm:h-12" 
                />
              </Link>
              
              <PlayerButton icon="/next.png" alt="Next" darkMode={darkMode} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Reusable Section Component
function SectionWithTitle({ title, items, darkMode }) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {Array.from({ length: items }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <img 
              src="/disc.png" 
              alt={`${title} ${i+1}`} 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover hover:scale-105 transition-transform"
            />
            <span className="mt-2 text-sm text-white">
              {title} {i+1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Reusable Player Button Component
function PlayerButton({ icon, alt, darkMode, className = "" }) {
  return (
    <button className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-800 hover:bg-blue-700'} transition-colors ${className}`}>
      <img src={icon} alt={alt} className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
}

export default DashboardPage;