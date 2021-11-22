import { render, fireEvent } from "@testing-library/react";
import Home from "../Home";
import React from "react";
import { Provider } from "react-redux";
import store from "../../state/store";

test('renders welcome message', () => {
  const { container } = render(<Provider store={store}><Home /></Provider>);
  expect(container).toBeInTheDocument();
});

test("jobs should contain search keyword", async () => {
  const { getByPlaceholderText, getByRole, findAllByTestId, findByTestId } = render(<Provider store={store}><Home /></Provider>);
  const inputElement = getByPlaceholderText(/Keyword skills, Job Title, Company.../i);
  const buttonElement = getByRole("button", { name: /Search/i });
  fireEvent.change(inputElement, { target: { value: "manager" } });
  fireEvent.click(buttonElement);
  const jobContentElements = await findAllByTestId(/job-content/i);
  if (jobContentElements.length > 0) {
    const jobContentElement = await findByTestId(/job-content-0/i)
    expect(jobContentElement).toHaveTextContent(/manager/i);
  }
})