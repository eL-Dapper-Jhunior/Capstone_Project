// src/pages/MusicPlayerPage.jsx
import React, { useState, useRef } from "react";

function MusicPlayerPage() {
  // Sample Track (Replace with API Data or Props)
  const track = {
    title: "In My Blood",
    artist: "Shawn Mendes",
    cover: "/track-cover.jpg", // Example cover image
    audioSrc: "/path-to-audio.mp3", // Replace with actual audio file or stream URL
  };

  const audioRef = useRef(null); // Reference to audio element
  const [isPlaying, setIsPlaying] = useState(false); // Track play state

  // Play or Pause the audio
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🎵 Elisa's Music Player</h1>
      </div>

      {/* Music Player Card */}
      <div className="bg-blue-700 p-8 rounded-3xl shadow-lg w-80 mx-auto">
        <img
          src={track.cover}
          alt={track.title}
          className="w-64 h-64 mx-auto rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold">{track.title}</h2>
        <p className="text-lg text-gray-300">{track.artist}</p>

        <div className="mt-4">
          {/* Audio Tag and Progress Controls */}
          <audio ref={audioRef} src={track.audioSrc} />

          {/* Play / Pause Button */}
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={togglePlayPause}
              className="p-4 bg-gray-800 rounded-full"
            >
              {isPlaying ? (
                <img src="/pause-icon.png" alt="Pause" className="w-6" />
              ) : (
                <img src="/play-icon.png" alt="Play" className="w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayerPage;
