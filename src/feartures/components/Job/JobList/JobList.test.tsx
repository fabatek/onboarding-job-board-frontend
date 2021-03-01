// import { render, screen, wait } from '@testing-library/react';

import { render, wait } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import JobList from '.';
import Home from '../../../../containers/Home';
import axiosClient from '../../../../services/axiosClient';
import jobAPI from '../../../../services/jobAPI';
import JobInfoTotal from '../JobInfoTotal';
import JobItem from '../JobItem';
jest.mock('../../../../services/jobAPI');
const mockedJobAPI = jobAPI as jest.Mocked<typeof jobAPI>;

describe('loads API', () => {
  test('call API return total jobs while loading page', async () => {
    // arrange
    const jobCount = 1234;
    mockedJobAPI.getAll = jest.fn().mockResolvedValue({
      data: {
        'job-count': jobCount,
        jobs: [],
      },
    });
    // act
    const { getByText } = render(
      <JobList totalJobs={1234} displayListJob={[]} />
    );
    // assert
    await wait(async () => {
      const element = await getByText(/1234 IT jobs are available/i);
      expect(element).toBeInTheDocument();
    });
  });
});
