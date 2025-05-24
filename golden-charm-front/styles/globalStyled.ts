// styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';
import { colorId } from './colors'; // ajuste o caminho conforme sua estrutura

export const GlobalStyles = createGlobalStyle`
  /* Reset básico */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Fonte e cores padrão */
  html, body {
    height: 100%;
    background-color: ${colorId.textLight};
    color: ${colorId.textMuted};
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  /* Links sem decoração */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Listas sem marcadores */
  ul, ol {
    list-style: none;
  }

  /* Botões básicos */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }
`;
