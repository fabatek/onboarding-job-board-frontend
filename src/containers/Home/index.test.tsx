import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index";
describe("Home", () => {
  it("renders the Header component", () => {
    render(<Home />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });
  it("renders the Navbar component", () => {
    render(<Home />);
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });
  it("renders the ShowAllJobs component", () => {
    render(<Home />);
    const showAllJobsElement = screen.getByTestId("show-all-jobs");
    expect(showAllJobsElement).toBeInTheDocument();
  });
});