import { render, screen } from "@testing-library/react";
import Pagination from "./index";
import configureStore from "../../Redux/Store";
import { Provider } from "react-redux";
import { SystemState } from "../../Redux/type";
const store = configureStore();
import React from "react";
import "@testing-library/jest-dom";
test("renders learn react link", async () => {
  let jobs: SystemState["jobs"] = [];
  for (let index = 0; index < 100; index++) {
    jobs.push({
      id: 0,
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
  //pass onChangePage example
  var onChangePage = (): void => {
    return;
  };

  render(
    <Provider store={store}>
      <Pagination
        onChangePage={onChangePage}
        pageSize={10}
        currentPage={1}
        countPage={10} //100 : pageSize
        jobList={jobs}
      />
    </Provider>
  );
  //test 10 item page and 2 buttom to navigation
  const itemPage = screen.queryAllByText("page-jobs");
  const prevPage = screen.getByTestId("prev");
  const nextPage = screen.getByTestId("next");
  //except 10 itemPage and 2 button
  expect(itemPage).toHaveLength(10);
  expect(prevPage).toBeVisible();
  expect(nextPage).toBeVisible();
});
