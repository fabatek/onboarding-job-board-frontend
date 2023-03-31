import { fireEvent, render } from "@testing-library/react";

import { useLocation } from "react-router-dom";
import ReUsedTestComponent from "../../ReUsedTestComponent";

import { Job } from "../Home";

const job: Job = {
  name: "name 1",
  status: false,
  image: "https://loremflickr.com/640/480/food",
  dateStart: "2022-12-02T22:06:06.841Z",
  dateEnd: "2024-01-09T18:40:53.125Z",
  email: "Jodie_Bailey@hotmail.com",
  id: 1,
  price: 0,
  type: "Assistant",
};
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "",
  }),
}));
test("navigates to project detail page on click", () => {
  const { getByTestId } = render(<ReUsedTestComponent />);

  if (useLocation().pathname === "/1231231251dasdas") {
    const notFoundImg = document.querySelector("img") as HTMLImageElement;
    const homeLink = getByTestId("home__link");

    fireEvent.click(homeLink);

    expect(notFoundImg).toBeInTheDocument();
    expect(useLocation().pathname).toBe("");
  }
});
