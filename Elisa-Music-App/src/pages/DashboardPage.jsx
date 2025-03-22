// src/pages/DashboardPage.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/SideBar"; // Sidebar remains on the right

function DashboardPage() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 min-h-screen text-white">
      <Header />

      <main className="p-4 lg:p-8 flex ">
        {/* Main Content with Curved Rectangle for Vertical Grid */}
        <section className="flex-1">
          <div className="bg-blue-700 p-8 rounded-3xl shadow-lg w-[600px] ml-60">
            <h2 className="text-3xl font-bold mb-6 text-center">New</h2>

            {/* Vertical Grid with 5 Track Discs per Section */}
            <div className="space-y-10">
              {/* Top Charts Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Top Charts</h3>
                <div className="flex space-x-4">
                  <img src="/disc.png" alt="Track 1" className="w-24 h-24 rounded-full" />
                  <img src="/disc.png" alt="Track 2" className="w-24 h-24 rounded-full" />
                  <img src="/disc.png" alt="Track 3" className="w-24 h-24 rounded-full" />
                  <img src="/disc.png" alt="Track 4" className="w-24 h-24 rounded-full" />
                  <img src="/disc.png" alt="Track 5" className="w-24 h-24 rounded-full" />
                </div>
              </div>

              {/* Repeat the sections for Top Artists, Genres, etc., with updated image sources */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Top Artists</h3>
                <div className="flex space-x-4">
                  <img src="/disc.png" alt="Artist 1" className="w-24 h-24 rounded-full" />
                  <img src="/disc.png" alt="Artist 2" className="w-24 h-24 rounded-full" />
                  <img src="/disc.png" alt="Artist 3" className="w-24 h-24 rounded-full" />
                  <img src="/disc.png" alt="Artist 4" className="w-24 h-24 rounded-full" />
                  <img src="/disc.png" alt="Artist 5" className="w-24 h-24 rounded-full" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Genres</h3>
                <div className="flex space-x-4">
                  <img src="/disc.png" alt="Genre 1" className="w-24 h-24 rounded-full" />
                  <img src="/disc.png" alt="Genre 2" className="w-24 h-24 rounded-full" />
                  <img src="/disc.png" alt="Genre 3" className="w-24 h-24 rounded-full" />
                  <img src="/disc.png" alt="Genre 4" className="w-24 h-24 rounded-full" />
                  <img src="/disc.png" alt="Genre 5" className="w-24 h-24 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Music Player Section Centered */}
          <div className="bg-blue-900 mt-16 rounded-lg flex items-center justify-center p-4 w-[80%] ml-56">
            <img src="/disc.png" alt="Track Cover" className="w-16 h-16 rounded-full" />
            <p className="ml-4 text-xl">In My Blood</p>
            <div className="ml-auto flex items-center space-x-4">
              <button className="p-2 bg-gray-800 rounded-full">
                <img src="/previous.png" alt="Previous" className="w-6" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full">
                <img src="/Play.png" alt="Play/Pause" className="w-6" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full">
                <img src="/next.png" alt="Next" className="w-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Sidebar on the right */}
        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}

export default DashboardPage;
