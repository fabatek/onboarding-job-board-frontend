import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/configStore";
import Home from "../Home";
import JobComponent from "./JobComponent";
const job = {
  name: "name 1",
  status: false,
  image: "https://loremflickr.com/640/480/food",
  id: 1,
};
test("Check if elements contain suitable class", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <JobComponent job={job} index={1} />
    </Provider>
  );
  const jobName = getByText(job.name);
  const testImage = document.querySelector("img") as HTMLImageElement;

  expect(testImage.alt).toContain(job.image);

  expect(jobName).toBeInTheDocument;
});
