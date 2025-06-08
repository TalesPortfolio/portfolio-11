import styled, { keyframes } from "styled-components";
import Link from "next/link";
import React from "react";
import { DefaultTheme } from "styled-components";


// Animação de hover
const shake = keyframes`
  0%   { transform: translateX(0); }
  25%  { transform: translateX(-2px); }
  50%  { transform: translateX(2px); }
  75%  { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`;

// Header fixo
export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  min-height: 70px;
  background: ${(props) => props.theme.bgMain};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 4px 4px 12px rgba(34, 31, 33, 0.2);

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    min-height: unset;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    justify-content: center;
    width: 100%;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  a {
    display: inline-block;
    color: ${(props) => props.theme.textPrimary};
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.textPrimary};
      animation: ${shake} 0.5s infinite;
    }
  }
`;

export const LogoImage = styled.img`
  height: 80px;
  width: auto;

  @media (max-width: 480px) {
    height: 60px;
    display: none;
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 200px;
  transition: width 0.3s;

  &:focus {
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 120px;
    &:focus {
      width: 150px;
    }
  }
`;

export const SearchIconWrapper = styled.button`
  position: absolute;
  right: 0.25rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: flex-end;
    width: 100%;
  }

  @media (max-width: 480px) {
    justify-content: flex-end;
    width: 100%;
    margin-top: 0.5rem;
    gap: 0.5rem;
  }
`;

export const IconLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textPrimary};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.textPrimary};
    animation: ${shake} 0.5s infinite;
  }

  @media (max-width: 768px) {
    width: auto;
    justify-content: center;
    align-items: center;
  }
`;

export const LanguageSelect = styled.select`
  margin-left: 1rem;
  padding: 0.3rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
`;

export const Carrosel = styled.div`
  width: 400px;
  margin-right: 2rem;

  .carousel-control-prev,
  .carousel-control-next,
  .carousel-indicators {
    display: none;
  }

  .carousel-item p {
    margin: 0;
    font-size: 0.9rem;
    font-weight: bold;
    color: ${(props) => props.theme.textPrimary};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const H2 = styled.h2`
  text-align: center;
  padding-bottom: 20px;
  font-size: 3em;
  color: ${(props) => props.theme.textPrimary};

  @media (max-width: 768px) {
    font-size: 2.2em;
  }
`;

export const CarouselWrapper = styled.div`
  width: 60%;
  margin: 2rem auto;
  min-height: 400px;

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
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: ${(props) => props.theme.bgGradientCard};
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 20px;
  height: 410px;

  h3, p {
    color: ${(props) => props.theme.textPrimary};
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
  max-width: 100%;
  max-height: 300px;
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

// Arrows adaptadas dinamicamente via props.theme
interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  theme?: DefaultTheme;
}

export const PrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick, theme }) => (
  <ArrowBase
    arrowColor={theme?.textTitle}
    className={className}
    style={{ ...style, left: 10, transform: "rotate(180deg)" }}
    onClick={onClick}
  />
);

export const NextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick, theme }) => (
  <ArrowBase
    arrowColor={theme?.textTitle}
    className={className}
    style={{ ...style, right: 10 }}
    onClick={onClick}
  />
);
