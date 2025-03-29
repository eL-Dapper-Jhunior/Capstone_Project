import React from 'react';

function Footer() {
  return (
    <footer className="
      bg-blue-900 dark:bg-gray-900 
      text-white py-6
      px-4 sm:px-8
      flex flex-col md:flex-row 
      items-center justify-between
      gap-4
    ">
      <div className="flex items-center gap-2">
        <span className="text-xl">🎵</span>
        <span>Elisa's Music Player</span>
      </div>
      
      <p className="text-sm md:text-base text-center">
        © {new Date().getFullYear()} Elisa's. All rights reserved.
      </p>
      
      <a 
        href="mailto:support@elisasmusic.com" 
        className="
          text-blue-200 dark:text-purple-300
          hover:underline
        "
      >
        Contact Support
      </a>
    </footer>
  );
}

export default Footer;