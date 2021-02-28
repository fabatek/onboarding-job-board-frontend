import JobList from './JobList';
import {render} from "@testing-library/react";
import React from "react";


test('render JobList components', () => {
    const mockJobAmounts = '123';

    const { getByText } = render(
        <JobList jobAmounts={mockJobAmounts} />
    );

    const linkElement = getByText(/123 IT jobs are available/i);
    expect(linkElement).toBeInTheDocument();

  });
  