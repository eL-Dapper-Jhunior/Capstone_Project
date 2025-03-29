import React from "react";
import { useNavigate } from "react-router-dom";
import FeatureCard from "./FeatureCard";
import { useTheme } from "../context/ThemeContext";

function FeatureSection() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const features = [
    {
      title: "Shazam-Like Search",
      icon: "🎵",
      description: "Identify songs by playing audio.",
      bgClass: "bg-[color:var(--primary)]/20"
    },
    {
      title: "Smart Search",
      icon: "🔍",
      description: "Find any track or artist instantly.",
      bgClass: "bg-[color:var(--secondary)]/20" 
    },
    {
      title: "Premium Audio",
      icon: "🎧",
      description: "Lossless high-quality streaming.",
      bgClass: "bg-[color:var(--accent)]/20"
    }
  ];

  return (
    <section className={`
      min-h-screen w-full
      ${darkMode ? 'bg-dark-gradient-bg' : 'bg-gradient-bg'}
      px-6 py-12 md:px-12 md:py-20
      text-white
      transition-all duration-500
    `}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Top Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
              className={feature.bgClass}
            />
          ))}
        </div>

        <div className="flex justify-center mt-16">
              <button
        onClick={() => navigate('/dashboard')}
        className={`
          px-8 py-4 rounded-full
          text-lg font-semibold
          ${darkMode ? 'bg-[color:var(--darkSecondary)]' : 'bg-[color:var(--secondaryBlue)]'}
          border-2 ${darkMode ? 'border-purple-400' : 'border-blue-200'}
          hover:opacity-90
          hover:shadow-lg
          transition-all duration-300
        `}
      >
        Try for Free
      </button>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;