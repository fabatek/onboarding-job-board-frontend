import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
const HomeTestComponent = () => {
  return(<Provider store={store}>
    <Home/>
    </Provider>)
}
describe("Home", () => {
  test("renders the Header component", () => {
    render(<HomeTestComponent/>)
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });
  test("renders the Header component", () => {
    render(<HomeTestComponent/>)
    const headerElement = screen.getByTestId("navbar");
    expect(headerElement).toBeInTheDocument();
  });
  test("renders the Header component", () => {
    render(<HomeTestComponent/>)
    const headerElement = screen.getByTestId("show-all-jobs");
    expect(headerElement).toBeInTheDocument();
  });
});



