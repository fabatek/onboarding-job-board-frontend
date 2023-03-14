import React from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./services";
import Job from "../Job/Job";
import HomeTemplate from "../../templates/HomeTemplate";

const Router: React.FC = () => (
  <Routes>
    <Route path={routes.ROOT} element={<HomeTemplate />}>
      <Route path={routes.ROOT} element={<Job />} />
    </Route>
    <Route path={routes.JOB} element={<HomeTemplate />}>
      <Route path={routes.JOB} element={<Job />} />
    </Route>
  </Routes>
);

export default Router;
