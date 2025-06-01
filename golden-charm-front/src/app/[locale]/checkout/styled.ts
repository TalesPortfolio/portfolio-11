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
  margin-top : 2rem;
  margin-bottom: 2rem;
  color: #C12973;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
`;

export const ItemDetails = styled.div`
  flex: 1;
`;

export const RemoveButton = styled.button`
  margin-top: 0.5rem;
  background-color: transparent;
  color: #C12973;
  border: 1px solid #C12973;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
`;

export const FinishButton = styled.button`
  margin-top: 1rem;
  background-color: #C12973;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 6px;
`;

export const Total = styled.h2`
  margin-top: 2rem;
`;
