import React from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./services";
import Home from "../Home";
import DetailJob from "../Detail";
const Router: React.FC = () => (
  <Routes>
    <Route path={routes.ROOT} element={<Home />} />
    <Route path={routes.detail} element={<DetailJob/>}/>
  </Routes>
);

export default Router;
