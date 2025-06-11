'use client'

import styled from "styled-components";

const InfoBox = styled.div`
  background-color: #f3eaec;
  text-align: center;
  color: #351219;
  padding: 1rem 1.25rem;
  border-left: 5px solid #893040;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
    border-left: 4px solid #893040;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;

export default function CompareInfo() {
  return (
    <InfoBox>
      <p>
        Le projet a été réalisé à des fins de démonstration uniquement, sans traitement des données en ce qui concerne les dates.
      </p>
      <p>
        Par conséquent, certaines divergences peuvent apparaître dans les valeurs, car certains députés ont commencé leur carrière politique bien avant l’année 2023.
      </p>
      <p>
        Nous recommandons de vérifier directement les données disponibles sur le site de data.public.
      </p>
    </InfoBox>
  );
}
