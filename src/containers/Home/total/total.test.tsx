import { render, screen } from "@testing-library/react";
import Total from "./index";
import configureStore from "../../Redux/Store";
import { Provider } from "react-redux";

const store = configureStore();
import React from "react";

test("renders total jobs", () => {
  const resetCurrentPage = (): void => {
    return;
  };
  render(
    <Provider store={store}>
      <Total totalJobs={100} resetCurrentPage={resetCurrentPage} />
    </Provider>
  );
  expect(screen.getByText(/100 IT Job For Chất Developer/i)).toBeVisible();
});
