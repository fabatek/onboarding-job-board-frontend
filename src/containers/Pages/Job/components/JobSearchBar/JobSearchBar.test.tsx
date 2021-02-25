import {render} from "@testing-library/react";
import React from "react";
import JobSearchBar from "./JobSearchBar";

test('render JobHeader components', () => {

    const { getByText } = render(
            <JobSearchBar />
    );
    const linkElement = getByText(/SEARCH/i);
    expect(linkElement).toBeInTheDocument();
  });
  