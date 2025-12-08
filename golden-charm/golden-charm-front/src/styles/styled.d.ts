// src/styles/styled.d.ts

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // Backgrounds gerais
    bgMain: string;
    bgSectionPrimary: string;
    bgSectionSecondary: string;
    bgGradientMain: string;
    bgGradientSection: string;
    bgGradientCard: string;

    // Cores dos componentes
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

    // Layout / bordas
    borderHighlight: string;
    headerBackground: string;
    textPrimary: string;    // cor primária de texto fora de destaques
    primaryColor: string;   // cor primária de destaque (ex: links, ícones)
  }
}
