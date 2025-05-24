import styled, { keyframes } from "styled-components";
import { colorId } from "./colors";

const shake = keyframes`
  0%   { transform: translateX(0); }
  25%  { transform: translateX(-2px); }
  50%  { transform: translateX(2px); }
  75%  { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`;

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  height: 100%;
  background-color: ${colorId.backgroundPrimary2};

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 1rem;
  }
`;

export const H2 = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${colorId.accentPurple};
`;

export const Img = styled.img`
  width: 160px;
  height: 150px;
  object-fit: cover;
  margin-top: 50px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    margin-top: 10px;
  }
`;

export const DivIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "bgColor",
})<{ bgColor: string }>`
  height: 150px;
  margin-top: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Subtitle = styled.p`
  color: ${colorId.accentPurple};
  font-weight: bold;

  &:hover {
    color: ${colorId.accentPink};
    animation: ${shake} 0.5s infinite;
  }

  @media (max-width: 768px) {
    color: ${colorId.gold};
  }

  @media (max-width: 480px) {
    color: ${colorId.gold};
  }
`;
