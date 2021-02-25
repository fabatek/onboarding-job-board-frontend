import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./services";
import Home from "../Home";
import JobList from "../../features/Job/page/JobList";

const Router: React.FC = () => (
  <Switch>
    <Route exact path={routes.ROOT} component={Home} />
    <Route exact path={routes.JOBLIST_PAGE} component={JobList} />
  </Switch>
);

export default Router;
