import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import dotenv from "dotenv";

import "./index.scss";

import * as serviceWorker from "./serviceWorker";
import Home from "./containers/Home";
import { store } from "./redux/configStore";
import { Provider } from "react-redux";
import Detail from "./containers/Detail/Detail";
import HomeTemplate from "./containers/HomeTemplate/HomeTemplate";
import Page404 from "./containers/Page404/Page404";

dotenv.config();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
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
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
