import React from "react";
import {render } from "@testing-library/react";
import ShowAllJobs from "./ShowAllJobs";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
const ShowAllJobsTestComponent = () => {
  return(
    <Provider store={store}>
    <ShowAllJobs/>
    </Provider>
  )
}
describe("show all jobs", () => {
  test('total of jobs',()=>{
    const {getByTestId} = render(<ShowAllJobsTestComponent/>)
    expect(getByTestId("total-job")).toBeInTheDocument();
  })
});