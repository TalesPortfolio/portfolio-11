import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.bgGradientSection};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.textTitle};
  margin-bottom: 1rem;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.textBase};
  border-radius: 8px;
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${({ theme }) => theme.buttonPrimary};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  transition: background 0.3s;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.buttonPrimaryHover};
  }
`;

export const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.errorColor};
  text-align: center;
  margin-top: 1rem;
`;

// Novo componente pro link de registro
export const FooterText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.textBase};
  font-size: 0.9rem;

  a {
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.textHighlight};
    }
  }
`;