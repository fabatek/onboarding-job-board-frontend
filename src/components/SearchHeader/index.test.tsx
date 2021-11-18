import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import SearchHeader from ".";
import store from "../../state/store";

describe("SearchHeader", () => {
  it("should render search header element", () => {
    const { getByPlaceholderText, getByRole, getByTestId } = render(<Provider store={store}><SearchHeader /></Provider>);
    const inputElement = getByPlaceholderText(/Keyword skills, Job Title, Company.../i);
    const buttonElement = getByRole("button", { name: /Search/i });
    const totalJobElement = getByTestId("job-hiring");
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(totalJobElement).toBeInTheDocument();
  });
  it("should be able to type in input element", () => {
    const { getByPlaceholderText } = render(<Provider store={store}><SearchHeader /></Provider>);
    const inputElement = getByPlaceholderText(/Keyword skills, Job Title, Company.../i);
    expect(inputElement.value).toBe("");
    fireEvent.change(inputElement, { target: { value: "manager" } });
    expect(inputElement.value).toBe("manager");
  });
})