import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./containers/Detail/Detail";
import Home, { Job } from "./containers/Home";
import HomeTemplate from "./containers/HomeTemplate/HomeTemplate";
import JobComponent from "./containers/JobComponent/JobComponent";
import Page404 from "./containers/Page404/Page404";
import { store } from "./redux/configStore";

type Props = {};

const ReUsedTestComponent = (props: Props) => {
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
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <JobComponent job={job} index={0} />
          <Routes>
            <Route path="" element={<HomeTemplate />}>
              <Route index element={<Home />}></Route>

              <Route path="detail">
                <Route path=":id" element={<Detail />}></Route>
              </Route>
              <Route path="*" element={<Page404 />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default ReUsedTestComponent;
