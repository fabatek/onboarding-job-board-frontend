import {
  cleanup,
  fireEvent,
  getByRole,
  render,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/configStore";
import App from "../App";
import { navbarItemLeft, navbarItemRight } from "../../static/data";

afterEach(cleanup);

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

  // it("should select correct time", () => {
  //   const { getByText, getByTestId, getByRole } = render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <App />
  //       </BrowserRouter>
  //     </Provider>
  //   );
  //   fireEvent.click(getByText("Da Nang"));
  //   const placeSelectElementVale = getByTestId("place-select");
  //   expect(placeSelectElementVale).toEqual(3);
  //   fireEvent.click(getByText("Ha Noi"));
  //   expect(placeSelectElementVale).toEqual(2);
  // });

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

  // it("should interact with search button", () => {
  //   const { getByRole } = render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <App />
  //       </BrowserRouter>
  //     </Provider>
  //   );
  //   const onClick = jest.fn();
  //   const searchButtonElement = getByRole("button");
  //   fireEvent.click(searchButtonElement);
  //   expect(onClick).toBeCalledTimes(1);
  // });

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

describe("API", () => {});
