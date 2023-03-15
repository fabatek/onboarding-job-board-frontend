import { render, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import Home from "../Home";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/configStore";
import axios from "axios";

test("Check if elements contain suitable class", () => {
  const { queryAllByTestId, queryByTestId } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const title = queryByTestId("title");
  const job = queryAllByTestId("job");

  expect(title).toHaveClass("title");
  if (job.length > 0) {
    expect(job).toHaveClass("job");
  }
});
describe("Loading API", () => {
  it("should show loading and change UI after 2 seconds", async () => {
    const { getByTestId, queryAllByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    await waitFor(() => {
      const jobList = getByTestId("job-list");
      expect(jobList).toBeInTheDocument();
      const job = queryAllByTestId("job");
      if (job.length > 0) {
        job.forEach((j, index) => {
          expect(getByTestId(`job-${index}`)).toHaveClass("job");
        });
      }
    });
  });
});
