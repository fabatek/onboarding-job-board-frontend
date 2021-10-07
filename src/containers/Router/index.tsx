import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./services";
import Home from "../Home";
import Detail from "../Detail";

const Router: React.FC = () => (
  <Switch>
    <Route path={routes.ROOT} component={Home} />
    <Route path={routes.DETAIL} exact={true} component={Detail} />
  </Switch>
);

export default Router;
