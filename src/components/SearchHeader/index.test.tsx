import { render } from "@testing-library/react";
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
  })
})