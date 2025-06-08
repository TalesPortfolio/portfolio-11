"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { pinkTheme as pinkTheme } from "../theme/pinkTheme";
import { blueTheme as blueTheme } from "../theme/blueTheme";

// Tipos de tema disponíveis
type ThemeName = "pink" | "blue";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

// Cria o contexto
const ThemeContext = createContext<ThemeContextType>({
  theme: "pink",
  setTheme: () => {},
});

// Hook para acessar o contexto
export const useThemeContext = () => useContext(ThemeContext);

// Componente Provider
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>("pink");

  // Carrega o tema salvo no localStorage (ou padrão)
  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeName;
    if (stored) setTheme(stored);
  }, []);

  // Atualiza o tema no localStorage quando trocar
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Aponta o tema atual para o ThemeProvider do styled-components
  const selectedTheme = theme === "pink" ? pinkTheme : blueTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledThemeProvider theme={selectedTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
