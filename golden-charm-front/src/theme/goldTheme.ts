// src/theme/goldTheme.ts
import type { DefaultTheme } from "styled-components";

export const goldTheme: DefaultTheme = {
  bgMain: "#fafafa",
  bgSectionPrimary: "#F5EAE0",
  bgSectionSecondary: "#FFFFFF",
  bgGradientMain: "linear-gradient(180deg, #FFFFFF 0%, #F5EAE0 100%)",
  bgGradientSection: "linear-gradient(180deg, #F5EAE0 0%, #FAF9F7 100%)",
  bgGradientCard: "linear-gradient(to bottom, #F5EAE0 0%, #fafafa 100%)",

  cardBackground: "#FFFFFF",
  cardShadow: "0 4px 12px rgba(0,0,0,0.05)",

  buttonPrimary: "#C99A4B",
  buttonPrimaryHover: "#B38436",

  textTitle: "#333333",
  textHighlight: "#C99A4B",
  textBase: "#4F4F4F",
  textInverse: "#FFFFFF",

  successColor: "#3C763D",
  errorColor: "#AB2E2D",

  inputBackground: "#F2F2F2",
  inputText: "#333333",

  borderHighlight: "#C99A4B",
  headerBackground: "#FFFFFF",
  textPrimary: "#333333",
  primaryColor: "#C99A4B",
};

export default goldTheme;
