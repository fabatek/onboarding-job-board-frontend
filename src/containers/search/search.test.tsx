import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/configStore";
import Search from "./Search";
import { SetStateAction } from "react";

describe("Search component - check search input change", () => {
  test("should update search input value on change", () => {
    const handleSearchInput = jest.fn();
    const handleEnterSearch = jest.fn();
    const handleTypeChange = jest.fn();
    const { getByLabelText } = render(
      <Provider store={store}>
        <Search
          count={1}
          handleSearchInput={handleSearchInput}
          handleEnterSearch={handleEnterSearch}
          handleSearch={() => {}}
          handleTypeChange={handleTypeChange}
          typeJob={""}
          searchByType={() => {}}
        />
      </Provider>
    );
    const searchInput = getByLabelText("Search input") as HTMLInputElement;
    const searchType = getByLabelText("Select type") as HTMLInputElement;
    fireEvent.change(searchType, { target: { value: "All" } });
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
    expect(searchType.value).toBe("All");
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
          handleTypeChange={function (e: {
            target: { value: SetStateAction<string> };
          }): void {
            throw new Error("Function not implemented.");
          }}
          typeJob={""}
          searchByType={function (): void {
            throw new Error("Function not implemented.");
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
          handleTypeChange={function (e: {
            target: { value: SetStateAction<string> };
          }): void {
            throw new Error("Function not implemented.");
          }}
          typeJob={""}
          searchByType={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Provider>
    );

    const searchInput = getByLabelText("Search input") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: searchTerm } });
    fireEvent.keyPress(searchInput, { key: "Enter", keyCode: 13 });

    expect(handleEnterSearch).toHaveBeenCalledWith(searchTerm);
  });
});
