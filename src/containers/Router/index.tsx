import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import { routes } from "./services";


const Router: React.FC = () => (
  <Routes>
    <Route path={routes.ROOT} element={<Home />} />
  </Routes>
);

export default Router;
