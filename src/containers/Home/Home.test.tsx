import {render} from "@testing-library/react";
import Home from "../Home/index";
import React from "react";
import Header from "../../components/Header";

test('renders learn react link', () => {
  const { container } = render(<Header />);
  expect(container).toBeInTheDocument();
});

