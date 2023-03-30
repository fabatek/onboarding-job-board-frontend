import { cleanup, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/configStore";
import App from "../App";

jest.setTimeout(5000);

afterAll(cleanup);

describe("Job Page", () => {
  it("render correctly", async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const jobPageComponent = await findByTestId("job-page", undefined, {
      timeout: 10000,
    });
    expect(jobPageComponent).toBeVisible();
  });

  it("should show a number", async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const numberOfJobs = await findByTestId("number-of-jobs", undefined, {
      timeout: 5000,
    });
    expect(numberOfJobs.textContent).toEqual("100");
  });

  it("should render 10 jobs per page", async () => {
    const { findAllByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const jobCardElements = await findAllByTestId("job-card");
    expect(jobCardElements.length).toBe(10);
  });
});
