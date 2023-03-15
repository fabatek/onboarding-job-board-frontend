import React from "react";
import {render } from "@testing-library/react";
import ShowAllJobs from "./ShowAllJobs";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
describe("ShowAllJobs", () => {
  test('total of jobs',()=>{
    const {getByTestId} = render(<Test/>)
    expect(getByTestId("total-job")).toBeInTheDocument();
  })
});


const Test = () => {
  return(
    <Provider store={store}>
    <ShowAllJobs/>
    </Provider>
  )
}