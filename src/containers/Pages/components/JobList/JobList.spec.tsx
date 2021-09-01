import { cleanup, render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import GetJobMock from "../../../../store/mockdata/JobListMocking";
import JobList from "./JobList";

const jobs = GetJobMock;
const renderJobList = (path = "/") =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <JobList jobs={jobs} loading={false} error={false} searchTerm="" />
    </MemoryRouter>
  );

describe("Tests for <JobList />", () => {
  afterEach(cleanup);

  it("Render without crashing", () => {
    renderJobList();
  });

  it("Loading text while API request is in progress", () => {
    const { getByTestId } = renderJobList();
    const loadingText = getByTestId("loading");

    expect(loadingText.textContent().toBe("Loading..."));
  });

  it("Error text when API request is rejected", () => {
    const { getByTestId } = renderJobList();
    const errorText = getByTestId("error");

    expect(errorText.textContent().toBe("Unable to load jobs!!!"));
  });
});
