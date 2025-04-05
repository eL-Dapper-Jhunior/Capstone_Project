import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaBackward, FaForward, FaHeart, FaComment } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";

import Footer from "../components/Footer";
import Sidebar from "../components/SideBar";
    
       

function MusicPlayerPage() {
  const track = {
    title: "In My Blood",
    artist: "Shawn Mendes",
    cover: "/track-cover.jpg", // Replace with actual image
    audioSrc: "/path-to-audio.mp3", // Replace with actual audio file
  };

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    setProgress(progressPercent);
  };

  const skipForward = () => {
    audioRef.current.currentTime += 10;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white p-4">
      {/* App Title */}
      <h1 className="text-xl font-semibold text-center mb-4">🎵 Elisa's Music Player</h1>
  
      {/* Main Layout with Sidebar + Music Player */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-1/5">
          <Sidebar />
        </div>
  
        {/* Music Player Card */}
        <div className="bg-blue-700 rounded-3xl p-6 w-80 shadow-lg">
          {/* Tabs */}
          <div className="flex justify-center space-x-6 mb-4 text-sm">
            <button className="bg-white text-blue-700 px-4 py-1 rounded-full font-semibold">
              Song
            </button>
            <button className="text-white px-4 py-1 rounded-full border border-white">
              Video
            </button>
          </div>
  
          {/* Album Art */}
          <img
            src={track.cover}
            alt={track.title}
            className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
          />
  
          {/* Track Info */}
          <h2 className="text-lg font-bold text-center">{track.title}</h2>
          <p className="text-sm text-center text-gray-300 mb-4">{track.artist}</p>
  
          {/* Audio Player */}
          <audio
            ref={audioRef}
            src={track.audioSrc}
            onTimeUpdate={handleTimeUpdate}
          />
  
          {/* Progress */}
          <div className="flex items-center justify-between text-xs text-gray-300 mb-2">
            <span>1:33</span>
            <span>6:55</span>
          </div>
          <div className="w-full h-2 bg-gray-500 rounded-full mb-4">
            <div
              className="h-2 bg-white rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
  
          {/* Controls */}
          <div className="flex justify-center items-center space-x-6 mb-4">
            <button onClick={skipBackward}>
              <FaBackward className="text-2xl" />
            </button>
            <button
              onClick={togglePlayPause}
              className="bg-white text-blue-700 p-3 rounded-full"
            >
              {isPlaying ? <FaPause className="text-xl" /> : <FaPlay className="text-xl" />}
            </button>
            <button onClick={skipForward}>
              <FaForward className="text-2xl" />
            </button>
          </div>
  
          {/* Reactions */}
          <div className="flex justify-between text-xs text-white px-4">
            <div className="flex items-center space-x-1">
              <FiThumbsUp />
              <span>11K</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaHeart />
              <span>1K</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaComment />
              <span>0.9K</span>
            </div>
          </div>
        </div>
      </div>
  
      {/* Footer */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  )
};
  
export default MusicPlayerPage;