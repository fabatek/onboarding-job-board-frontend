import React, { useEffect, useState } from "react";
import { DispatchType, RootState } from "../../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobsApi, searchJobApi } from "../../redux/reducer/jobReducer";
import "../../assets/styles/SearchBar/SearchBar.scss";
import { placeOptions } from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {};

const SearchBar = (props: Props) => {
  const { jobList, isLoading } = useSelector(
    (state: RootState) => state.jobReducer
  );

  const dispatch: DispatchType = useDispatch();

  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    dispatch(getAllJobsApi());
  }, [dispatch]);

  const handleSearchJob = () => {
    const tempValue = searchValue.trim().toLowerCase();
    dispatch(searchJobApi(tempValue));
    setSearchValue("");
  };

  const handleKeyPress = (event: any) => {
    if (event.keyCode === 13) handleSearchJob();
  };

  if (isLoading) {
    return <div className="spinner-grow" role="status"></div>;
  }

  return (
    <div className="bg-dark container-fluid search-bar-container">
      <div className="row search-bar-container__heading">
        <h1 className="text-white number-job-title">
          {
            <span
              data-testid="number-of-jobs"
              className="number-of-jobs"
              id="number-of-jobs"
            >
              {jobList?.length}
            </span>
          }{" "}
          IT Jobs For Developers
        </h1>
      </div>
      <div className="row search-bar-container__content">
        <div className="col-3">
          <select
            className="form-select w-100"
            defaultValue={1}
            data-testid="place-select"
          >
            {placeOptions?.map((item) => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className="col-7">
          <div className="input-group mb-3 w-100 bg-white align-items-center overflow-hidden border-0">
            <span className="input-group__text" id="basic-addon1">
              <AiOutlineSearch className="w-100 fs-3" />
            </span>
            <input
              type="text"
              className="input-group__form-control form-control"
              placeholder="title of jobs..."
              aria-label=""
              aria-describedby="basic-addon1"
              data-testid="job-search"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary w-100" onClick={handleSearchJob}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
