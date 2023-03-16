import React from 'react';
import { render } from '@testing-library/react';
import JobTicket from './JobTicket';
describe('JobTicket', () => {
  it('renders correctly', () => {
    const { getByText } = render(<JobTicket />);
    expect(getByText('Mid/Senior Fullstack .Net Developer (Angular, ReactJS)')).toBeInTheDocument();
    expect(getByText('$')).toBeInTheDocument();
    expect(getByText('Sign in to view')).toBeInTheDocument();
    expect(getByText('c++')).toBeInTheDocument();
    expect(getByText('html')).toBeInTheDocument();
    expect(getByText('Ho Chi Minh')).toBeInTheDocument();
    expect(getByText('3h')).toBeInTheDocument();
  });
});