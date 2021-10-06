import { render } from "@testing-library/react";
import Home from "./index";
import configureStore from "../Redux/Store";
import { Provider } from "react-redux";

const store = configureStore();
import React from "react";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
});
