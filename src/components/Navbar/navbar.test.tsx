import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

const NavbarTestComponent = () => {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
};
describe("Navbar", () => {
  test('clears all filters when "Clear all filters" button is clicked', () => {
    const { getByLabelText, getByTestId } = render(<NavbarTestComponent />);
    const jobLevelSelect = getByLabelText("Default select job level");
    const salarySelect = getByLabelText("Default select salary");
    const workingModelSelect = getByLabelText("Default select working model");
    const companyTypeSelect = getByLabelText("Default select company type");

    fireEvent.change(jobLevelSelect, { target: { value: "Junior" } });
    fireEvent.change(salarySelect, { target: { value: "6000" } });
    fireEvent.change(workingModelSelect, { target: { value: "Remote" } });
    fireEvent.change(companyTypeSelect, { target: { value: "Product" } });
    fireEvent.click(getByTestId("button-filter"));
  });
  test('clears all filters when "Clear all filters" button is clicked', async () => {
    render(<NavbarTestComponent />);
    const clearAllFilter = screen.getByTestId("btn-clear-test");
    expect(clearAllFilter).toBeInTheDocument();
    fireEvent.click(clearAllFilter);
  });
  test("should render a button with the correct class name", () => {
    render(<NavbarTestComponent />);
    const button = screen.getByTestId("button-filter");
    expect(button).toHaveClass("btn btn-primary");
  });
});
