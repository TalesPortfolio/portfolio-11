import styled from "styled-components";
import { colorId } from "../../../../../styles/colors";

export const SectionMain = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`

export const PageWrapper = styled.div`
  padding: 2rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding-top: 170px;
`;

export const Gallery = styled.div`
  flex: 1;
  max-width: 500px;
`;

export const MainImageWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const Details = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  color: ${colorId.textMuted};
  margin-bottom: 1rem;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

export const InfoItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const Options = styled.div`
  margin-bottom: 1.5rem;
`;

export const SizeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const SizeButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid ${colorId.textMuted};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colorId.ButtonStyles};
    color: white;
    border-color:${colorId.accentPink};
  }
`;

export const AddToCartButton = styled.button`
  background-color: ${colorId.ButtonStyles};
  color: white;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;

  &:hover {
    opacity: 0.9;
    background-color: ${colorId.ButtonStylesHover};
  }
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: ${colorId.accentPink};
  cursor: pointer;
  text-decoration: underline;
  margin-left: 1rem;
`;
