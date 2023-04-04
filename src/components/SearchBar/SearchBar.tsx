import React, { useEffect, useState } from "react";
import { DispatchType, RootState } from "../../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobsApi, searchJobApi } from "../../redux/reducer/jobReducer";
import "../../assets/styles/SearchBar/SearchBar.scss";
import { searchOptions } from "../../static/data";
import { Button } from "../../assets/styles/style";

type Props = {
  searchValueProp?: string;
};

const SearchBar = (props: Props) => {
  const { searchValueProp } = props;
  const { jobList, isLoading } = useSelector(
    (state: RootState) => state.jobReducer
  );

  const dispatch: DispatchType = useDispatch();

  const [searchValue, setSearchValue] = useState<string>("");
  if (searchValueProp) {
    dispatch(searchJobApi("1", searchValueProp));
    setSearchValue("");
  }
  const [searchOption, setSearchOption] = useState<string>("1");

  useEffect(() => {
    dispatch(getAllJobsApi());
  }, [dispatch]);

  const handleSearchJob = () => {
    const tempValue = searchValue.trim().toLowerCase();
    dispatch(searchJobApi(searchOption, tempValue));
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
            <span className="number-of-jobs" id="number-of-jobs">
              {jobList?.length || 100}
            </span>
          }{" "}
          IT Jobs For Developers
        </h1>
      </div>
      <div className="row search-bar-container__content">
        <div className="col-2">
          <select
            className="form-select w-100"
            defaultValue={1}
            onChange={(e) => setSearchOption(e.target.value)}
          >
            {searchOptions?.map((item) => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className="col-8">
          <div className="input-group mb-3 w-100 bg-white align-items-center overflow-hidden border-0 rounded">
            <input
              type="text"
              className="input-group__form-control form-control job-search"
              placeholder="type the value you need to search"
              aria-label=""
              aria-describedby="basic-addon1"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
        <div className="col-2">
          <Button
            onClick={handleSearchJob}
            disabled={searchValue ? false : true}
            className="w-100"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
