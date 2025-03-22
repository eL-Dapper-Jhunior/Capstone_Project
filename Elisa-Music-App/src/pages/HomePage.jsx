// src/pages/HomePage.jsx
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
