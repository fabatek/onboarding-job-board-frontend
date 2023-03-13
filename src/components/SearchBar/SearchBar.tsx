import React, { useEffect } from "react";
import { DispatchType, RootState } from "../../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobsApi } from "../../redux/reducer/jobReducer";

type Props = {};

const SearchBar = (props: Props) => {
  const { jobList } = useSelector((state: RootState) => state.jobReducer);
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(getAllJobsApi());
  }, [dispatch]);

  return (
    <div className="bg-dark container-fluid" style={{ padding: "80px 200px" }}>
      <div className="row">
        <h1 className="text-white" style={{ letterSpacing: "-2px" }}>
          {jobList.length} IT Jobs For Developers
        </h1>
      </div>
      <div className="row">
        <div className="col-3">
          <select className="form-select w-100" defaultValue={1}>
            <option value={1}>Ha Noi</option>
            <option value={2}>Ho Chi Minh</option>
            <option value={3}>Da Nang</option>
          </select>
        </div>
        <div className="col-7">
          <div className="input-group mb-3 w-100">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="jobs, skills, companies, ..."
              aria-label=""
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary w-100">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
