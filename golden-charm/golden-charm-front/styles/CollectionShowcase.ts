import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 20px;

  @media (max-width: 768px) {
    gap: 24px;
    padding: 30px 16px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
    gap: 16px;
  }
`;

export const Card = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 768px) {
    width: 90%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 16px 0 8px;
  font-weight: bold;
  color: ${(props) => props.theme.textBase};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  font-size: 0.95rem;
  margin-bottom: 16px;
  line-height: 1.4;
  color: ${(props) => props.theme.textBase};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.buttonPrimary};
  color: #fff;
  padding: 10px 18px;
  border: none;
  font-size: 0.85rem;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.buttonPrimaryHover};
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.8rem;
    padding: 10px;
  }
`;
