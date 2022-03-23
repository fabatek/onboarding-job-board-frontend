import React from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./services";
import Home from "../Home";
import JobDetail from "../Job_Detail/JobDetail";

const Router: React.FC = () => (
  <Routes>
    <Route path={routes.ROOT} element={<Home />} />
  </Routes>
);

export default Router;
