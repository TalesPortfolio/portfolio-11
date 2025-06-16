// src/app/[locale]/complaints/styled.ts
import styled from "styled-components";

export const SectionMain = styled.div`
  padding-top: 120px; /* espaço para o Navbar fixo */
  background: ${({ theme }) => theme.bgGradientSection};
  min-height: 100vh;
`;

export const Section = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  padding-bottom: 50px;
   margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.textTitle};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.textBase};
  margin-bottom: 2rem;
  line-height: 1.4;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textBase};
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.textBase};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.textHighlight};
  }
`;

export const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.textBase};
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.textHighlight};
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 1rem;
    height: 1rem;
  }

  label {
    font-weight: 500;
    color: ${({ theme }) => theme.textBase};
  }
`;

export const Button = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: ${({ theme }) => theme.buttonPrimary};
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.buttonPrimaryHover};
  }
`;
