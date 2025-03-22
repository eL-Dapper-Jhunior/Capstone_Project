// src/components/Header.jsx
import React from "react";

function Header() {
  return (
    <header className="bg-blue-700 text-white flex justify-between items-center p-4">
      <div className="text-2xl font-bold">🎵 Elisa's</div>
      <input
        type="text"
        placeholder="Search or listen..."
        className="p-3 rounded-full w-100 h-8 text-blue-900"
      />

      <div className="hidden md:flex space-x-4">
        <button className="bg-white text-blue-900 px-4 py-2 rounded-full">Sign Up</button>
        <button className="border border-white px-4 py-2 rounded-full">Login</button>
      </div>
    </header>
  );
}

export default Header;
