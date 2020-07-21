import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders LostFoil heading', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/LostFoil/i);
  expect(linkElement).toBeInTheDocument();
});
