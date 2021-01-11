import React from "react";
import { Route, Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="nav">
          <ul className="nav">
              <li className="nav-link">
                  <Route>
                    <Link to="/jobs">Jobs</Link>
                  </Route>
              </li>
          </ul>
      </div>
    </div>
  );
}

export default Menu;