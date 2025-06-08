"use client";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-image: ${(props) => props.theme.bgGradientSection};
  height: auto;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 4px;
  }
`;

export const SectionInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerInfo = styled.div`
  h2 {
    font-size: 1.3em;
    color: ${(props) => props.theme.textPrimary};
  }
  p {
    color: ${(props) => props.theme.textPrimary};
    font-size: 14px;
    margin-bottom: 5px;
  }
  width: auto;
`;

export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  span {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  input[type="email"] {
    flex: none;
    width: 250px;
    max-width: 100%;
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
    padding: 8px;
    font-size: 14px;
    text-transform: uppercase;

    ::placeholder {
      color: #aaa;
      letter-spacing: 1px;
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid black;
    }
  }

  input[type="button"] {
    background-color: ${(props) => props.theme.textHighlight};
    color: white;
    border: none;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 13px;
    transition: background 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.textTitle};
    }
  }

  p {
    font-size: 12px;
    margin-top: 8px;
    color: #333;
    line-height: 1.4;
  }

  a {
    color: #e07258;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Copyrigth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: ${(props) => props.theme.textPrimary};

  h2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.textPrimary};
  }

  p {
    margin-bottom: 5px;
  }
`;
