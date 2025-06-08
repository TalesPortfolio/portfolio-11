import styled from "styled-components";

export const SectionProduct = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgMain};
  padding-top: 120px;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    padding-top: 140px; // mais espaço para a AppNavbar compactada
  }

  @media (max-width: 480px) {
    padding-top: 120px;
    padding-bottom: 20px;
  }
`;

export const BannerImage = styled.div`
  width: 80%;
  max-width: 1200px;
  border-radius: 12px;
  overflow: hidden;
  margin: 4rem auto;
  display: flex;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.cardShadow};

  @media (max-width: 768px) {
    margin: 2rem auto;
  }

  @media (max-width: 480px) {
    width: 90%;
    margin: 1.5rem auto;
  }
`;


export const Product = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
  padding: 1rem;
  width: 80%;
  max-width: 1200px;

  @media (max-width: 768px) {
    width: 90%;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 95%;
    gap: 1rem;
    padding: 0.5rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: ${({ theme }) => theme.textPrimary};
  margin: 2rem 0 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 1.5rem 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin: 1rem 0 0.5rem;
  }
`;
