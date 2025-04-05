import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Mic, MicOff } from "lucide-react";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const handleSearch = async (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=${query}`
      );
      setSearchResults(response.data.data || []);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery);
    }
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    chunksRef.current = [];

    mediaRecorder.ondataavailable = (e) => {
      chunksRef.current.push(e.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(chunksRef.current, { type: "audio/wav" });
      const formData = new FormData();
      formData.append("api_token", import.meta.env.VITE_APP_AUDD_API_KEY);
      formData.append("file", audioBlob);
      formData.append("return", "apple_music,deezer,spotify");

      try {
        const response = await axios.post("https://api.audd.io/", formData);
        const title = response.data.result?.title;
        if (title) {
          setSearchQuery(title);
          handleSearch(title);
        } else {
          alert("No match found.");
        }
      } catch (error) {
        console.error("AudD API error:", error);
      }
    };

    mediaRecorder.start();
    setIsRecording(true);

    setTimeout(() => {
      mediaRecorder.stop();
      setIsRecording(false);
    }, 6000); // record for 6 seconds
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="mr-2">🎵</span> Elisa's
        </Link>

        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search songs, artists..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            className="w-full pl-10 pr-10 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-700"
            onClick={startRecording}
            title="Tap to identify song"
          >
            {isRecording ? <MicOff className="animate-pulse" /> : <Mic />}
          </button>

          {searchResults.length > 0 && (
            <div className="absolute z-50 mt-2 w-full bg-white text-black rounded-lg shadow-xl max-h-96 overflow-y-auto">
              <ul className="divide-y divide-gray-200">
                {searchResults.map((track) => (
                  <li key={track.id} className="hover:bg-gray-100 transition-colors">
                    <Link
                      to={{
                        pathname: "/music",
                        state: {
                          trackId: track.id,
                          title: track.title,
                          artist: track.artist.name,
                          albumCover: track.album.cover,
                        },
                      }}
                      className="flex items-center p-4 space-x-4"
                    >
                      <img
                        src={track.album.cover}
                        alt={track.title}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <p className="font-medium truncate">{track.title}</p>
                        <p className="text-sm text-gray-600 truncate">{track.artist.name}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex space-x-4">
          <button className="bg-white text-blue-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Sign Up
          </button>
          <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-900 transition-colors">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
