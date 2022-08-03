import { createContext, useContext, useState } from "react";
const isServer = typeof window === "undefined";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => getDarkModeTheme());

  function getDarkModeTheme() {
    if (isServer) return undefined;
    let theme;
    try {
      theme = localStorage.getItem("darkMode") || false;
    } catch (error) {
      // unsupported
    }
    console.log(theme)
    return JSON.parse(theme);
  }

  function setDarkModeTheme(value) {
    if (isServer) return undefined;
    setDarkMode(value);
    try {
      localStorage.setItem("darkMode", value);
    } catch (error) {
      // unsupported
    }
  }

  const value = { darkMode, setDarkModeTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
