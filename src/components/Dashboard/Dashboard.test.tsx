import {render, fireEvent, screen} from "@testing-library/react";
import Dashboard from "./Dashboard";
import React from "react";
import ReactPaginate from "react-paginate";
describe("Step form reandering", () => {
  it('it should render a step form`', () => {
    const {container} = render(<Dashboard />);
    
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
describe('<Dashboard />', () => {
    it('when rendering success', () => {
      const {container} = render(<Dashboard />);
      expect(container.querySelectorAll('.dashBoard').length).toBe(1);
    });
});
