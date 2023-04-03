import { cleanup, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/configStore";
import App from "../App";

jest.setTimeout(10000);

afterAll(cleanup);

describe("Job Page", () => {
  it("render correctly", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    await waitFor(() => {
      const jobPageComponent = document.querySelector(".job-page");
      expect(jobPageComponent).toBeVisible();
    });
  });

  it("should show a number", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    await waitFor(() => {
      const numberOfJobs = document.querySelector(".number-of-jobs");
      expect(numberOfJobs?.textContent).toEqual("100");
    });
  });

  it("should render 10 jobs per page", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    await waitFor(() => {
      const jobCardElements = document.querySelectorAll(".job-card-container");
      expect(jobCardElements?.length).toBe(10);
    });
  });
});
