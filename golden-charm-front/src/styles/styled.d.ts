// src/styles/styled.d.ts

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // Cores de fundo
    bgMain: string;
    bgSectionPrimary: string;
    bgSectionSecondary: string;
    bgGradientMain: string;
    bgGradientSection: string;
    bgGradientCard: string;

    // Cartões
    cardBackground: string;
    cardShadow: string;

    // Botões
    buttonPrimary: string;
    buttonPrimaryHover: string;

    // Tipografia
    textTitle: string;
    textHighlight: string;
    textBase: string;
    textInverse: string;

    // Feedback
    successColor: string;
    errorColor: string;

    // Inputs
    inputBackground: string;
    inputText: string;

    // Outros
    borderHighlight: string;
    headerBackground: string;
    textPrimary: string;
    primaryColor: string;
  }
}
