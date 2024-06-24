// src/components/Button/Button.tsx

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const ButtonContainer = styled.button<{ bgColor: string }>`
  padding: 10px 20px;
  background-color: ${(props) => props.bgColor};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkred;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  const [bgColor, setBgColor] = React.useState('blue');

  const handleClick = () => {
    setBgColor('green');
    onClick();
  };

  return (
    <ButtonContainer bgColor={bgColor} onClick={handleClick}>
      {text}
    </ButtonContainer>
  );
};

export default Button; 
export type { ButtonProps };
