import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "../../../containers/App";
import CustomProvider from "../../../providers/CustomProvider";
import { store } from "../../../redux/configStore";
import JobList from "./JobList";

jest.setTimeout(10000);

afterAll(cleanup);

describe("Get All Jobs", () => {
  it("should return job list", async () => {
    const { findAllByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const jobs = await findAllByTestId("job-card", undefined, {
      timeout: 5000,
    });
    expect(jobs).toHaveLength(10);
  });

  it("should return no jobs when failed", () => {
    const { queryByTestId } = render(
      <CustomProvider>
        <JobList />
      </CustomProvider>
    );
    const jobs = queryByTestId("job-card");
    expect(jobs).not.toBeInTheDocument();
  });
});
