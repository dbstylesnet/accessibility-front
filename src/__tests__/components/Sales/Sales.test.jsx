import { render, screen } from '@testing-library/react';
import Sales from '../../../components/Sales';

test('renders Sales component', () => {
  render(<Sales />);
  const element = screen.getByText(/You had/i);
  expect(element).toBeInTheDocument();
});

