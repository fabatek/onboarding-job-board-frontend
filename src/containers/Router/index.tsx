import React from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";

import { routes } from "./services";

import Header from "../../components/Header";
import Home from "../Home/index"
import AllJobs from "../../components/AllJobs/AllJobs";

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.ROOT} component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/alljobs" component={AllJobs} />
    </Switch>
  </BrowserRouter>
  
);

export default Router;
