import React from "react";
import { render,screen } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

const NavbarTestComponent = () => {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
};

describe("Header", () => {
  test("render a logo image", () => {
     const {getByAltText} = render(<NavbarTestComponent />);
    const logoImg = getByAltText("123");
    expect(logoImg).toBeInTheDocument();
  });
  test("render the All Jobs link", () => {
    const {getByText} = render(<NavbarTestComponent />);
    const allJobsLink = getByText("All Jobs");
    expect(allJobsLink).toBeInTheDocument();
  });
  test("render the It Companies link",() => {
    const {getByText} = render(<NavbarTestComponent/>)
    const itCompanies = getByText('It Companies')
    expect(itCompanies).toBeInTheDocument()
  })
  test("render the dropdown menu with the default city selected", () => {
    render(<NavbarTestComponent />);
    const dropdownMenu = screen.getByLabelText("Default select example");
    expect(dropdownMenu).toBeInTheDocument();
    expect(dropdownMenu).toHaveValue("default");
  });
  test("render from input element",()=>{
    render(<NavbarTestComponent />);
    const form = screen.getByRole("search")
    expect(form).toBeInTheDocument()
  });
  test('render navbar link',()=>{
    render(<NavbarTestComponent />);
    expect(screen.getByText('For Employers')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('EN | VI')).toBeInTheDocument();
  });
  test('should render a button with the correct class name and type', () => {
    render(<NavbarTestComponent />);
    const button = screen.getByTestId('button-search');
    expect(button).toHaveClass('btn btn-danger');
  });
});