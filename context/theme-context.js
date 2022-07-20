import { createContext, useContext, useState, useEffect } from "react";
const isServer = typeof window === "undefined";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => getDarkModeTheme());

  function getDarkModeTheme() {
    if (isServer) return undefined;
    let theme;
    try {
      theme = localStorage.getItem("darkMode") || undefined;
    } catch (error) {
      // unsupported
    }
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

  useEffect(() => {
    // const localValue = localStorage.getItem("darkMode") || undefined;
    // setDarkMode(localValue);
    // console.log(initialTheme);
    console.log(darkMode);
  }, [darkMode]);

  // function darkModeHandler(value) {
  //   localStorage.setItem("darkMode", JSON.stringify(value));
  //   setDarkMode(value);
  // }

  const value = { darkMode, setDarkModeTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
