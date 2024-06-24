
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

test('renders the HeroImage component', () => {
  render(<HeroImage title="Test Title" imageUrl="https://via.placeholder.com/800x400" />);
  const titleElement = screen.getByText(/Test Title/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders the description if provided', () => {
  render(<HeroImage title="Test Title" description="Test Description" imageUrl="https://via.placeholder.com/800x400" />);
  const descriptionElement = screen.getByText(/Test Description/i);
  expect(descriptionElement).toBeInTheDocument();
});
