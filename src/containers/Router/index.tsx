import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { routes } from "./services";
import Home from "../Home/index"
import AllJobs from "../../components/AllJobs/AllJobs";
import Dashboard from "../../components/Dashboard/Dashboard";

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.ROOT} component={Home} />
      <Route path={routes.ALLJOBS} component={AllJobs} />
      <Route path={routes.DASHBOARD} component={Dashboard} />
    </Switch>
  </BrowserRouter>

);

export default Router;
