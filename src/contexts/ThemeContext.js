import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, toggleDarkMode] = useToggleState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
