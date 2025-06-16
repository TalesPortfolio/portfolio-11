// src/theme/pinkTheme.ts
import type { DefaultTheme } from "styled-components";

export const pinkTheme: DefaultTheme = {
  // Backgrounds gerais
  bgMain: "#fcf2f6",                           
  bgSectionPrimary: "#fbe8ee",                 
  bgSectionSecondary: "#fcf2f6",               

  // Degradês repensados
  bgGradientMain:
    "linear-gradient(to bottom, #fcf2f6 0%, #fbe8ee 70%, #fcf2f6 100%)",
  bgGradientSection:
    "linear-gradient(to bottom, #fcf2f6 0%, #f9e1ea 50%, #fcf2f6 100%)",
  bgGradientCard:
    "linear-gradient(to bottom, #ffffff 0%, #faf2f5 100%)",

  // Cartões
  cardBackground: "#ffffff",
  cardShadow: "0 4px 12px rgba(193, 41, 115, 0.1)",          

  // Botões
  buttonPrimary: "#e69ab4",                      
  buttonPrimaryHover: "#d47897",                 

  // Tipografia
  textTitle: "#7e3a51",                          
  textHighlight: "#d47897",                      
  textBase: "#4a4a4a",                            
  textInverse: "#ffffff",                        

  // Feedback
  successColor: "#34a853",                       
  errorColor: "#c0392b",                         

  // Inputs
  inputBackground: "#faf2f5",                    
  inputText: "#4a4a4a",                          

  // Layout / bordas
  borderHighlight: "#f7b2c4",                    
  headerBackground: "#ffffff",
  textPrimary: "#4a4a4a",
  primaryColor: "#e69ab4",                       
};

export default pinkTheme;
