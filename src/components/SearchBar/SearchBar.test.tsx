import { cleanup, fireEvent, render } from "@testing-library/react";
import CustomProvider from "../../providers/CustomProvider";
import SearchBar from "./SearchBar";

jest.setTimeout(5000);

afterAll(cleanup);

describe("Search Bar Component", () => {
  it("should be visible", async () => {
    const { findByText, findByTestId } = render(
      <CustomProvider>
        <SearchBar />
      </CustomProvider>
    );
    const titleHeading = await findByText(
      /IT Jobs For Developers/i,
      undefined,
      { timeout: 5000 }
    );
    expect(titleHeading).toBeVisible();

    const searchButton = await findByText("Search");
    expect(searchButton).toBeVisible();

    const searchInput = await findByTestId("job-search");
    expect(searchInput).toBeVisible();

    const placeSelect = await findByTestId("place-select");
    expect(placeSelect).toBeVisible();
  });

  it("should be able to type input", async () => {
    const { findByTestId } = render(
      <CustomProvider>
        <SearchBar />
      </CustomProvider>
    );
    const inputElement = (await findByTestId("job-search", undefined, {
      timeout: 5000,
    })) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "reactjs" } });
    expect(inputElement.value).toBe("reactjs");
  });

  it("should empty before search", async () => {
    const { findByTestId, findByRole } = render(
      <CustomProvider>
        <SearchBar />
      </CustomProvider>
    );
    const inputElement = (await findByTestId("job-search", undefined, {
      timeout: 5000,
    })) as HTMLInputElement;
    expect(inputElement.value).toBe("");
    fireEvent.change(inputElement, { target: { value: "product" } });
    const searchButton = await findByRole("button", { name: "Search" });
    fireEvent.click(searchButton);
  });
});

describe("Select", () => {
  it("should correctly set default option", async () => {
    const { findByText } = render(
      <CustomProvider>
        <SearchBar />
      </CustomProvider>
    );
    const selectValue = await findByText("Title", undefined, {
      timeout: 10000,
    });
    expect(selectValue).toBeInTheDocument();
  });

  it("should display the correct number of options", async () => {
    const { findAllByRole } = render(
      <CustomProvider>
        <SearchBar />
      </CustomProvider>
    );
    const optionArray = await findAllByRole("option");
    expect(optionArray.length).toBe(3);
  });

  it("should select correct time", async () => {
    const { findByText } = render(
      <CustomProvider>
        <SearchBar />
      </CustomProvider>
    );
    const firstOption = await findByText("Location", undefined, {
      timeout: 5000,
    });
    const secondOption = await findByText("Category");
    fireEvent.click(firstOption);
    expect(firstOption).toBeVisible();
    fireEvent.click(secondOption);
    expect(secondOption).toBeVisible();
  });
});
