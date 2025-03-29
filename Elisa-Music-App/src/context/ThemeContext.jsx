import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const ThemeContext = createContext();

// Create provider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage or default to false
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Apply dark mode class to document element
    document.documentElement.classList.toggle('dark', darkMode);
    // Save preference to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};