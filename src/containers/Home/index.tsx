import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
import { jobAPI } from "../../redux/reducer/JobReducer";
import { DispatchType, RootState } from "../../redux/configStore";
import BounceLoader from "react-spinners/BounceLoader";
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
  function loadingContent() {
    return jobs.length > 0 ? false : true;
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "left" }} data-testid="title" className="title">
        Nhà tuyển dụng hàng đầu
      </h1>
      <h2>{count} Có Việc Làm IT Cho Developer "Chất"</h2>
      <LoadingOverlay
        active={loadingContent()}
        spinner={<BounceLoader className="loading" />}
        text="Loading your content..."
      >
        <div className="job__list" data-testid="loading">
          {jobs.map((job) => {
            return (
              <div className="job" data-testid="job" key={job.id}>
                <div className="job__content" data-testid="job__content">
                  <div className="content__image" data-testid="content__image">
                    <img
                      className="content__image-random"
                      data-testid="content__image-random"
                      src={`https://picsum.photos/${
                        Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000
                      }`}
                      alt=""
                    />
                  </div>
                  <div
                    className={`content-tag job__content--${
                      job.status ? "green" : "red"
                    }`}
                    data-testid="content-tag"
                  >
                    <span
                      data-testid="content__status"
                      className="content__status"
                    >
                      {job.status ? "Available" : "Non-available"}
                    </span>
                  </div>
                  <h2 className="content-name" data-testid="content-name">
                    {job.name}
                  </h2>
                  <p className="content-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Unde adipisci deserunt amet eveniet delectus aliquid.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </LoadingOverlay>
    </div>
  );
}

export default Home;
