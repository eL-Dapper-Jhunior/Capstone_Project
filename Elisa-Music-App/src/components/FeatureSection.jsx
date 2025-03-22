// src/components/FeatureSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import FeatureCard from "./FeatureCard";

function FeatureSection() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate("/dashboard"); // Navigate to the dashboard page when button is clicked
  };

  return (
    <section className="bg-gradient-bg text-white p-20 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Top Features</h2>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard title="Shazam-Like Search" icon="🎵" description="Identify songs by playing audio." />
        <FeatureCard title="Find Songs, Artists, Albums" icon="🔍" description="A simple search tool." />
        <FeatureCard title="High-Quality Streaming" icon="🎧" description="Enjoy tracks in crystal-clear sound." />
      </div>

      {/* Try for Free Button */}
      <div className="flex justify-center mr-10 mt-16">
        <button
          onClick={handleButtonClick} // Handle click event to navigate to /dashboard
          className="bg-blue-900 text-white h-16 px-6 py-2 border-2 border-white rounded-full hover:bg-blue-700 hover:text-white transition duration-3000"
        >
          Try for Free
        </button>
      </div>
      <img src="/music.png" alt="" className="absolute left-80 -mt-20 h-huge" />
    </section>
  );
}

export default FeatureSection;
