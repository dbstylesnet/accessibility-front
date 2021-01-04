import { render, screen } from '@testing-library/react';
import StatsBox from '../../../components/StatsBox';

test('renders StatsBox component', () => {
  render(<StatsBox />);
  const element = screen.getByText(/%/i);
  expect(element).toBeInTheDocument();

});
