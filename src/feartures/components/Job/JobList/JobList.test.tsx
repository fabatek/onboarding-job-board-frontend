// import { render, screen, wait } from '@testing-library/react';

import { render, wait } from '@testing-library/react';
import React from 'react';
import JobList from '.';
import jobAPI from '../../../../services/jobAPI';
import JobFeature from '../../../pages/ListPage';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';

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

  test('test total jobs while calling API', async () => {
    // arrange
    const jobCount = 1234;
    // act
    mockedJobAPI.getAll = jest.fn().mockResolvedValue({
      data: {
        'job-count': jobCount,
        jobs: [],
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <JobFeature />
      </Provider>
    );

    //assert
    await wait(async () => {
      const element = await getByText(/1234 IT jobs are available/i);
      expect(element).toBeInTheDocument();
    });
  });
});
