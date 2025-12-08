
import styled from "styled-components";

export const PageWrapper = styled.div`
  /* deixa todo o conteúdo abaixo do header fixo */
  padding-top: 80px; /* ajuste pra altura real do seu AppNavbar */
  min-height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.bgMain};
  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  flex: 1;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterCard = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
`;

export const Select = styled.select`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
`;

export const FullWidth = styled.div`
  grid-column: span 2;

  @media (max-width: 600px) {
    grid-column: span 1;
  }
`;

export const Button = styled.button`
  background: #7eb6ff;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;

  &:hover {
    background: #5a9df8;
  }
`;
