import {render} from "@testing-library/react";
import AllJobs from "./AllJobs";
import React from "react";
import {Provider} from 'react-redux';
import store from '../../store'

describe("Step form reandering", () => {
  it('it should render a step form`', () => {
    const {container} = render(<Provider store={store}><AllJobs /></Provider>);
    
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

describe("Display jobs test", () => {
  it('renders an `.jobscard`', () => {
    const {container} = render(<Provider store={store}><AllJobs /></Provider>);
    expect(container.querySelectorAll('.allJobs').length).toBe(0);
  });
  
});
