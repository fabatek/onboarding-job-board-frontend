import {render} from "@testing-library/react";
import JobHeader from './JobHeader';
import React from "react";

test('render JobHeader components', () => {

    const { getByText } = render(
            <JobHeader jobAmounts={123}/>
    );
    const linkElement = getByText(/123 IT jobs are available/i);
    expect(linkElement).toBeInTheDocument();
  });
  