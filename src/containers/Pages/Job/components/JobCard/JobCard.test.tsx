import {render} from "@testing-library/react";
import React from "react";
import JobCard from "./JobCard";

test('render JobCard components', () => {

    const { getByText } = render( <JobCard /> );
    const linkElement = getByText(/Salary/i);
    expect(linkElement).toBeInTheDocument();
  });
  