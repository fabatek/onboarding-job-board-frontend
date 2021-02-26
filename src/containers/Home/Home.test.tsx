import { render } from '@testing-library/react';
// import Home from "../Home/Home";
import React from 'react';
import Home from '.';

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/IT jobs are available/i);
  expect(linkElement).toBeInTheDocument();
});
