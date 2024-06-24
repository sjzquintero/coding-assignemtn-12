// Dropdown.tsx

import React from 'react';

export interface DropdownProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <select onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
