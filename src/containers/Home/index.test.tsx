import { getByDisplayValue, render } from "@testing-library/react";
import Home from "../Home";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux/configStore";
import { BrowserRouter } from "react-router-dom";

test("renders welcome message", () => {
  const { getByText } = render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
  const linkElement = getByText('Có Việc Làm IT Cho Developer "Chất"');

  expect(linkElement).toBeInTheDocument();
});
