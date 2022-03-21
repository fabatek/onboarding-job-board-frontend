import React from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./services";
import Home from "../Home";
import JobDetail from "../Job_Detail/JobDetail";

const Router: React.FC = () => (
  <Routes>
    <Route path={routes.ROOT[0]} element={<Home />} />
    <Route path={routes.ROOT[1]} element={<JobDetail /> } />
  </Routes>
);

export default Router;
