// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";  // Import HomePage
import DashboardPage from "./pages/DashboardPage";  // Import Dashboard
import MusicPlayerPage from "./pages/MusicPlayerPage";  // Import MusicPlayer

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<HomePage />} />  
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/music" element={<MusicPlayerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
