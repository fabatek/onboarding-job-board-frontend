import { cleanup, fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/configStore";
import App from "../App";
import { navbarItemLeft, navbarItemRight } from "../../static/data";

jest.setTimeout(5000);

afterAll(cleanup);

describe("Job Page", () => {
  it("should be visible", async () => {
    const { findByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const titleHeading = await findByText(
      /IT Jobs For Developers/i,
      undefined,
      {
        timeout: 10000,
      }
    );
    expect(titleHeading).toBeVisible();
  });

  it("should loading all component of page", async () => {
    const { findByText, findByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const titleHeading = await findByText(/IT Jobs For Developers/i);
    expect(titleHeading).toBeVisible();

    const searchButton = await findByText("Search");
    expect(searchButton).toBeVisible();

    const searchInput = await findByTestId("job-search");
    expect(searchInput).toBeVisible();

    const placeSelect = await findByTestId("place-select");
    expect(placeSelect).toBeVisible();
  });
});

describe("Navbar Component", () => {
  it("should render correctly", async () => {
    const length = navbarItemLeft.length + navbarItemRight.length;
    const { findAllByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = await findAllByRole("link");
    expect(linkElement.length).toBe(length);
  });
});

describe("Search Bar Component", () => {
  it("should correctly set default option", async () => {
    const { findByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const selectValue = await findByText("Ho Chi Minh");
    expect(selectValue).toBeInTheDocument();
  });

  it("should display the correct number of options", async () => {
    const { findAllByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const optionArray = await findAllByRole("option");
    expect(optionArray.length).toBe(3);
  });

  it("should select correct time", async () => {
    const { findByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const firstOption = await findByText("Da Nang");
    const secondOption = await findByText("Ha Noi");
    fireEvent.click(firstOption);
    expect(firstOption).toBeVisible();
    fireEvent.click(secondOption);
    expect(secondOption).toBeVisible();
  });

  it("should be able to type input", async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const inputElement = (await findByTestId("job-search")) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "reactjs" } });
    expect(inputElement.value).toBe("reactjs");
  });

  it("should show a number", async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const numberOfJobs = await findByTestId("number-of-jobs");
    expect(numberOfJobs.textContent).toEqual("100");
  });
});

describe("Get All Jobs", () => {
  it("should return job list", async () => {
    const { findAllByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const jobs = await findAllByTestId("job-card");
    expect(jobs).toHaveLength(10);
  });
});

describe("Pagination", () => {
  it("should be visible", async () => {
    const { findAllByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const paginationListItem = await findAllByTestId("pagination-item");
    expect(paginationListItem).not.toBeNull();
  });

  it("should render correct number of page", async () => {
    const { findAllByTestId, findByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const paginationListItem = await findAllByTestId("pagination-item");
    const paginationItemActice = await findByTestId("pagination-item active");
    expect(paginationListItem).toHaveLength(9);
    expect(paginationItemActice).not.toBeNull();
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

  it("should render the prev and next button", async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const prevButton = await findByTestId("prev-button");
    const nextButton = await findByTestId("next-button");
    expect(prevButton).toBeVisible();
    expect(nextButton).toBeVisible();
  });

  it("should render default page", async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const paginationItemActice = await findByTestId("pagination-item active");
    expect(paginationItemActice.textContent).toEqual("1");
  });

  it("should active correctly page when clicked", async () => {
    const { findByTestId, findAllByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const paginationListItem = await findAllByTestId("pagination-item");
    fireEvent.click(paginationListItem[0]);
    const paginationItemActice = await findByTestId("pagination-item active");
    expect(paginationItemActice.textContent).toEqual("2");
  });
});
