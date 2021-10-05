import { render, screen } from "@testing-library/react";
import Home from "./jobs";
import configureStore from "../Redux/Store";
import { Provider } from "react-redux";
import { SystemState } from "../Redux/type";

const store = configureStore();
import React from "react";


test("renders learn react link", async () => {
  let jobs: SystemState["jobs"] = [];
  for (let index = 0; index < 100; index++) {
    jobs.push({
      name: "tester",
      city: "",
      district: "",
      nation: "",
      dateWork: "",
      memberMin: 0,
      memberMax: 0,
      image: "",
    });
  }
  //pass jobs into Home to test key city
  render(
    <Provider store={store}>
      <Home jobs={jobs} />
    </Provider>
  );
  const element = screen.queryAllByText("tester"); //find text "tester"
  expect(element).toHaveLength(100);
});
