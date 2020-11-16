import { render, waitFor } from "@testing-library/react";
import Home from "../Home/index";
import React from "react";
import store from "../../app/store";
import { Provider } from "react-redux";

test("renders number of jobs", async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );;
  const jobElement = getByTestId("job-number");
  await waitFor(()=>
    expect(Number(jobElement.textContent)).toBeGreaterThan(0),{timeout:30000})   
});

