import React, { ReactElement } from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../Scroll_To_Top/ScrollToTop";
import JobList from "../JobList";
import JobSearch from "../JobSearch";
import JobComponent from "../JobComponent";
import pathStore from "../apis/pathStore";

//Custom Reuse Render Text Is Exists
const RenderReuseText = (component: ReactElement | React.FC, text: string) => {
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>{component}</Provider>
    </BrowserRouter>
  );
  const verify = getByText(text);
  expect(verify).toBeInTheDocument();
};
test("verify renders header jobsearch joblist scrolltotop footer component", () => {
  const { container } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <JobSearch />
        <JobList />
        <Footer />
        <ScrollToTop />
      </Provider>
    </BrowserRouter>
  );
  expect(container).toBeInTheDocument();
});
test("verify renders text in jobcomponent is exists", () => {
  RenderReuseText(<JobComponent />, "Loading...");
});
test("verify renders text in joblist is exists", () => {
  RenderReuseText(<JobList />, "List of popular jobs");
});

describe("get/ - api request", () => {
  it("api request successfully", async () => {
    const result = await pathStore.get(`/jobs/`);
    expect(result.status).toEqual(200);
  });
});
describe("get/ - a simple api endpoint", () => {
  it("api request successfully", async () => {
    const itemSearch: string = "name 1";
    const result = await pathStore.get(`/jobs?name=${itemSearch}`);
    expect(result.status).toEqual(200);
  });
});
