import {render} from "@testing-library/react";
import Home from "../Home";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

test('renders home', () => {
  const { getByText } = render(
    <Provider store={store}>
        <Home />
    </Provider>
  );
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});