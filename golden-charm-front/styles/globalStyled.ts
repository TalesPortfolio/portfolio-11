// styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

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
    overflow-x: hidden; /* ← previne scroll horizontal */
    background-color: ${(props) => props.theme.textInverse};
    color: ${(props) => props.theme.textBase};
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
