// import { render, screen, wait } from '@testing-library/react';

import { render, screen, wait } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import JobList from '.';
import Home from '../../../../containers/Home';
import axiosClient from '../../../../services/axiosClient';
import jobAPI from '../../../../services/jobAPI';
import JobInfoTotal from '../JobInfoTotal';
import JobItem from '../JobItem';

describe('Header', () => {
  test('How it works', () => {
    const { getByText } = render(
      <JobList>
        <JobItem />
      </JobList>
    );
    const element = getByText(/Job Item/i);
    expect(element).toBeInTheDocument();
  });
});

describe('loads API', () => {
  test('call API', async () => {
    const myMock = jest.fn();

    const params = {
      limit: 10,
    };

    const data = await jobAPI.getAll(params);
    const displayTotalJobs = await data.data['job-count'];
    myMock.mockReturnValueOnce(displayTotalJobs);

    const { getByText } = render(
      <JobInfoTotal totalJobs={myMock()}>
        <JobList>
          <JobItem />
        </JobList>
      </JobInfoTotal>
    );
    const element = getByText(/10 IT jobs are available/i);
    expect(element).toBeInTheDocument();
  }, 15000);
});
