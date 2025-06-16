"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { pinkTheme } from "../theme/pinkTheme";
import { blueTheme } from "../theme/blueTheme";
import { goldTheme } from "../theme/goldTheme";
import { greenTheme } from "../theme/greenTheme";

export type ThemeName = "pink" | "blue" | "gold" | "green";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "pink",
  setTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>("pink");

  // Carrega do localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeName | null;
    if (stored) setTheme(stored);
  }, []);

  // Persiste no localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  let selectedTheme = pinkTheme;
  if (theme === "blue") selectedTheme = blueTheme;
  else if (theme === "gold") selectedTheme = goldTheme;
  else if (theme === "green") selectedTheme = greenTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledThemeProvider theme={selectedTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
