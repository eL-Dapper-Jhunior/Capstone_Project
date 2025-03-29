import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import MusicPlayerPage from "./pages/MusicPlayerPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/music" element={<MusicPlayerPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;