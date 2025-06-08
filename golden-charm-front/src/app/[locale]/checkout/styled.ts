import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  padding: 2rem;
  padding-top: 6rem;
  max-width: 1000px;
  margin: 0 auto;
  flex: 1;
`;

export const Title = styled.h1`
  margin-top: 3rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.textBase};
  padding-bottom: 1rem;
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const RemoveButton = styled.button`
  margin-top: 0.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textHighlight};
  border: 1px solid ${({ theme }) => theme.textHighlight};
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
`;

export const FinishButton = styled.button`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.textHighlight};
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 6px;
`;

export const Total = styled.h2`
  margin-top: 2rem;
`;
