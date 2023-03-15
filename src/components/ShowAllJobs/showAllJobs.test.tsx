import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ShowAllJobs from './ShowAllJobs';
import axios from 'axios';

// Mock the axios library to return sample data
jest.mock('axios');

const mockResponse = {
  data: [
    {
      id: 1,
      title: 'Job 1',
      description: 'Job description 1',
    },
    {
      id: 2,
      title: 'Job 2',
      description: 'Job description 2',
    },
  ],
};

describe('ShowAllJobs component', () => {
  test('displays the correct number of jobs', async () => {
    
    const axiosGetMock = jest.spyOn(axios, 'get');
    axiosGetMock.mockResolvedValueOnce({ data: mockResponse });

 
    const { getByText } = render(<ShowAllJobs />);
   
    await waitFor(() => {
      expect(axiosGetMock).toHaveBeenCalledTimes(1);
     
      expect(getByText('2 It jobs in viet nam')).toBeInTheDocument();
    });

   
    axiosGetMock.mockRestore();
  });
});