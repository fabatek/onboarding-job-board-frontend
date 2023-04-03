import React from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./services";
import Job from "../Job/Job";
import HomeTemplate from "../../templates/HomeTemplate";
import JobDetail from "../JobDetail/JobDetail";
import PageNotFound from "../PageNotFound/PageNotFound";

const Router: React.FC = () => (
  <Routes>
    <Route path={routes.ROOT} element={<HomeTemplate />}>
      <Route path={routes.ROOT} element={<Job />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
    <Route path={routes.JOB} element={<HomeTemplate />}>
      <Route path={routes.JOB} element={<Job />} />
      <Route path={routes.JOB_DETAIL} element={<JobDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  </Routes>
);

export default Router;
