// src/App.js or App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeatureSection from "./components/FeatureSection";
import Dashboard from "./pages/DashboardPage"; // Assuming you have a Dashboard component
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
      </Routes>
    </Router>
  );
}

export default App;
