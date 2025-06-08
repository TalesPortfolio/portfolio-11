// components/VideoBanner.tsx

////////////////////////////////////////////////////////
// Nao estou usando por enquanto, se presizar ja tem  //
////////////////////////////////////////////////////////
'use client';
import React from 'react';
import {
  BannerWrapper,
  StyledVideo,
  StyledPoster,
  VideoBannerProps
} from '../styles/VideoBannerStyled';

const VideoBanner: React.FC<VideoBannerProps> = ({ src, poster }) => (
  <BannerWrapper>
    <StyledVideo
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
    />
    {/* Só exibido em mobile (≤480px) */}
    {poster && <StyledPoster src={poster} alt="Banner fallback" />}
  </BannerWrapper>
);

VideoBanner.displayName = "VideoBanner";

export default VideoBanner;
