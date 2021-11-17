import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { BrowserRouter } from "react-router-dom";
import JobItem, { formatString, getTimeAgo } from ".";
import Job from "../../models/jobModel";

describe("With React Testing Library", () => {
  it("should formatString", () => {
    expect(formatString(job.title)).toBe("Model");
    expect(formatString(job.title)).not.toBeNull();
  });
  const job: Job = {
    title: "model",
    image: "http://placeimg.com/64/480/transport",
    description: "Human",
    is_hot: true,
    city: "New Madgeville",
    salary: "338.00",
    create_at: "2021-02-14T08:06:34.850Z",
    update_at: "2022-06-16T06:07:03.795Z",
    id: "1",
  };
  it("should render ItemJob", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <JobItem job={job} />
        </BrowserRouter>
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });

  it("should render propItem", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <JobItem job={job} />
        </BrowserRouter>
      </Provider>
    );
    const imgEl = screen.getByRole("img");
    expect(imgEl).toBeInTheDocument();
    expect(imgEl).toHaveAttribute("src", job.image);

    const title = screen.getByText(formatString(job.title));
    expect(title).toBeInTheDocument();

    const salary = screen.getByText(job.salary);
    expect(salary).toBeInTheDocument();

    const description = screen.getByText(job.description);
    expect(description).toBeInTheDocument();

    const hot = screen.getByTestId("is-hot");
    expect(hot).toHaveClass("active");

    const city = screen.getByText(job.city);
    expect(city).toBeInTheDocument();

    const timeAgo = screen.getByText(getTimeAgo(job.create_at));
    expect(timeAgo).toBeInTheDocument();
  });
});
