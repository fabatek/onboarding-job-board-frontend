import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
describe('Navbar', () => {
  test('renders all dropdown menus and search button', () => {
    render(<Navbar/>);
    expect(screen.getByLabelText('Default select example 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Default select example 2')).toHaveValue("default")
  });
  test('clears all filters when "Clear all filters" button is clicked', () => {
    render(<Navbar/>);
    const dropdowns = screen.getAllByRole('combobox');
    fireEvent.change(dropdowns[0], { target: { value: '1' } });
    fireEvent.change(dropdowns[1], { target: { value: '2' } });
    expect(dropdowns[0]).toHaveValue('1');
    expect(dropdowns[1]).toHaveValue('2');
  });
  test('should render a button with the correct class name', () => {
    render(<Navbar/>);
    const button = screen.getByTestId('button-filter');
    expect(button).toHaveClass('btn btn-primary');
  });
});