import styled from "styled-components";

export const SectionMain = styled.div`
  width: 100%;
  height: auto;
  background-image: ${({ theme }) => theme.bgGradientSection};
`;

export const Section = styled.div`

  margin: 40px auto 0 auto;
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
    color: ${({ theme }) => theme.textTitle};
    text-align: center;
  }

  p {
    text-align: justify;
    margin-bottom: 20px;
    line-height: 1.6;
    color: ${({ theme }) => theme.textTitle};
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
