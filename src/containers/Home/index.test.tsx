import { render } from "@testing-library/react";
import Home from "../Home";
import React from "react";
import { Provider } from "react-redux";
import store from "../../state/store";

test('renders welcome message', () => {
  const { container } = render(<Provider store={store}><Home /></Provider>);
  expect(container).toBeInTheDocument();
});
