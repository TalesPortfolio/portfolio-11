"use client";
import styled, { keyframes } from "styled-components";

// Animação de fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface AnimatedProps {
  $animate?: boolean;
}

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 80px;
  background-color: ${(props) => props.theme.bgMain};

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 1rem 0;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem 0;
  }
`;

export const QuoteContainer = styled.section`
  padding-top: 4rem;
  background-color: ${(props) => props.theme.bgMain};
  text-align: center;
  font-family: 'Georgia', serif;
`;

export const QuoteText = styled.p<AnimatedProps>`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${(props) => props.theme.textPrimary};
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1.5s ease, transform 1.5s ease;

  ${({ $animate }) =>
    $animate &&
    `
    opacity: 1;
    transform: translateY(0);
  `}

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const QuoteAuthor = styled.p<AnimatedProps>`
  font-size: 1.1rem;
  color: ${(props) => props.theme.textTitle};
  font-style: italic;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1.5s ease 0.5s, transform 1.5s ease 0.5s;

  ${({ $animate }) =>
    $animate &&
    `
    opacity: 1;
    transform: translateY(0);
  `}

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 62vh;
  background-image: ${(props) => props.theme.bgGradientSection};

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const BannerSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px),
  (max-width: 768px),
  (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

export const BannerText = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textPrimary};
  padding: 2em;
  animation: ${fadeIn} 2s ease-in-out forwards;
  opacity: 0;

  div {
    max-width: 500px;
    width: 100%;
  }

  h1 {
    font-size: 3.5em;
    font-weight: 700;
    margin: 0 0 0.2em 0;
    color: ${(props) => props.theme.textPrimary};
  }

  h2 {
    font-size: 2em;
    font-weight: 400;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 1.5em;
    color: ${(props) => props.theme.textPrimary};
  }

  button {
    background: ${(props) => props.theme.buttonPrimary};
    color: ${(props) => props.theme.textInverse};
    font-weight: bold;
    font-size: 1em;
    padding: 0.7em 1.5em;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.buttonPrimaryHover};
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
    padding: 1.5rem;

    h1 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 1.5em;
    }

    p {
      font-size: 1em;
    }

    button {
      font-size: 0.9em;
      padding: 0.6em 1.2em;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.2em;
    }

    p {
      font-size: 0.95em;
    }

    button {
      width: 100%;
    }
  }
`;
