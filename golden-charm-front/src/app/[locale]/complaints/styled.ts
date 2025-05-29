import styled from "styled-components";
import { colorId } from "../../../../styles/colors";

export const SectionMain = styled.div`
  width: 100%;
  background-image: ${colorId.backgroundGradient2};
  padding-top: 100px;
`;

export const Section = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  color: ${colorId.accentPurple};

  h1 {
    font-size: 2.5rem;
    color: ${colorId.accentPink};
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    text-align: justify;
    margin-bottom: 30px;
    line-height: 1.6;
    font-size: 1.05rem;
  }

  @media (max-width: 768px) {
    padding: 70px 16px;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.7rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-top: 10px;
  font-size: 1rem;

  input[type="checkbox"] {
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid ${colorId.accentPurple};
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #333;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${colorId.accentPink};
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid ${colorId.accentPurple};
  border-radius: 4px;
  background-color: #f5f5f5;
  resize: vertical;
  color: #333;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${colorId.accentPink};
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const Button = styled.button`
  background-color: ${colorId.accentPink};
  color: white;
  font-weight: bold;
  border: none;
  padding: 12px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-size: 1rem;

  &:hover {
    background-color: ${colorId.accentPurple};
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.95rem;
  }
`;


