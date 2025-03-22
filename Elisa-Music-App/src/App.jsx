// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage"; // Ensure correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Route */}
        <Route path="/dashboard" element={<DashboardPage />} /> {/* Dashboard Route */}
      </Routes>
    </Router>
  );
}

export default App;
