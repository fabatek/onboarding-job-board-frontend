import { fireEvent, render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { useLocation } from "react-router-dom";
import { Job } from "../Home";
import ReUsedTestComponent from "../../ReUsedTestComponent";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/detail/1",
  }),
}));
const job: Job = {
  name: "NAME 1",
  status: false,
  image: "https://loremflickr.com/640/480/food",
  dateStart: "2022-12-02T22:06:06.841Z",
  dateEnd: "2024-01-09T18:40:53.125Z",
  email: "Jodie_Bailey@hotmail.com",
  id: 1,
  price: 0,
  type: "Assistant",
};

test("Check if elements contain suitable class", async () => {
  const { getByText } = render(<ReUsedTestComponent />);
  const jobName = getByText(job.name);
  const testImage = document.querySelector("img") as HTMLImageElement;

  expect(testImage.alt).toContain(job.image);

  expect(jobName).toBeInTheDocument;
});

test("navigates to project detail page on click", () => {
  const { getByText } = render(<ReUsedTestComponent />);
  const jobLink = getByText(job.name);

  fireEvent.click(jobLink);
  expect(useLocation().pathname).toBe("/detail/1");
});
