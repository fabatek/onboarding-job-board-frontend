import React from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./services";
import Home from "../Home";

const Router: React.FC = () => (
  <Routes>
    <Route path={routes.ROOT} element={<Home />} />
    <Route path={routes.JOBS_PAGE} element={<Home />} />
  </Routes>
);

export default Router;
