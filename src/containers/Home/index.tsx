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

  const [job, setJob] = useState<Job[]>([]);
  const [count, setCount] = useState(0);
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(jobAPI());
    setJob(jobs);

    countAvailableJob();
  });

  const countAvailableJob = () => {
    let count = 0;
    for (let i = 0; i < job.length; i++) {
      if (job[i].status) {
        count++;
      }
    }
    setCount(count);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "left" }}>Nhà tuyển dụng hàng đầu</h1>
      <h2>{count} Có Việc Làm IT Cho Developer "Chất"</h2>
    </div>
  );
}

export default Home;
