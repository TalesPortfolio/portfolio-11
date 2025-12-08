// app/[locale]/product/page/styled.ts
"use client";

import styled from "styled-components";
import Link from "next/link";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
    margin-top: 30px;
  padding: 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.bgMain};
`;

export const SectionCards = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;

  background-color: ${({ theme }) => theme.bgMain};
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.textTitle};
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const CategoryCard = styled(Link)`
  width: 240px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.textBase};
  border: 2px solid ${({ theme }) => theme.headerBackground};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: ${({ theme }) => theme.cardBackground};

  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.cardShadow};
  }

  img {
    object-fit: cover;
  }

  h2 {
    padding: 1rem;
    font-size: 1.3rem;
    background-color: ${({ theme }) => theme.bgMain};
    color: ${({ theme }) => theme.textTitle};
  }
`;
