import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, ...props }) => (
  <label>
    <StyledRadioButton type="radio" {...props} />
    {label}
  </label>
);

export default RadioButton;
