import React from "react";
import { render,screen } from "@testing-library/react";
import Header from "./Header";
describe("Header", () => {
  test("renders a logo image", () => {
     const {getByAltText} = render(<Header />);
    const logoImg = getByAltText("123");
    expect(logoImg).toBeInTheDocument();
  });
  test("renders the All Jobs link", () => {
    const {getByText} = render(<Header />);
    const allJobsLink = getByText("All Jobs");
    expect(allJobsLink).toBeInTheDocument();
  });
  test("renders the It Companies link",() => {
    const {getByText} = render(<Header/>)
    const itCompanies = getByText('It Companies')
    expect(itCompanies).toBeInTheDocument()
  })
  test("renders the dropdown menu with the default city selected", () => {
    render(<Header />);
    const dropdownMenu = screen.getByLabelText("Default select example");
    expect(dropdownMenu).toBeInTheDocument();
    expect(dropdownMenu).toHaveValue("2");
  });
});




