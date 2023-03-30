import React,{useState} from "react";

const Navbar = () => {
  const [filter] = useState({
    jobLevel: "default",
    salary: "default",
    workingModel: "default",
    companyType: "default",
  })

  return (
    <div className="navbar container py-4 px-0">
      <nav className="navbar navbar-expand-lg px-0">
        <div className="container-fluid px-0">
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
            <ul className="navbar-nav align-items-center m-0">
              <li className="nav-item me-3">
                <select
                  className="form-select"
                  aria-label="Default select example 2"
                  role="combobox"
                  defaultValue={filter.jobLevel}
                >
                  <option value="default" >Job level</option>
                  <option value="1">Junior</option>
                  <option value="2">Fresher</option>
                  <option value="3">Senior</option>
                  <option value="4">Manager</option>
                </select>
              </li>
              <li className="nav-item me-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  role="combobox"
                  defaultValue={filter.salary}
                >
                  <option value="default">Salary Range</option>
                  <option value="1">{`< 3000$`}</option>
                  <option value="2">{`< 4000$`}</option>
                  <option value="3">{`< 5000$`}</option>
                  <option value="3">{`< 6000$`}</option>
                </select>
              </li>
              <li className="nav-item me-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  role="combobox"
                  defaultValue={filter.workingModel}
                >
                  <option value="default">Working Model</option>
                  <option value="0">remote</option>
                  <option value="1">office</option>
                </select>
              </li>
              <li className="nav-item me-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  role="combobox"
                  defaultValue={filter.companyType}
                >
                  <option value="default">Company type</option>
                  <option value="0">Product</option>
                  <option value="1">Outsource</option>
                </select>
              </li>
              <li>
                <button className="btn btn-primary" data-testid="button-filter">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </li>
              <li className="">
                <p className="text-primary mx-2 my-auto cursor-pointer">Clear all filters</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
