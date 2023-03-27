import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/configStore";
import Search from "./Search";

describe("Search component - check search input change", () => {
  test("should update search input value on change", () => {
    const handleSearchInput = jest.fn();
    const handleEnterSearch = jest.fn();
    const { getByLabelText } = render(
      <Provider store={store}>
        <Search
          count={1}
          handleSearchInput={handleSearchInput}
          handleEnterSearch={handleEnterSearch}
          handleSearch={() => {}}
        />
      </Provider>
    );
    const searchInput = getByLabelText("Search input") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});

describe("Search component - check search function while clicking search button", () => {
  it("should call handleSearch with the current search term when search button is clicked", () => {
    const handleSearch = jest.fn();
    const searchTerm = "test";

    const { getByLabelText } = render(
      <Provider store={store}>
        <Search
          count={1}
          handleSearchInput={() => {}}
          handleEnterSearch={() => {}}
          handleSearch={() => {
            handleSearch(searchTerm);
          }}
        />
      </Provider>
    );

    const searchInput = getByLabelText("Search input") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: searchTerm } });

    const searchButton = document.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;
    fireEvent.click(searchButton);

    expect(handleSearch).toHaveBeenCalledWith(searchTerm);
  });
});
describe("Search component - check search function while clicking enter button", () => {
  it("should call handleEnterSearch with the current search term when Enter is pressed in the search input", () => {
    const handleEnterSearch = jest.fn();
    const searchTerm = "test";

    const { getByLabelText } = render(
      <Provider store={store}>
        <Search
          count={1}
          handleSearchInput={() => {}}
          handleEnterSearch={handleEnterSearch(searchTerm)}
          handleSearch={() => {}}
        />
      </Provider>
    );

    const searchInput = getByLabelText("Search input") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: searchTerm } });
    fireEvent.keyPress(searchInput, { key: "Enter", keyCode: 13 });

    expect(handleEnterSearch).toHaveBeenCalledWith(searchTerm);
  });
});
