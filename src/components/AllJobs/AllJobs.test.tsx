import {render} from "@testing-library/react";
import AllJobs from "./AllJobs";
import React from "react";

describe("Step form reandering", () => {
  it('it should render a step form`', () => {
    const {container} = render(<AllJobs />);
    
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

describe("Display jobs test", () => {
  it('renders an `.jobscard`', () => {
    const {container} = render(<AllJobs />);
    expect(container.querySelectorAll('.allJobs').length).toBe(0);
  });
  
  

});
