import React from "react";
import styled from "styled-components";
import { colorId } from "./colors";

export const H2 = styled.h2`
  text-align: center;
  padding-bottom: 20px;
  font-size: 3em;
  color: ${colorId.accentPurple};

  @media (max-width: 768px) {
    font-size: 2.2em;
  }
`;

export const CarouselWrapper = styled.div`
  width: 60%;
  margin: 2rem auto;
  min-height: 400px;


  /* Espaçamento entre cards */
  .slick-slide > div {
    padding: 0 8px;
  }

    @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;       /* Centralize horizontally */
  justify-content: center;   /* vertically centralize */
  text-align: center;

  background-image: ${colorId.backgroundGradient2};
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 20px;
  height: 410px;

  h3, p{
    color: ${colorId.accentPurple};
  }

    @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
  }
`;

export const Img = styled.img`
  display: block;            
  margin: 0 auto 1rem;       
  width: auto;
  max-width: 100%;           /* respect card width */
  max-height: 300px;         /* maintains proportion */
  object-fit: cover;

    @media (max-width: 768px) {
    max-height: 180px;
  }
`;

const ArrowBase = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "arrowColor"
})<{ arrowColor?: string }>`
  z-index: 1;
  cursor: pointer;

  &:before {
    content: "→";
    color: ${({ arrowColor }) => arrowColor || "#000"};
    font-size: 30px;
    opacity: 0.75;
  }

  &:hover:before {
    opacity: 1;
  }

  @media (max-width: 480px) {
    display: none; 
  }
`;


interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => (
  <ArrowBase
    arrowColor={colorId.accentPurple}
    className={className}
    style={{ ...style, left: 10, transform: "rotate(180deg)" }}
    onClick={onClick}
  />
);

export const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => (
  <ArrowBase
    arrowColor={colorId.accentPurple}
    className={className}
    style={{ ...style, right: 10 }}
    onClick={onClick}
  />
);
