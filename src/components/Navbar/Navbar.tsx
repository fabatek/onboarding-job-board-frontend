import React from "react";
const Navbar = () => {
  return (
    <div className="navbar container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item mx-2">
                <select
                  className="form-select"
                  aria-label="Default select example 2"
                  role="combobox"
                  defaultValue={'default'}
                >
                  <option value="default" >Job level</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </li>
              <li className="nav-item mx-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  role="combobox"
                  defaultValue={'default'}
                >
                  <option value="default">Salary Range</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </li>
              <li className="nav-item mx-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  role="combobox"
                  defaultValue={'default'}
                >
                  <option value="default">Woking Model</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </li>
              <li className="nav-item mx-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  role="combobox"
                  defaultValue={'default'}
                >
                  <option value="default">Company type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </li>
              <li>
                <button className="btn btn-primary" data-testid="button-filter">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </li>
              <li className="">
                <p className="text-primary mx-2 my-auto">Clear all filters</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
