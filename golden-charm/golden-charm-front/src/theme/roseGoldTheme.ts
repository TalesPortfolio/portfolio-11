// src/theme/roseGoldTheme.ts
import type { DefaultTheme } from "styled-components";

export const roseGoldTheme: DefaultTheme = {
  // Backgrounds gerais - tons de ouro rosé delicado
  bgMain: "#FFF5F7",
  bgSectionPrimary: "#FFE8EC",
  bgSectionSecondary: "#FFF0F3",
  bgGradientMain:
    "linear-gradient(180deg, #FFFFFF 0%, #FFE8EC 100%)",
  bgGradientSection:
    "linear-gradient(180deg, #FFF5F7 0%, #FFE8EC 80%, #FFFFFF 100%)",
  bgGradientCard:
    "linear-gradient(180deg, #FFFFFF 0%, #FFF5F7 100%)",

  // Cores dos componentes
  cardBackground: "#FFFFFF",
  cardShadow: "0 4px 16px rgba(184, 134, 134, 0.15)",

  // Botões - ouro rosé vibrante
  buttonPrimary: "#D4A5A5",
  buttonPrimaryHover: "#B88686",

  // Tipografia - tons quentes
  textTitle: "#8B4F4F",
  textHighlight: "#D4A5A5",
  textBase: "#5A3A3A",
  textInverse: "#FFFFFF",

  // Feedback
  successColor: "#6B9F7F",
  errorColor: "#C54545",

  // Inputs
  inputBackground: "#FFF0F3",
  inputText: "#5A3A3A",

  // Layout
  borderHighlight: "#D4A5A5",
  headerBackground: "#FFFFFF",
  textPrimary: "#5A3A3A",
  primaryColor: "#D4A5A5",
};

export default roseGoldTheme;
