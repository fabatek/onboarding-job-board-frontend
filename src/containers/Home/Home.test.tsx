import {render} from "@testing-library/react";
import Home from "../Home/index";
import React from "react";
import Header from "../../components/Header";

test('renders learn react link', () => {
  // const { getByText } = render(<Header />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  render(<Home />)
});
