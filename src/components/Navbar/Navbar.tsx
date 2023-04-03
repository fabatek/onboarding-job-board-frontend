import React, { useState } from "react";
import { searchValueReducer } from "../../redux/reducer/jobs";
import { DispatchType } from "../../redux/store/store";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [filter, setFilter] = useState({
    jobLevel: "default",
    salary: "default",
    workingModel: "default",
    companyType: "default",
  });
  const dispatch: DispatchType = useDispatch();
  const handleChangeFilter = (
    e: React.ChangeEvent<HTMLSelectElement>,
    type: string
  ): void => {
    if (type === "jobLevel") {
      setFilter({ ...filter, jobLevel: e.target.value });
    }
    if (type === "salary") {
      setFilter({ ...filter, salary: e.target.value });
    }
    if (type === "workingModel") {
      setFilter({ ...filter, workingModel: e.target.value });
    }
    if (type === "companyType") {
      setFilter({ ...filter, companyType: e.target.value });
    }
  };

  const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const action = {
      jobLevel: filter.jobLevel,
      salary: filter.salary,
      workingModel: filter.workingModel,
      companyType: filter.companyType,
    };
    dispatch(searchValueReducer(action))
  };

  const handleClearFilter = () => {
    setFilter({
      jobLevel: "default",
      salary: "default",
      workingModel: "default",
      companyType: "default",
    })
    dispatch(searchValueReducer({
      jobLevel: "default",
      salary: "default",
      workingModel: "default",
      companyType: "default",
    }))
  }
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
                  aria-label="Default select job level"
                  role="combobox"
                  value={filter.jobLevel}
                  onChange={(e) => handleChangeFilter(e, "jobLevel")}
                >
                  <option value="default">Job level</option>
                  <option value="Junior">Junior</option>
                  <option value="Fresher">Fresher</option>
                  <option value="Senior">Senior</option>
                  <option value="Manager">Manager</option>
                </select>
              </li>
              <li className="nav-item me-3">
                <select
                  className="form-select"
                  aria-label="Default select salary"
                  role="combobox"
                  value={filter.salary}
                  onChange={(e) => handleChangeFilter(e, "salary")}
                >
                  <option value="default">Salary Range</option>
                  <option value="6000">{`< 6000$`}</option>
                  <option value="7000">{`< 7000$`}</option>
                  <option value="8000">{`< 8000$`}</option>
                  <option value="9000">{`< 9000$`}</option>
                </select>
              </li>
              <li className="nav-item me-3">
                <select
                  className="form-select"
                  aria-label="Default select working model"
                  role="combobox"
                  value={filter.workingModel}
                  onChange={(e) => handleChangeFilter(e, "workingModel")}
                >
                  <option value="default">Working Model</option>
                  <option value="Remote">remote</option>
                  <option value="Office">office</option>
                </select>
              </li>
              <li className="nav-item me-3">
                <select
                  className="form-select"
                  aria-label="Default select company type"
                  role="combobox"
                  value={filter.companyType}
                  onChange={(e) => handleChangeFilter(e, "companyType")}
                >
                  <option value="default">Company type</option>
                  <option value="Product">Product</option>
                  <option value="Outsource">Outsource</option>
                </select>
              </li>
              <li>
                <button
                  className="btn btn-primary"
                  data-testid="button-filter"
                  onClick={handleFilter} 
                >
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </li>
              <li className="" data-testid='btn-clear-test' onClick={handleClearFilter}>
                <button className="btn btn-outline text-primary mx-2 my-auto">
                  Clear all filters
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
