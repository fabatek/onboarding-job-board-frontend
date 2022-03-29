import { render } from "@testing-library/react";
import Home from "../Home";
import React from "react";

test("renders welcome message", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Jobs/i);
  expect(linkElement).toBeInTheDocument();
});
