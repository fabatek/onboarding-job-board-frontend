import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
describe('Navbar', () => {
  test('renders all dropdown menus and search button', () => {
    render(<Navbar />);
    expect(screen.getByLabelText('Default select example 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Default select example 2')).toHaveValue("one")
  });
  test('clears all filters when "Clear all filters" button is clicked', () => {
    render(<Navbar />);
    const dropdowns = screen.getAllByRole('combobox');
    fireEvent.change(dropdowns[0], { target: { value: '1' } });
    fireEvent.change(dropdowns[1], { target: { value: '2' } });
    fireEvent.change(dropdowns[2], { target: { value: '3' } });
    fireEvent.change(dropdowns[3], { target: { value: '1' } });
    expect(dropdowns[0]).toHaveValue('1');
    expect(dropdowns[1]).toHaveValue('2');
    expect(dropdowns[2]).toHaveValue('3');
    expect(dropdowns[3]).toHaveValue('1');
  });
});