// styles/ProductCardStyles.ts
import styled, { css } from 'styled-components';
import { colorId } from './colors';

export const Card = styled.div`
  width: 300px;
  background-image: ${colorId.backgroundGradient2};
  box-shadow: 4px 4px 8px rgba(193, 41, 115, 0.2);
  border: 1px solid ${colorId.textLight};
  padding: 1rem;
  margin: 1rem;
  position: relative;

    @media (max-width: 768px) {
    width: 90%;
    margin: 1rem auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.75rem;
    margin: 0.75rem 0;
  }
`;

export const Favorite = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`;

export const Tag = styled.span<{ variant?: 'ready' | 'details' }>`
  font-size: 11px;
  padding: 4px 6px;
  font-weight: 600;
  border: 1px solid black;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${({ variant }) =>
    variant === 'ready' &&
    css`
      background-color: #d4edda;
      border-color: #28a745;
      color: #155724;
    `}

  ${({ variant }) =>
    variant === 'details' &&
    css`
      border-color: #C12973;
      color: #C12973;
      background-color: transparent;
      cursor: pointer;

      &:hover {
        background-color: #fce4ec;
      }
    `}
`;

export const Info = styled.div`
  margin-top: 10px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 4px 0;
`;

export const Price = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export const Subtext = styled.p`
  font-size: 12px;
  color: ${colorId.textMuted};
`;

export const Badge = styled.p`
  font-size: 12px;
  color: red;
  font-weight: 600;
  margin-top: 4px;
`;


export const AddToCartButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: ${colorId.ButtonStyles};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:${colorId.ButtonStylesHover};
  }

    &:hover {
    background-color: ${colorId.ButtonStylesHover};
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 12px;
  }
`;
