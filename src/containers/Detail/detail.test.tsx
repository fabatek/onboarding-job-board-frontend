import { render, screen } from "@testing-library/react";
import Detail from ".//index";
import configureStore from "../Redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const store = configureStore();
import React from "react";
test("renders detail", async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Detail />
      </Provider>
    </BrowserRouter>
  );

  //test each element which have set data
  const nameElement = screen.getByTestId("name");
  const cityElement = screen.getByTestId("city");
  const dateWorkElement = screen.getByTestId("dateWork");
  const memberElement = screen.getByTestId("member");
  const nationElement = screen.getByTestId("nation");

  //except these element
  expect(nameElement).toBeVisible();
  expect(cityElement).toBeVisible();
  expect(dateWorkElement).toBeVisible();
  expect(memberElement).toBeVisible();
  expect(nationElement).toBeVisible();
});
