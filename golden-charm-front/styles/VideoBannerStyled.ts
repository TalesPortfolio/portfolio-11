// styles/bannerStyles.ts
export interface VideoBannerProps {
    src: string;
    poster?: string;
  }

import styled from 'styled-components';
export const BannerWrapper = styled.div`
  width: 100%;
  height: 86vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 50vh;
  }
  @media (max-width: 480px) {
    height: 40vh;
  }
`;

// Vídeo cobrindo todo o container, escondido em mobile
export const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;

  @media (max-width: 480px) {
    display: none;   /* esconde vídeo em telefones */
  }
`;

// Poster/Imagem de fallback, escondido em desktop e tablet
export const StyledPoster = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: none;

  @media (max-width: 480px) {
    display: block;  /* exibe imagem em telefones */
  }
`;
