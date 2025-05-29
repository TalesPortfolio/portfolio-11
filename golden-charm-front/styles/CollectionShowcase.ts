import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
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
`;

export const Description = styled.p`
  font-size: 0.95rem;
  margin-bottom: 16px;
  line-height: 1.4;
`;

export const Button = styled.button`
  background-color: #111;
  color: #fff;
  padding: 10px 18px;
  border: none;
  font-size: 0.85rem;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #444;
  }
`;
