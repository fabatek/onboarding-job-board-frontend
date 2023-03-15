import { render, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import Home from "../Home";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/configStore";
import axios from "axios";

test("renders welcome message", () => {
  const { queryAllByTestId, queryByTestId } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  // const linkElement = getByText(
  //   /Lorem, ipsum dolor sit amet consectetur adipisicing elit.Unde adipisci deserunt amet eveniet delectus aliquid/i
  // );
  const title = queryByTestId("title");
  const job = queryAllByTestId("job");
  // const jobContent = queryAllByTestId("job__content");
  // const contentImg = queryAllByTestId("content__image");
  // const contentImageRandom = queryAllByTestId("content__image_random");
  // const contentTag = queryAllByTestId("content-tag");
  // const contentStatus = queryAllByTestId("content__status");
  // const contentName = queryAllByTestId("content-name");

  expect(title).toHaveClass("title");
  if (job.length > 0) {
    expect(job).toHaveClass("job");
  }

  // expect(jobContent).toHaveClass("job__content");
  // expect(contentImg).toHaveClass("content-image");
  // expect(contentImageRandom).toHaveClass("content__image-random");
  // expect(contentTag).toHaveClass("content-tag");
  // expect(contentStatus).toHaveClass("content__status");
  // expect(contentName).toHaveClass("content-name");
  // expect(linkElement).toBeInTheDocument();
});
describe("Loading API", () => {
  it("should show loading and change UI after 2 seconds", async () => {
    const { getByTestId, queryAllByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const job = queryAllByTestId("job");
    const loading = getByTestId("loading");
    expect(loading).toBeVisible();

    await waitFor(() => getByTestId("loading"));
    if (job.length > 0) {
      expect(getByTestId("loading")).toHaveClass("job__list");
    }
  });
});
