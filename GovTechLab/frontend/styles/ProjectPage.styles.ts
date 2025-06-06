'use client';
// styles/ProjectPage.styles.ts
import styled from "styled-components";

export const Wrapper = styled.main`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
  font-size: 1rem;

  th, td {
    border: 1px solid #ccc;
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;

    thead {
      display: none;
    }

    tr {
      display: block;
      margin-bottom: 1rem;
      border: 1px solid #ddd;
    }

    td {
      display: flex;
      justify-content: space-between;
      padding: 0.75rem;
      border: none;
      border-bottom: 1px solid #eee;
    }

    td::before {
      content: attr(data-label);
      font-weight: bold;
    }
  }
`;
