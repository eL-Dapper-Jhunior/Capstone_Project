import React, { useState } from "react";
import axios from "axios";

function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState(""); // Stores user's input
  const [searchResults, setSearchResults] = useState([]); // Stores fetched results

  // Function to handle typing and make API requests
  const handleSearch = async (query) => {
    setSearchQuery(query);

    if (query.length > 2) {
      try {
        const response = await axios.get(`https://api.deezer.com/search?q=${query}`);
        setSearchResults(response.data.data); // Set the track results
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]); // Clear results when input is less than 3 characters
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-4">Search Music</h2>
      
      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Type to search..."
        className="w-full p-2 rounded-lg text-black"
      />

      {/* Search Results */}
      <div className="mt-4">
        {searchResults.length > 0 ? (
          <ul className="space-y-4">
            {searchResults.map((track) => (
              <li key={track.id} className="flex items-center space-x-4">
                <img src={track.album.cover} alt={track.title} className="w-16 h-16 rounded-full" />
                <div>
                  <p className="font-bold">{track.title}</p>
                  <p className="text-sm text-gray-300">{track.artist.name}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchComponent;
