// src/pages/DashboardPage.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SongListCard from "../components/SongListCard"; // Make sure this path is correct

function DashboardPage() {
  return (
    <div className="bg-blue-900 min-h-screen text-white">
      <Header />
      <main className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">New Songs</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SongListCard title="Top Charts" />
          <SongListCard title="Top Artists" />
          <SongListCard title="Genres" />
          <SongListCard title="More Categories" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DashboardPage;
