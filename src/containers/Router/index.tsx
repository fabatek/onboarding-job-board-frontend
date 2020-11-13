import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { routes } from "./services";
import Home from "../Home";

const Router: React.FC = () => (
  <BrowserRouter>
  <Switch>
    <Route path={routes.ROOT} component={Home} />
  </Switch>
  </BrowserRouter>
);

export default Router;
