import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { getJobs } from '../../actions/JobsActions';

const Jobs = () => { 

  const dispatch = useDispatch();
  const jobState = useSelector((state: RootStore) => state.jobs);

  useEffect(()=>{
    dispatch(getJobs());
  },[dispatch]);

  return (
    <div className="container">
        <div className="row">
            <div className="col col-md-8">
                <div className="jobs">
                    <h2 className="mt-4 mb-4">Jobs Page</h2>
                    <h3>{ jobState.job_count } IT jobs are available</h3>
                    <form>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Job nane" />
                       </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Jobs;
