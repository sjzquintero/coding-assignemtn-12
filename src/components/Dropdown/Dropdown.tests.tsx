import { render, screen } from '@testing-library/react';
import Dropdown, { DropdownProps } from './Dropdown'; // Ensure DropdownProps is imported

// Define a mock onChange function
const mockOnChange = jest.fn();

describe('Dropdown Component', () => {
  const options: DropdownProps['options'] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  it('renders options correctly', () => {
    render(<Dropdown options={options} onChange={mockOnChange} />);
    const dropdownElement = screen.getByRole('combobox');

    // Add assertions here to verify dropdown functionality
    // For example:
    expect(dropdownElement).toBeInTheDocument();
    // Add more assertions as per your test requirements
  });

  // Add more tests as needed
});
