import React from "react";
import { render, waitFor } from "@testing-library/react";
import ShowAllJobs from "./ShowAllJobs";
import { Provider, useSelector } from "react-redux";
import store from "../../redux/store/store";

const ShowAllJobsTestComponent = () => {
  return (
    <Provider store={store}>
      <ShowAllJobs />
    </Provider>
  );
};

const mockState = { loading: false,searchResults:[
  {
    createdAt: "2022-12-06T13:06:50.782Z",
    title: "International Paradigm Agent",
    avatar: "https://loremflickr.com/640/480/food",
    address: "Livermore",
    tag: "Technician",
    status: true,
    jobDesc: "Totam necessiis mollitia facere repudiandae. Aspernatur itaque amet id sa",
    id: "1"
  },
  {
    createdAt: "2022-12-06T13:06:50.782Z",
    title: "International Paradigm Agent",
    avatar: "https://loremflickr.com/640/480/food",
    address: "Livermore",
    tag: "Technician",
    status: true,
    jobDesc: "Totam necessiis mollitia facere repudiandae. Aspernatur itaque amet id sa",
    id: "1"
  },
  {
    createdAt: "2022-12-06T13:06:50.782Z",
    title: "International Paradigm Agent",
    avatar: "https://loremflickr.com/640/480/food",
    address: "Livermore",
    tag: "Technician",
    status: true,
    jobDesc: "Totam necessiis mollitia facere repudiandae. Aspernatur itaque amet id sa",
    id: "1"
  }
] };

const mockStateWithLoading = { loading: true,allJobs:[
  {
    createdAt: "2022-12-06T13:06:50.782Z",
    title: "International Paradigm Agent",
    avatar: "https://loremflickr.com/640/480/food",
    address: "Livermore",
    tag: "Technician",
    status: true,
    jobDesc: "Totam necessiis mollitia facere repudiandae. Aspernatur itaque amet id sa",
    id:'2'
  }
] };
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));
describe("show all jobs component", () => {

  test("show all jobs", async () => {
    (useSelector as jest.Mock).mockReturnValue(mockState);
    const { getByTestId } = render(<ShowAllJobsTestComponent />);
     expect(getByTestId("total-jobs")).toBeInTheDocument();
  });
  test("render list job", async () => {
    (useSelector as jest.Mock).mockReturnValue(mockState);
    const { getByTestId } = render(<ShowAllJobsTestComponent />);
    const listItem = await waitFor(() => getByTestId("list-job"))
    expect(listItem).toBeInTheDocument()
  });
  test("render list job", async () => {
    (useSelector as jest.Mock).mockReturnValue(mockState);
    const { getAllByTestId } = render(<ShowAllJobsTestComponent />);
    const listItem = await waitFor(() => getAllByTestId("list-item-test"));
    expect(listItem).toHaveLength(3)
  });
  test("render loading", async () => {
    (useSelector as jest.Mock).mockReturnValue(mockStateWithLoading);
    const { getByTestId } = render(<ShowAllJobsTestComponent />);
    const listItem = await waitFor(() => getByTestId("loading-testid"))
    expect(listItem).toBeInTheDocument();
  });
});