"use client";
import styled, { keyframes } from "styled-components";
import { colorId } from "./colors";

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
  background-color: ${colorId.backgroundPrimary2};

  @media (max-width: 768px) {
    height: auto;
    padding: 4px;
  }
`;


export const QuoteContainer = styled.section`
  padding-top: 4rem;
  background-color: ${colorId.backgroundPrimary2};
  text-align: center;
  font-family: 'Georgia', serif;
`;

export const QuoteText = styled.p<AnimatedProps>`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${colorId.accentPurple};
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
  color: ${colorId.accentPurple};
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
  background-image: ${colorId.backgroundGradient};

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    height: auto;
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

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

export const BannerText = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
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
    color: ${colorId.gold};
  }

  h2 {
    font-size: 2em;
    font-weight: 400;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 1.5em;
  }

  button {
    background: ${colorId.accentPurple};
    border: 1px solid ${colorId.gold};
    color: ${colorId.gold};
    font-weight: bold;
    font-size: 1em;
    padding: 0.7em 1.5em;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${colorId.gold};
      color: ${colorId.backgroundPrimary};
      border: 1px solid ${colorId.accentPink};
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
    padding: 1rem;

    h1 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 1.6em;
    }

    p {
      font-size: 1.1em;
    }
  }
`;