import styled from "styled-components";

export const SectionMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: ${({ theme }) => theme.bgMain};
`;

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

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 120px;
  }
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

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Price = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textBase};
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
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.inputText};
  border: 1px solid ${({ theme }) => theme.textBase};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.buttonPrimary};
    color: white;
    border-color: ${({ theme }) => theme.textHighlight};
  }
`;

export const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.buttonPrimary};
  color: white;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonPrimaryHover};
  }
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.textHighlight};
  cursor: pointer;
  text-decoration: underline;
  margin-left: 1rem;
`;
