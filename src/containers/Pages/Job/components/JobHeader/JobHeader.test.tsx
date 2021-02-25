import {render} from "@testing-library/react";
import JobHeader from './JobHeader';
import React from "react";

test('renders learn react link', () => {
    const { getByText } = render(<JobHeader />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
  