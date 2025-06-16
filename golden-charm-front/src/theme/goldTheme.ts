// src/theme/goldTheme.ts
import type { DefaultTheme } from "styled-components";

export const goldTheme: DefaultTheme = {
  // Backgrounds gerais
  bgMain: "#fafafa",
  bgSectionPrimary: "#F5EAE0",    // bege rosado
  bgSectionSecondary: "#FCFBF9",  // off-white ainda mais suave
  bgGradientMain:
    "linear-gradient(180deg, #FFFFFF 0%, #F5EAE0 100%)",
  bgGradientSection:
    "linear-gradient(180deg, #FCFBF9 0%, #F5EAE0 80%, #FFFFFF 100%)",
  bgGradientCard:
    "linear-gradient(180deg, #FFFFFF 0%, #FCFBF9 100%)",

  // Cores dos componentes
  cardBackground: "#FFFFFF",
  cardShadow: "0 4px 12px rgba(0,0,0,0.05)",

  // Botões
  buttonPrimary: "#C99A4B",
  buttonPrimaryHover: "#B38436",

  // Tipografia
  textTitle: "#333333",
  textHighlight: "#C99A4B",
  textBase: "#4F4F4F",
  textInverse: "#FFFFFF",

  // Feedback
  successColor: "#3C763D",
  errorColor: "#AB2E2D",

  // Inputs
  inputBackground: "#F2F2F2",
  inputText: "#333333",

  // Layout
  borderHighlight: "#C99A4B",
  headerBackground: "#FFFFFF",
  textPrimary: "#333333",
  primaryColor: "#C99A4B",
};

export default goldTheme;

