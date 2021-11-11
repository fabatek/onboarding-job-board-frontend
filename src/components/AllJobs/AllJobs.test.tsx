<<<<<<< HEAD
import { render } from "@testing-library/react";
import AllJobs from "./AllJobs";
import { Provider } from 'react-redux';
=======
import {render} from "@testing-library/react";
import AllJobs from "./AllJobs";
import React from "react";
import {Provider} from 'react-redux';
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
import store from '../../store'

describe("Step form reandering", () => {
  it('it should render a step form`', () => {
<<<<<<< HEAD
    const { container } = render(<Provider store={store}><AllJobs /></Provider>);
=======
    const {container} = render(<Provider store={store}><AllJobs /></Provider>);
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
    expect(container).toBeInTheDocument();
  });
});

describe("Display jobs test", () => {
<<<<<<< HEAD
  it('renders an `.alljobs`', () => {
    const { container } = render(<Provider store={store}><AllJobs /></Provider>);
=======
  it('renders an `.jobscard`', () => {
    const {container} = render(<Provider store={store}><AllJobs /></Provider>);
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
    expect(container.querySelectorAll('.alljobs').length).toBe(1);
  });

});

