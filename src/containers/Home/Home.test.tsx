import {render} from "@testing-library/react";
import Joblist from './index';
import React from "react";

test('renders learn react link', () => {
    const { getByText } = render(<Joblist />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
  