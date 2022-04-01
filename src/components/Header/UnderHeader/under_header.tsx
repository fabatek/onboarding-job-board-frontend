import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobsFilter } from "../../../redux/jobs/jobs-action";
import { RootStore } from "../../../redux/store";

const UnderHeader: React.FC = () => {
  const dispatch = useDispatch();
  const jobState = useSelector((state: RootStore) => state.job);
  const [inputSearch, SetInputSearch] = useState<string>("");
  const languagesList = [
    "Tester",
    "Java",
    "PHP",
    "Android",
    ".NET",
    "IOS",
    "Business Analyst",
    "QA QC",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetInputSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(getJobsFilter(inputSearch));
  };

  const RenderLanguagesList = (): JSX.Element => {
    return (
      <>
        <ul className="d-inline-flex">
          {languagesList.map((item) => (
            <li key={item} className="nav-item list-inline-item ">
              <a
                href="#"
                className="nav-link col-auto ms-xl-2 p-2 bg-white-hover text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="container m-auto p-0 flex-column">
      <div className="search__container container-fluid px-5 mb-2 bg-dark text-white">
        <h3 className="px-5 pt-5 pb-3 text-white fs-2 text-wrap">
          {jobState.job?.length} IT Jobs For Chất Developers
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="p-5 text-white fs-3 row g-3 form">
            <div className="col-md-8">
              <input
                onChange={handleInputChange}
                className="form-control form-input"
                type="text"
                placeholder="Keyword skill (Java, iOS...), Job Title, Company..."
              />
            </div>
            <div className="col-lg-2">
              <select
                defaultValue={"default"}
                name=""
                id=""
                className="form-select"
              >
                <option value="default" disabled>
                  All Cities
                </option>
                <option value="1">Ho Chi Minh</option>
                <option value="2">Ha Noi</option>
                <option value="3">Da Nang</option>
              </select>
            </div>
            <div className="col col-lg-2">
              <button
                type="submit"
                className="d-flex justify-content-center align-items-center btn btn-danger col w-100 fs-7 fw-bold"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div>
          <RenderLanguagesList />
        </div>
      </div>
    </div>
  );
};

export default UnderHeader;
