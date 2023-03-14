import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
import { jobAPI } from "../../redux/reducer/JobReducer";
import { DispatchType, RootState } from "../../redux/configStore";
export interface Job {
  id: number;
  name: string;
  status: string;
}

function Home() {
  const { jobs } = useSelector((state: RootState) => {
    return state.JobReducer;
  });

  // const [jobs, setJobs] = useState<Job[]>([]);
  const [count, setCount] = useState(0);

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(jobAPI());
    // setJobs(jobsAPI);
    countAvailableJob();
  });

  const countAvailableJob = () => {
    let count = 0;
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].status) {
        count++;
      }
    }
    setCount(count);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "left" }}>Nhà tuyển dụng hàng đầu</h1>
      <h2>{count} Có Việc Làm IT Cho Developer "Chất"</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {jobs.map((job) => {
          return (
            <div className="job" key={job.id}>
              <div className="job__content">
                <div
                  className={`content-tag job__content--${
                    job.status ? "green" : "red"
                  }`}
                >
                  <span className="content__status">
                    {job.status ? "Available" : "Non-available"}
                  </span>
                </div>
                <h2 className="content-name">{job.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
