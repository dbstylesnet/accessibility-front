import { render, screen } from '@testing-library/react';
import AccountOverview from '../../../components/AccountOverview';

test('renders AccountOverview component', () => {
  render(<AccountOverview />);
  const element = screen.getByText(/Account Overview/i);
  expect(element).toBeInTheDocument();
});
