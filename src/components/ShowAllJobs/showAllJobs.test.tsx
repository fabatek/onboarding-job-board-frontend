import React from "react";
import { render } from "@testing-library/react";
import ShowAllJobs from "./ShowAllJobs";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
const ShowAllJobsTestComponent = () => {
  return (
    <Provider store={store}>
      <ShowAllJobs />
    </Provider>
  );
};

describe("show all jobs", () => {
  test("total of jobs", async () => {
    const { getByTestId } = render(<ShowAllJobsTestComponent />);
    expect(getByTestId("total-jobs")).toBeInTheDocument();
  });
  test("render list items", async () => {
    const { findByTestId } = render(<ShowAllJobsTestComponent />);
    const jobList = await findByTestId("list-job", undefined, {
      timeout: 10000,
    });
    expect(jobList).toBeInTheDocument();
  });
  test("render 10 jobs per page", async () => {
    const { findAllByTestId } = render(<ShowAllJobsTestComponent />);
    const listItem = await findAllByTestId("list-item-test", undefined, {
      timeout: 3000,
    });
    expect(listItem).toHaveLength(10);
  });
});
