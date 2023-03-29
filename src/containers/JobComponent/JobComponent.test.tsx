import { fireEvent, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/configStore";

import Detail from "../Detail/Detail";
import JobComponent from "./JobComponent";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Job } from "../Home";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/detail/1",
  }),
}));
const job: Job = {
  name: "name 1",
  status: false,
  image: "https://loremflickr.com/640/480/food",
  dateStart: "2022-12-02T22:06:06.841Z",
  dateEnd: "2024-01-09T18:40:53.125Z",
  email: "Jodie_Bailey@hotmail.com",
  id: 1,
  price: 0,
};

test("Check if elements contain suitable class", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <JobComponent job={job} index={1} />
      </BrowserRouter>
    </Provider>
  );
  const jobName = getByText(job.name);
  const testImage = document.querySelector("img") as HTMLImageElement;

  expect(testImage.alt).toContain(job.image);

  expect(jobName).toBeInTheDocument;
});

test("navigates to project detail page on click", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route index element={<JobComponent job={job} index={0} />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
  const jobLink = getByText(job.name);

  fireEvent.click(jobLink);
  expect(useLocation().pathname).toBe("/detail/1");
});
