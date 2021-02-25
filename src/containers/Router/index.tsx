import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./services";
import JobList from "../Pages/Job/index";

const Router: React.FC = () => (
  <Switch>
    {/* <Route exact path={routes.ROOT} component={Home} /> */}
    <Route exact path={routes.ROOT} component={JobList} />
  </Switch>
);

export default Router;
