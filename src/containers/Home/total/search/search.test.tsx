import { render, screen } from "@testing-library/react";
import Search from "./index";
import configureStore from "../../../Redux/Store";
import { Provider } from "react-redux";

const store = configureStore();
import React from "react";

test("renders Search ", () => {
  const resetCurrentPage = (): void => {
    return;
  };
  render(
    <Provider store={store}>
      <Search resetCurrentPage={resetCurrentPage} />
    </Provider>
  );
  //test input search exist
  const inputSearchElement = screen.getByTestId("input-search");
  expect(inputSearchElement).toHaveAttribute("type", "text");
});
