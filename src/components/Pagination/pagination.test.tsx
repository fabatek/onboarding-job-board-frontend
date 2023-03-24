import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination component', () => {
  const props = {
    totalPages: 100,
    setCurentPage: jest.fn(),
    currentPage: 2,
  };

  test('render correctly', () => {
    const { getByTestId } = render(<Pagination {...props} />);
    expect(getByTestId('pagination')).toBeInTheDocument();
  });

  test('render correct number of pages', () => {
    const { getAllByTestId } = render(<Pagination {...props} />);
    expect(getAllByTestId('page').length).toBe(6);
  });

 
  test('handles click on next page button correctly',async () => {
    const { getByTestId } = render(<Pagination {...props} />);
    fireEvent.click(getByTestId('previous-page'));
    await waitFor(() => expect(props.setCurentPage).toHaveBeenCalledWith(1))
  });
  test('handles click on next page button correctly',async () => {
    const { getByTestId } = render(<Pagination {...props} />);
    fireEvent.click(getByTestId('next-page'));
    await waitFor(() => expect(props.setCurentPage).toHaveBeenCalledWith(3))
  });


});