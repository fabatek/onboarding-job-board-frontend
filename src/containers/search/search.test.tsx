import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { SetStateAction } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/configStore";
import Search from "./Search";

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
    const searchTerm = {
      searchInput: "test",
      typeJob: "All",
    };

    const {} = render(
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
    const searchTerm = {
      searchInput: "test",
      typeJob: "All",
    };

    const { getByLabelText } = render(
      <Provider store={store}>
        <Search
          count={1}
          handleSearchInput={() => {}}
          handleEnterSearch={handleEnterSearch(searchTerm)}
          handleSearch={() => {}}
          handleTypeChange={() => {}}
          typeJob={""}
          searchByType={() => {}}
        />
      </Provider>
    );

    const searchInput = getByLabelText("Search input") as HTMLInputElement;

    fireEvent.keyPress(searchInput, { key: "Enter", keyCode: 13 });

    expect(handleEnterSearch).toHaveBeenCalledWith(searchTerm);
  });
});
describe("Search component - check type click", () => {
  it("should call searchByType", () => {
    const searchByType = jest.fn();

    const { getByLabelText } = render(
      <Provider store={store}>
        <Search
          count={1}
          handleSearchInput={() => {}}
          handleEnterSearch={() => {}}
          handleSearch={() => {}}
          handleTypeChange={() => {}}
          typeJob={""}
          searchByType={searchByType}
        />
      </Provider>
    );
    const searchType = getByLabelText("Select type") as HTMLInputElement;
    fireEvent.change(searchType, { target: { value: "All" } });
    fireEvent.click(searchType);
    expect(searchByType).toHaveBeenCalled();
  });
});
