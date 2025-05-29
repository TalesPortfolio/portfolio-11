import styled from "styled-components";
import { colorId } from "../../../../styles/colors";

export const SectionMain = styled.div`
  width: 100%;
  background-image: ${colorId.backgroundGradient2};
`;

export const Section = styled.div`
  margin: 100px auto 0 auto;
  padding: 40px;
  max-width: 1000px;
  color: aliceblue;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    padding-top: 30px;
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: ${colorId.accentPurple};
    text-align: center;
  }

  p {
    text-align: justify;
    margin-bottom: 20px;
    line-height: 1.6;
    color: ${colorId.accentPurple};
    font-size: 1rem;
  }

  img {
    margin: 20px 0;
    max-width: 100%;
    width: 600px;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin: 120px auto 0 auto;
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.95rem;
    }

    img {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
    margin: 70px auto 0 auto;
    h1 {
      font-size: 1.7rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
