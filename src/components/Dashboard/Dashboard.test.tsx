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
//Click Pagination
describe("Step form interactive", () => {
  const paginationActive = jest.fn;
  it('should got to next or prev step', () => {
    const {container, getByRole} = render(<Dashboard />);
    const prev = container.querySelector('paginatonBttns') as HTMLElement;
    fireEvent.click(prev)
    expect(paginationActive).toHaveBeenCalledTimes(1);
  });
});
