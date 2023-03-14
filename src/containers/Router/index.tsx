import React from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./services";
import Home from "../Home";
import Job from "../Job/Job";

const Router: React.FC = () => (
  <Routes>
    <Route path={routes.ROOT} element={<Home />} />
    <Route path={routes.JOB} element={<Job />} />
  </Routes>
);

export default Router;
