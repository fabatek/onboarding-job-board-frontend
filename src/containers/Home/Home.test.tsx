import { render, screen } from "@testing-library/react";
import Home from "./index";
import configureStore from "../Redux/Store";
import { Provider } from "react-redux";

const store = configureStore();
import React from "react";
// @jest-environment node;

/**
 */
// test("renders learn react link", () => {
//   // const { getByText } = render(<Home />);
//   // const linkElement = getByText(/learn react/i);
//   //expect(linkElement).toBeInTheDocument();
// });
test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
});
