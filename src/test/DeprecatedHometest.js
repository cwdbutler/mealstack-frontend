import { render, screen } from '@testing-library/react';
import App from '../App';
import Home from '../App';

test('renders app name', () => {
  render(<Home />);
  const formElement = screen.getByText(/Protein/i);
  expect(screen.getByText(/Fats/i)).toBeInTheDocument();
  expect(screen.getByText(/Carbs/i)).toBeInTheDocument();
  expect(screen.getByText(/Calories/i)).toBeInTheDocument();
});
