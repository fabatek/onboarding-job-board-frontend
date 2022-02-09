import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import SearchHeader from ".";
import store from "../../state/store";

describe("SearchHeader", () => {
  it("should render search header element", async () => {
    const { getByPlaceholderText, getByRole, getByTestId, findByTestId } = render(<Provider store={store}><SearchHeader /></Provider>);
    await waitFor(() => expect(/job-content-0/i));
    const inputElement = getByPlaceholderText(/Tìm kiếm theo chức vụ, kỹ năng, công ty.../i);
    const buttonElement = getByRole("button", { name: /Tìm Kiếm/i });
    const totalJobElement = getByTestId("job-hiring");
    // expect(jobContentElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(totalJobElement).toBeInTheDocument();
  })
})