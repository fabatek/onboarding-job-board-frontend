import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./services";
import Home from "../Home";

const Router: React.FC = () => (
  <Switch>
    <Route exact path={routes.ROOT} component={Home} />
  </Switch>
);

export default Router;
