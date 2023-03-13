import logo from "../../logo.svg";
import React, { useEffect, useRef, useState } from "react";

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
  function create100Jobs() {
    let jobs: Job[] = [];
    for (let i = 1; i <= 150; i++) {
      if (i % 2 === 0) {
        jobs.push({ id: i, name: `Job ${i}`, status: "Not Available" });
      } else {
        jobs.push({ id: i, name: `Job ${i}`, status: "Available" });
      }
    }
    setJob(jobs);
  }
  function next() {
    numberRef.current = number;
    setNumber(number + 10);
    if (number > 150) {
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
      setNumber(150);
      numberRef.current = 141;
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
      if (job[i].status === "Available") {
        count++;
      }
    }
    setCount(count);
  }
  console.log("number", number);
  console.log("numberRef", numberRef.current);
  useEffect(() => {
    create100Jobs();
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
      <div className="productList">
        {job.map((j) => {
          return (
            <div className="box">
              <div className="content" key="j.id">
                <h3>{j.name}</h3>
                <h4>{j.status}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
