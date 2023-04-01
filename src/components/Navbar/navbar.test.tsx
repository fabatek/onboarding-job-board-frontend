import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import store from '../../redux/store/store';

const NavbarTestComponent = () => {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
};
describe('Navbar', () => {
  test('renders all dropdown menus and search button', () => {
    render(<NavbarTestComponent/>);
    expect(screen.getByLabelText('Default select example 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Default select example 2')).toHaveValue("default")
  });
  test('clears all filters when "Clear all filters" button is clicked', () => {
    render(<NavbarTestComponent/>);
    const dropdowns = screen.getAllByRole('combobox');
    fireEvent.change(dropdowns[0], { target: { value: '1' } });
    fireEvent.change(dropdowns[1], { target: { value: '2' } });
    expect(dropdowns[0]).toHaveValue('default');
  });
  test('should render a button with the correct class name', () => {
    render(<NavbarTestComponent/>);
    const button = screen.getByTestId('button-filter');
    expect(button).toHaveClass('btn btn-primary');
  });
});