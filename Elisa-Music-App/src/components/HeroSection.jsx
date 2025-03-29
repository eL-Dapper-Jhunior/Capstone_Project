import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="
      relative bg-cover bg-center 
      min-h-[80vh] md:min-h-screen
      flex flex-col md:flex-row 
      items-center justify-center
      px-6 md:px-12
      text-white
      overflow-hidden
    " style={{ backgroundImage: `url('/background.png')` }}>
      
      {/* Headphones Image - Absolute positioned in left corner */}
      <motion.img
        src='/headphone.png'
        alt="Premium Headphones"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute left-32 bottom-20 md:bottom-4 w-24 h-auto md:w-32 opacity-90 
        hover:opacity-100 transition-all duration-300 z-10 cursor-pointer hover:scale-105"
      />

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="
          z-10 max-w-2xl 
          mb-12 md:mb-0 md:mr-12
          text-center md:text-left
        "
      >
        <h1 className="
          text-4xl sm:text-5xl md:text-6xl 
          font-bold leading-tight
          mb-4
        ">
          Experience Music<br />
          <span className="text-blue-300">Like Never Before</span>
        </h1>
        <p className="
          text-lg sm:text-xl
          text-gray-300
          mb-8
        ">
          Seamless, sleek, and smart music streaming with a modern touch.
        </p>
        <button className="
          bg-white text-blue-900
          px-8 py-3 rounded-full
          font-bold
          hover:bg-gray-100
          transition-colors
          shadow-lg
        ">
          Start Listening Now
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="
          relative z-10
          mt-8 md:mt-0
          w-full max-w-md
        "
      >
        {/* You can keep this div for other elements if needed */}
      </motion.div>
    </section>
  );
}

export default HeroSection;