import logo from "../../logo.svg";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./styles.scss";
interface Job {
  id: number;
  name: string;
  status: string;
}
interface Jobs {
  job: Job[];
}
function Home() {
  const [job, setJob] = useState<Job[]>([]);
  const [count, setCount] = useState(0);
  const [findJob, setFindJob] = useState<Job[]>([]);
  const [jobName, setJobName] = useState("");
  const [number, setNumber] = useState(10);
  const numberRef = useRef(1);
  const getJobAPi = async () => {
    try {
      const response = await axios.get(
        "https://640ef43f4ed25579dc412e27.mockapi.io/api/showJob/job"
      );
      setJob(response.data);
    } catch (erro) {
      console.log(erro);
    }
  };
  function next() {
    numberRef.current = number;
    setNumber(number + 10);
    if (number > 200) {
      setNumber(10);
      numberRef.current = 1;
    }
  }
  function previous() {
    numberRef.current = number;
    setNumber(number - 10);
    if (numberRef.current > number) {
      setNumber(numberRef.current);
    }
    setNumber(number - 10);
    if (number < 1) {
      setNumber(200);
      numberRef.current = 191;
    }
  }
  function changeFindName(event: React.ChangeEvent<HTMLInputElement>) {
    setJobName(event.target.value);
    console.log(jobName);
  }
  function findJobs() {
    setFindJob(job.filter((j) => j.name === jobName));
  }
  function countAvailableJob() {
    let count = 0;
    for (let i = 0; i < job.length; i++) {
      if (job[i].status) {
        count++;
      }
    }
    setCount(count);
  }

  useEffect(() => {
    getJobAPi();
    countAvailableJob();
  }, []);
  return (
    <div className="App">
      {/* <button onClick={create100Jobs}>Show jobs</button> */}
      {/* <div>
        <input type="text" value={jobName} onChange={changeFindName} />
        <button
          onClick={() => {
            findJobs();
          }}
        >
          Find
        </button>
        <ul>
          {findJob.map((fj) => {
            return (
              <li key={fj.id} style={{ fontSize: "20px" }}>
                {fj.name}
                <span style={{ color: "green" }}> {fj.status}</span>
              </li>
            );
          })}
        </ul>
      </div> */}

      {/* <ul>
        {job.map((j) => {
          if (
            (j.id >= numberRef.current && j.id <= number) ||
            (j.id <= numberRef.current && j.id >= number)
          ) {
            return (
              <li key={j.id} style={{ fontSize: "12px" }}>
                {j.name}
                <span style={{ color: "green" }}> {j.status}</span>
              </li>
            );
          }
        })}
        <button
          onClick={() => {
            previous();
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            next();
          }}
        >
          Next
        </button>
      </ul> */}
      <h1 style={{ textAlign: "left" }}>Nhà tuyển dụng hàng đầu</h1>
      <h2>{count} Có Việc Làm IT Cho Developer "Chất"</h2>
      <div className="jobList">
        {job.map((j) => {
          return (
            <div className="jobList__job">
              <div className="job-content" key="j.id">
                <h3>{j.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
