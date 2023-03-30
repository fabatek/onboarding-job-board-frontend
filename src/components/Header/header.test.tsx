import React from "react";
import { render,screen } from "@testing-library/react";
import Header from "./Header";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn()
}));
describe("Header", () => {
  test("render a logo image", () => {
     const {getByAltText} = render(<Header />);
    const logoImg = getByAltText("123");
    expect(logoImg).toBeInTheDocument();
  });
  test("render the All Jobs link", () => {
    const {getByText} = render(<Header />);
    const allJobsLink = getByText("All Jobs");
    expect(allJobsLink).toBeInTheDocument();
  });
  test("render the It Companies link",() => {
    const {getByText} = render(<Header/>)
    const itCompanies = getByText('It Companies')
    expect(itCompanies).toBeInTheDocument()
  })
  test("render the dropdown menu with the default city selected", () => {
    render(<Header />);
    const dropdownMenu = screen.getByLabelText("Default select example");
    expect(dropdownMenu).toBeInTheDocument();
    expect(dropdownMenu).toHaveValue("2");
  });
  test("render from input element",()=>{
    render(<Header />);
    const form = screen.getByRole("search")
    expect(form).toBeInTheDocument()
  });
  test('render navbar link',()=>{
    render(<Header />);
    expect(screen.getByText('For Employers')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('EN | VI')).toBeInTheDocument();
  });
  test('should render a button with the correct class name and type', () => {
    render(<Header />);
    const button = screen.getByTestId('button-search');
    expect(button).toHaveClass('btn btn-danger');
  });
});