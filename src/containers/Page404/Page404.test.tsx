import { fireEvent, getByTestId, render } from "@testing-library/react";

import { Provider } from "react-redux";
import {
  BrowserRouter,
  MemoryRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { store } from "../../redux/configStore";
import Detail from "../Detail/Detail";
import { Job } from "../Home";
import JobComponent from "../JobComponent/JobComponent";
import Page404 from "./Page404";

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
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "",
  }),
}));
test("navigates to project detail page on click", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route index element={<JobComponent job={job} index={0} />}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );

  if (useLocation().pathname === "/1231231251dasdas") {
    const notFoundImg = document.querySelector("img") as HTMLImageElement;
    const homeLink = getByTestId("home__link");

    fireEvent.click(homeLink);

    expect(notFoundImg).toBeInTheDocument();
    expect(useLocation().pathname).toBe("");
  }
});
