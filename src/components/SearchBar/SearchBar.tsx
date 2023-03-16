import React, { useEffect, useState } from "react";
import { DispatchType, RootState } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobsApi } from "../../redux/reducer/jobReducer";
import "../../assets/styles/SearchBar/SearchBar.scss";
import { placeOptions } from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {};

const SearchBar = (props: Props) => {
  const { jobList, isLoading } = useSelector(
    (state: RootState) => state.jobReducer
  );
  const dispatch: DispatchType = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(getAllJobsApi());
  }, [dispatch]);

  return (
    <div className="bg-dark container-fluid search-bar-container">
      <div className="row">
        <h1 className="text-white">
          {isLoading ? (
            <div
              className="spinner-grow"
              role="status"
              data-testid="loading"
            ></div>
          ) : (
            <span
              data-testid="number-of-jobs"
              className="number-of-jobs"
              id="number-of-jobs"
            >
              {jobList.length}
            </span>
          )}{" "}
          IT Jobs For Developers
        </h1>
      </div>
      <div className="row">
        <div className="col-3">
          <select
            className="form-select w-100"
            defaultValue={1}
            data-testid="place-select"
          >
            {placeOptions.map((item) => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className="col-7">
          <div className="input-group mb-3 w-100">
            <span className="input-group-text" id="basic-addon1">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="jobs, skills, companies, ..."
              aria-label=""
              aria-describedby="basic-addon1"
              data-testid="job-search"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
          </div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary w-100" type="submit">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
