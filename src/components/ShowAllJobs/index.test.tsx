import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import  store, { RootState } from '../../redux/store/store';
import ShowAllJobs from './ShowAllJobs';

describe('ShowAllJobs component', () => {
  const mockRootState = {
    jobReducer: {
      allJobs: [
        { id: 1, title: 'Software Engineer', company: 'Google' },
        { id: 2, title: 'Frontend Developer', company: 'Facebook' },
        { id: 3, title: 'Backend Developer', company: 'Amazon' },
      ],
    },
  };

  it('should render a list of jobs', () => {
    render(
      <Provider store={store}>
        <ShowAllJobs />
      </Provider>
    );

    // Check that the component renders with the correct title
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('3 It jobs in viet nam');

    // Check that the component renders the correct number of jobs
    const jobTickets = screen.getAllByTestId('job-ticket');
    expect(jobTickets).toHaveLength(3);

    // Check that each job is rendered with the correct title and company
    const jobTitles = screen.getAllByTestId('job-title');
    const jobCompanies = screen.getAllByTestId('job-company');
    expect(jobTitles[0]).toHaveTextContent('Software Engineer');
    expect(jobCompanies[0]).toHaveTextContent('Google');
    expect(jobTitles[1]).toHaveTextContent('Frontend Developer');
    expect(jobCompanies[1]).toHaveTextContent('Facebook');
    expect(jobTitles[2]).toHaveTextContent('Backend Developer');
    expect(jobCompanies[2]).toHaveTextContent('Amazon');
  });
});
