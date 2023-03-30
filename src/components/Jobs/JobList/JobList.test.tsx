import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "../../../containers/App";
import CustomProvider from "../../../providers/CustomProvider";
import { store } from "../../../redux/configStore";
import { http } from "../../../utils/config";
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

describe("API", () => {
  it("should render only 6 jobs when user search by title with global", async () => {
    const res = await http.get("/jobs/?jobTitle=global");
    expect(res.data.length).toBe(6);
  });

  it("should render only 7 jobs when user search by category with engineer", async () => {
    const res = await http.get("/jobs/?category=engineer");
    expect(res.data.length).toBe(7);
  });

  it("should render only 1 jobs when user search by location with parma", async () => {
    const res = await http.get("/jobs/?place=parma");
    expect(res.data.length).toBe(1);
  });

  it("return no jobs when not found", async () => {
    const res = await http.get("/jobs/?jobTitle=nothing");
    expect(res.data.length).toBe(0);
  });
});
