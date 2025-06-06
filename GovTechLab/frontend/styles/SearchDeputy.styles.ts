// styles/SearchDeputy.styles.ts
import styled from "styled-components";

export const Container = styled.main`
  padding: 2rem;
  max-width: 100%;
  font-family: "Georgia", serif;

  h1{
    text-align: center;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto 2rem auto;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: #893040; /* primary-100 */
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #5c202b; /* primary-130 */
  }
`;

export const ToggleButton = styled(Button)`
  background-color: #b6828c; /* primary-60 */
`;

export const DeputyGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0;
`;


export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
  overflow-x: auto; /* habilita scroll se necessário */
  background: ${({ theme }) => theme.colors.card || "#fff"};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;


export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  min-width: 200px;
  align-items: center;
  text-align: center;
`;

export const PartyBadge = styled.span`
  background-color: #351219; /* primary-160 */
  color: white;
  border-radius: 8px;
`;

export const ChartContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 400px;
`;


export const ChartRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: nowrap;
`;

// styles/SearchDeputy.styles.ts

export const PhotoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const PhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 110px;
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }

  img {
    border-radius: 50%;
    width: 90px;
    height: 90px;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.85rem;
    color: #351219;
    font-weight: 500;
  }
`;
