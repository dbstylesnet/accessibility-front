import { render, screen } from '@testing-library/react';
import Stats from '../../../components/Stats';
import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom'

test('renders Stats component', () => {
    render(<Stats />);
    const elements = screen.queryAllByText(/%/i);
    expect(elements).toBeTruthy();

});


test('renders Stats component correctly', () => {
    const tree = TestRenderer
      .create(<Stats />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
