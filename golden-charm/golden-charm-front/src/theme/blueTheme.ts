// src/theme/blueTheme.ts
import type { DefaultTheme } from "styled-components";

export const blueTheme: DefaultTheme = {
  // Backgrounds gerais
  bgMain: "#f5faff",                   // mantém off-white
  bgSectionPrimary: "#c9e6ff",         // azul claro suave
  bgSectionSecondary: "#eaf4fc",       // muito leve
  bgGradientMain: "linear-gradient(to bottom, #5aa8ff 0%, #c9e6ff 60%)",
  bgGradientSection: "linear-gradient(to bottom, #eaf4fc 0%, #f5faff 100%)",
  bgGradientCard: "linear-gradient(to bottom, #ddeeff 0%, #f5fbff 100%)",

  // Cores dos componentes
  cardBackground: "#ffffff",
  cardShadow: "0 4px 12px rgba(0, 102, 204, 0.12)",

  // Botões
  buttonPrimary: "#2563eb",            // azul mais profundo
  buttonPrimaryHover: "#1e40af",       // hover ainda mais rico

  // Tipografia
  textTitle: "#1e3a8a",                // título forte
  textHighlight: "#3b82f6",            // links e destaques
  textBase: "#374151",                 // cinza escuro para texto corrido
  textInverse: "#ffffff",              // texto em botões escuros

  // Feedback
  successColor: "#059669",             // esmeralda padrão Tailwind
  errorColor: "#dc2626",               // vermelho escuro

  // Inputs
  inputBackground: "#f9fafb",          // leve cinza de fundo
  inputText: "#374151",                // condiz com textBase

  // Layout / bordas
  borderHighlight: "#facc15",          // mantém dourado suave
  headerBackground: "#ffffff",         // header branco limpo
  textPrimary: "#1f2937",              // texto padrão (para títulos menores)
  primaryColor: "#2563eb",             // cor primária única
};

export default blueTheme;
