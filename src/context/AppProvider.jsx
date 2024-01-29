import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

// Create the context
const AppContext = createContext();

// Create the provider component
const AppProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : "light";

  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Save the theme to local storage
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

//   useEffect(() => {
//     // Update local storage when theme changes
//     localStorage.setItem("theme", JSON.stringify(theme));
//   }, [theme]);

  const value = {
    theme,
    toggleTheme,
  };
  console.log("context Value : ", value);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
