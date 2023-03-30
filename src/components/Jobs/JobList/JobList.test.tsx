import { cleanup, render, waitFor } from "@testing-library/react";
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
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    await waitFor(() => {
      const jobs = document.querySelectorAll(".job-card-container");
      expect(jobs).toHaveLength(10);
    });
  });

  it("should return no jobs when failed", () => {
    const { queryByText } = render(
      <CustomProvider>
        <JobList />
      </CustomProvider>
    );
    const jobs = queryByText(/View Detail/i);
    expect(jobs).not.toBeInTheDocument();
  });
});

describe("API", () => {
  it("should render only 2 jobs when user search by title with global", async () => {
    const res = await http.get("/jobs/?jobTitle=global");
    expect(res.data.length).toBe(2);
  });

  it("should render only 3 jobs when user search by category with engineer", async () => {
    const res = await http.get("/jobs/?category=engineer");
    expect(res.data.length).toBe(3);
  });

  it("should render only 2 jobs when user search by location with mesa", async () => {
    const res = await http.get("/jobs/?place=mesa");
    expect(res.data.length).toBe(2);
  });

  it("return no jobs when not found", async () => {
    const res = await http.get("/jobs/?jobTitle=nothing");
    expect(res.data.length).toBe(0);
  });
});
