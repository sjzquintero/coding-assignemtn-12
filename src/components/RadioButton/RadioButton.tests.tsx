
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

test('renders the RadioButton component', () => {
  render(<RadioButton label="Test RadioButton" />);
  const radioButtonElement = screen.getByLabelText(/Test RadioButton/i);
  expect(radioButtonElement).toBeInTheDocument();
});

test('radio button can be checked and unchecked', () => {
  render(<RadioButton label="Test RadioButton" />);
  const radioButtonElement = screen.getByLabelText(/Test RadioButton/i);
  expect(radioButtonElement).not.toBeChecked();
  radioButtonElement.click();
  expect(radioButtonElement).toBeChecked();
});
