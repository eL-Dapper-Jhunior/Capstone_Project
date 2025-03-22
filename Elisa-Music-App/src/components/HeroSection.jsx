// src/components/HeroSection.jsx
import React from "react";

function HeroSection() {
  return (
    
    <section className="bg-cover bg-center min-h-screen flex items-center justify-center text-white"
    style={{ backgroundImage: `url('/background.png')` }}>
    
    <div className="p-5 flex flex-col text-left mr-auto mb-60">  {/* Flex column container */}
    <h1 className="text-7xl font-bold  ">
      Experience Music <br /> Like Never Before
    </h1>
    <p className="text-gray-300 text-3xl mt-6">
      Seamless, sleek, and smart music <br /> streaming with a modern touch.
    </p>
  </div>
{/* 
  <div className="p-5 flex flex-col text-left " > */}
  <img
        src='/headphone.png' 
        alt="Music Experience"
        className=" rounded-lg shadow-lg w-40 absolute left-10 mt-60 " // Tailwind utilities
      />
  
  
      <p className=" text-white text-3xl text-center absolute left-60 mt-60">Start <br />Listening <br />Now</p>
    </section>
  );
}

export default HeroSection;
