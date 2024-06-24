
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonProps } from './Button'; // Import ButtonProps from Button

describe('Button Component', () => {
  // Declare a mock ButtonProps for testing
  const mockButtonProps: ButtonProps = {
    text: 'Test Button',
    onClick: () => {}, // Mock onClick function
  };

  // Test to check that the Button is visible
  it('should be visible', () => {
    render(<Button {...mockButtonProps} />);
    const buttonElement = screen.getByRole('button', { name: /Test Button/i });
    expect(buttonElement).toBeVisible();
  });

  // Test other functionalities based on ButtonProps as needed
});
