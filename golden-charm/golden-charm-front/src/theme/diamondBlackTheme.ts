// src/theme/diamondBlackTheme.ts
import type { DefaultTheme } from "styled-components";

export const diamondBlackTheme: DefaultTheme = {
  // Backgrounds gerais - elegância em preto e cinza
  bgMain: "#1A1A1A",
  bgSectionPrimary: "#2A2A2A",
  bgSectionSecondary: "#242424",
  bgGradientMain:
    "linear-gradient(180deg, #1A1A1A 0%, #2A2A2A 100%)",
  bgGradientSection:
    "linear-gradient(180deg, #242424 0%, #2A2A2A 80%, #1A1A1A 100%)",
  bgGradientCard:
    "linear-gradient(180deg, #2A2A2A 0%, #242424 100%)",

  // Cores dos componentes
  cardBackground: "#2A2A2A",
  cardShadow: "0 4px 20px rgba(192, 192, 192, 0.2)",

  // Botões - prata brilhante
  buttonPrimary: "#C0C0C0",
  buttonPrimaryHover: "#E8E8E8",

  // Tipografia - contraste com prata
  textTitle: "#E8E8E8",
  textHighlight: "#C0C0C0",
  textBase: "#CCCCCC",
  textInverse: "#1A1A1A",

  // Feedback
  successColor: "#5CB85C",
  errorColor: "#D9534F",

  // Inputs
  inputBackground: "#333333",
  inputText: "#E8E8E8",

  // Layout
  borderHighlight: "#C0C0C0",
  headerBackground: "#1F1F1F",
  textPrimary: "#E8E8E8",
  primaryColor: "#C0C0C0",
};

export default diamondBlackTheme;
