import {render} from "@testing-library/react";
import JobList from './JobList';
import React from "react";

test('renders learn react link', () => {
    const { getByText } = render(<JobList />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  