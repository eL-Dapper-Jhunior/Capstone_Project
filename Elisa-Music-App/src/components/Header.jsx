import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import axios from "axios";

function Header() {
  const [searchQuery, setSearchQuery] = useState(""); // Input state
  const [searchResults, setSearchResults] = useState([]); // Track search results

  // Search handler to fetch results from Deezer API
  const handleSearch = async (query) => {
    if (!query) return; // Prevent empty search
    try {
      console.log("Search Query:", query); // Debugging log
      const response = await axios.get(
        `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${query}`
      );
      console.log("API Response Data:", response.data); // Debug API response
      setSearchResults(response.data.data); // Save the search results
    } catch (error) {
      console.error("Failed to fetch search results:", error); // Log any errors
    }
  };

  // Listen for Enter key and trigger search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery); // Perform search on Enter key press
    }
  };

  return (
    <header className="bg-blue-700 text-white flex justify-between items-center p-4 relative">
      <div className="text-2xl font-bold">🎵 Elisa's</div>

      <div className="relative w-100">
        <input
          type="text"
          placeholder="Search or listen..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update input value
          onKeyDown={handleKeyDown} // Listen for Enter key
          className="p-3 rounded-full w-80 h-8 text-blue-900"
        />

        {/* Display the search results */}
        {searchResults.length > 0 && searchQuery && (
          <div className="absolute bg-white text-black rounded-lg mt-2 w-80 shadow-lg max-h-64 overflow-y-auto">
            <ul className="p-4 space-y-2">
              {searchResults.map((track) => (
                <li key={track.id} className="flex items-center space-x-4">
                  {/* Navigate to /music with the selected track's details */}
                  <Link
                    to={{
                      pathname: "/music",
                      state: {
                        trackId: track.id,
                        title: track.title,
                        artist: track.artist.name,
                        albumCover: track.album.cover,
                      }, // Pass track data using state
                    }}
                    className="flex items-center space-x-4"
                  >
                    <img
                      src={track.album.cover}
                      alt={track.title}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-bold">{track.title}</p>
                      <p className="text-sm text-gray-500">{track.artist.name}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="hidden md:flex space-x-4">
        <button className="bg-white text-blue-900 px-4 py-2 rounded-full">
          Sign Up
        </button>
        <button className="border border-white px-4 py-2 rounded-full">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
