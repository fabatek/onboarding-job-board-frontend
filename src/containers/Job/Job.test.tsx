import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/configStore";
import App from "../App";
import { navbarItemLeft, navbarItemRight } from "../../static/data";

afterAll(cleanup);

describe("Job Page", () => {
  it("should be visible", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(getByText(/IT Jobs For Developers/i)).toBeVisible();
  });

  it("should loading all component of page", () => {
    const { queryByText, queryByTestId, queryByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const titleHeading = queryByRole("heading");
    expect(titleHeading).toBeVisible();

    const searchButton = queryByText("Search");
    expect(searchButton).toBeVisible();

    const searchInput = queryByTestId("job-search");
    expect(searchInput).toBeVisible();

    const placeSelect = queryByTestId("place-select");
    expect(placeSelect).toBeVisible();
  });
});

describe("render navbar component", () => {
  it("shoule render correctly", () => {
    const length = navbarItemLeft.length + navbarItemRight.length;
    const { getAllByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(getAllByRole("link").length).toBe(length);
  });
});

describe("Search Bar Component", () => {
  it("should render heading", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(getByText(/IT Jobs For Developers/i)).toBeInTheDocument();
  });

  it("should correctly set default option", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(getByText("Ho Chi Minh")).toBeInTheDocument();
  });

  it("should display the correct number of options", () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(getAllByRole("option").length).toBe(3);
  });

  it("should select correct time", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(getByText("Da Nang"));
    expect(getByText("Da Nang")).toBeVisible();
    fireEvent.click(getByText("Ha Noi"));
    expect(getByText("Ha Noi")).toBeVisible();
  });

  it("should be able to type input", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const inputElement = getByPlaceholderText(
      "jobs, skills, companies, ..."
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "reactjs" } });
    expect(inputElement.value).toBe("reactjs");
  });

  it("should show a number", async () => {
    const { queryByTestId, findByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    await waitFor(() => {
      expect(queryByTestId("number-of-jobs")).toBeInTheDocument();
    });
    expect(queryByTestId("number-of-jobs")).toBeVisible();
  });
});

describe("Get All Jobs", () => {
  describe("when API call is successful", () => {
    it("should return job list", async () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
      await waitFor(() => {
        const jobs = getByTestId("job-card");
        expect(jobs).toHaveLength(100);
      });
    });
  });

  describe("when API call fails", () => {
    it("should return empty jobs list", async () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
      await waitFor(() => {
        const jobs = getByTestId("job-card");
        expect(jobs).toEqual([]);
      });
    });
  });
});
