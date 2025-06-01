// styles/navBarStyled.ts
import styled, { keyframes } from "styled-components";
import { colorId } from "./colors";
import Link from "next/link";

const shake = keyframes`
  0%   { transform: translateX(0); }
  25%  { transform: translateX(-2px); }
  50%  { transform: translateX(2px); }
  75%  { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`;

export const Header = styled.header`
  position: fixed; // <-- Fixa no topo
  top: 0; // <-- Alinha ao topo da tela
  left: 0;
  right: 0;
  z-index: 1000; // <-- Garante que fique acima dos outros elementos
  width: 100%;
  min-height: 70px;
  background: ${colorId.backgroundPrimary};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 4px 4px 12px rgba(193, 41, 115, 0.2); // baseado em #C12973


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
    color: ${colorId.textLight};
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: ${colorId.gold};
      animation: ${shake} 0.5s infinite;
    }
  }
`;

//ok
export const LogoImage = styled.img`
  height: 80px;
  width: auto;

  @media (max-width: 480px) {
    height: 60px;
    display: none;
  }
`;

//ok
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

//ok
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

//ok
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
  color: ${colorId.textLight};
  text-decoration: none;
  &:hover {
    color: ${colorId.gold};
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
  @media (max-width: 768px) {
    //display: none;
  }
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
    color: ${colorId.gold};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
