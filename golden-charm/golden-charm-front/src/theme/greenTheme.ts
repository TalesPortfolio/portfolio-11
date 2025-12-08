// src/theme/greenTheme.ts
import type { DefaultTheme } from "styled-components";

export const greenTheme: DefaultTheme = {
  // Backgrounds gerais
  bgMain: "#f3faf3",                   // off-white esverdeado
  bgSectionPrimary: "#bef5be",         // verde claro pastel
  bgSectionSecondary: "#e6f7e6",       // verde muito suave
  bgGradientMain: "linear-gradient(to bottom, #6fcf97 0%, #bef5be 70%)",
  bgGradientSection: "linear-gradient(to bottom, #e6f7e6 0%, #f3faf3 100%)",
  bgGradientCard: "linear-gradient(to bottom, #d2f4d2 0%, #f3faf3 100%)",

  // Cores dos componentes
  cardBackground: "#ffffff",
  cardShadow: "0 4px 12px rgba(0, 128, 64, 0.15)",

  // Botões
  buttonPrimary: "#27ae60",            // verde médio
  buttonPrimaryHover: "#219150",       // hover um pouco mais escuro

  // Tipografia
  textTitle: "#14532d",                // verde bem escuro para títulos
  textHighlight: "#2f855a",            // links e destaques
  textBase: "#2d3748",                 // neutro escuro para texto corrido
  textInverse: "#ffffff",              // para texto em botões escuros

  // Feedback
  successColor: "#059669",             // esmeralda
  errorColor: "#e53e3e",               // vermelho padrão

  // Inputs
  inputBackground: "#f7faf7",          // quase branco, leve tom verde
  inputText: "#2d3748",                // condiz com textBase

  // Layout / bordas
  borderHighlight: "#27ae60",          // mesma cor de buttonPrimary
  headerBackground: "#ffffff",         // header branco limpo
  textPrimary: "#1f2937",              // texto padrão
  primaryColor: "#27ae60",             // cor primária unificada
};

export default greenTheme;
