import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/configStore";
import App from "../App";

afterAll(cleanup);

describe("Routes", () => {
  it("should render Job Page on default route", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    await waitFor(() => {
      const jobPage = document.querySelector(".job-page");
      expect(jobPage).toBeVisible();
    });
  });

  it("should render Job Page on the new route", async () => {
    const sampleRoute = "/jobs/1";
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[sampleRoute]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    await waitFor(() => {
      const jobDetailComponent = document.querySelector(
        ".job-detail-component"
      );
      const companyCard = document.querySelector(".company-card");
      expect(jobDetailComponent).toBeVisible();
      expect(companyCard).toBeVisible();
    });
  });
});
