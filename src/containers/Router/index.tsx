import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./services";
import Home from "../Home";
import Jobs from "../Jobs";

const Router: React.FC = () => (
  <Switch>
    <Route exact path={routes.ROOT} component={Home} />
    <Route path={routes.JOBS} component={Jobs} />
  </Switch>
);

export default Router;
