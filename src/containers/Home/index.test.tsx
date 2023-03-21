import { fireEvent, render, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import Home from "../Home";
import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "../../redux/configStore";
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
  it("should show loading and change UI", async () => {
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
test("Check clicked button will active", () => {
  const { queryAllByTestId, getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const jobPage = queryAllByTestId("btn__page");
  jobPage.forEach((_, index) => {
    const item = getByText(index + 1);
    fireEvent.click(item);
    expect(item).toHaveClass("btn__page btn__page--focus");
  });
});
