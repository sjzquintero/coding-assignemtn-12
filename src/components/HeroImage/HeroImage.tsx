import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 400px;
  color: black;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const HeroImage: React.FC<HeroImageProps> = ({ title, description, imageUrl }) => {
  return (
    <HeroContainer backgroundImage={imageUrl}>
      <HeroTitle>{title}</HeroTitle>
      {description && <HeroDescription>{description}</HeroDescription>}
    </HeroContainer>
  );
};

export default HeroImage;
