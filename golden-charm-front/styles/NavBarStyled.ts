// estilização (NavbarStyles.ts)
import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  min-height: 70px;
  background: ${(props) => props.theme.bgGradientMain};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 0.5rem;
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
    color: ${(props) => props.theme.textPrimary || "#1f1f1f"};
    font-weight: 600;
    text-decoration: none;
    padding: 6px 12px;
    border-radius: 6px;
    transition: background 0.2s, color 0.2s;

    &:hover {
      color: ${(props) => props.theme.primaryColor || "#003366"};
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

export const LogoImage = styled.img`
  height: 40px; // menor que antes
  width: auto;
  margin-right: 0.5rem;
`;

export const LogoText = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textPrimary};

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;



export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  gap: 1rem;

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
  color: ${(props) => props.theme.textPrimary || "#1f1f1f"};
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.primaryColor || "#1155cc"};
  }
`;

export const LanguageSelect = styled.select`
  background: #f0f8ff;
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: #888;
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
    color: ${(props) => props.theme.textPrimary || "#C12973"};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
