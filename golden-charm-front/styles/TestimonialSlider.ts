import styled from "styled-components";
import { colorId } from "./colors";


export const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;


export const Wrapper = styled.section`
  background-image: ${colorId.backgroundGradient2};
  padding: 4rem 2rem;
  text-align: center;

  .slick-slider {
    max-width: 1200px;
    margin: 0 auto;
  }

  .slick-dots {
    bottom: -30px;
  }

  .slick-slide > div {
    display: flex;
    justify-content: center;
  }
`;

export const TopText = styled.div`
  margin-bottom: 3rem;
`;

export const Stars = styled.div`
  color: #3b82f6;
  font-size: 1.2rem;
`;

export const RatingText = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-top: 0.25rem;
`;

export const Headline = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  margin-top: 1rem;
  font-family: "Georgia", serif;
`;

export const SlideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const Author = styled.p`
  font-size: 1rem;
  font-style: italic;

  a {
    text-decoration: underline;
    color: #000;
  }
`;

export const Image = styled.img`
  flex: 0 0 300px;
  max-width: 300px;
  width: 100%;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
