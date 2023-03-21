import {
  fireEvent,
  getByRole,
  getByText,
  render,
} from "@testing-library/react";

import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/configStore";
import Search from "./Search";

describe("Search component", () => {
  let searchInput: HTMLInputElement;
  const jobs = [
    {
      name: "name 1",
      status: false,
      image: "https://loremflickr.com/640/480/food",
      id: 1,
    },
    {
      name: "name 2",
      status: true,
      image: "https://loremflickr.com/640/480/food",
      id: 2,
    },
    {
      name: "name 3",
      status: true,
      image: "https://loremflickr.com/640/480/food",
      id: 3,
    },
    {
      name: "name 4",
      status: false,
      image: "https://loremflickr.com/640/480/food",
      id: 4,
    },
    {
      name: "name 5",
      status: false,
      image: "https://loremflickr.com/640/480/food",
      id: 5,
    },
    {
      name: "name 6",
      status: true,
      image: "https://loremflickr.com/640/480/food",
      id: 6,
    },
    {
      name: "name 7",
      status: true,
      image: "https://loremflickr.com/640/480/food",
      id: 7,
    },
    {
      name: "name 8",
      status: false,
      image: "https://loremflickr.com/640/480/food",
      id: 8,
    },
    {
      name: "name 9",
      status: false,
      image: "https://loremflickr.com/640/480/food",
      id: 9,
    },
    {
      name: "name 10",
      status: true,
      image: "https://loremflickr.com/640/480/food",
      id: 10,
    },
  ];
  beforeEach(() => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <Search
          count={0}
          handleSearchInput={(event) => {}}
          handleEnterSearch={(event) => {}}
          handleSearch={() => {}}
          job={[]}
        ></Search>
      </Provider>
    );
    searchInput = getByLabelText("searchInput") as HTMLInputElement;
  });
  it("should update search input value on change", () => {
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
describe("Search component", () => {
  it("should call handleSearch with the current search term when search button is clicked", () => {
    const handleSearch = jest.fn();
    const searchTerm = "test";

    const { getByLabelText } = render(
      <Provider store={store}>
        <Search
          count={0}
          handleSearchInput={() => {}}
          handleEnterSearch={() => {}}
          handleSearch={() => {
            handleSearch(searchTerm);
          }}
          job={[]}
        />
      </Provider>
    );

    let searchInput = getByLabelText("searchInput") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: searchTerm } });

    const searchButton = document.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;
    fireEvent.click(searchButton);

    expect(handleSearch).toHaveBeenCalledWith(searchTerm);
  });
});
describe("Search component", () => {
  it("should call handleEnterSearch with the current search term when Enter is pressed in the search input", () => {
    const handleEnterSearch = jest.fn();
    const searchTerm = "test";

    const { getByRole } = render(
      <Provider store={store}>
        <Search
          count={0}
          handleSearchInput={() => {}}
          handleEnterSearch={handleEnterSearch(searchTerm)}
          handleSearch={() => {}}
          job={[]}
        />
      </Provider>
    );

    const searchInput = getByRole("searchInput");
    fireEvent.change(searchInput, { target: { value: searchTerm } });
    fireEvent.keyPress(searchInput, { key: "Enter", keyCode: 13 });

    expect(handleEnterSearch).toHaveBeenCalledWith(searchTerm);
  });
});
