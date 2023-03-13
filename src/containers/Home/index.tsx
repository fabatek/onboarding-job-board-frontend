import logo from "../../logo.svg";
import React, { useState } from "react";

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
  const [number, setNumber] = useState(1);
  function create100Jobs() {
    let jobs: Job[] = [];
    for (let i = 1; i <= 150; i++) {
      if (i % 2 === 0) {
        jobs.push({ id: i, name: `job${i}`, status: "Not Available" });
      } else {
        jobs.push({ id: i, name: `job${i}`, status: "Available" });
      }
    }
    setJob(jobs);
  }
  function next() {
    setNumber(number + 1);
  }
  console.log(job);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Welcome to Faba onboarding project - Job board</p>
        <button onClick={create100Jobs}>Show jobs</button>
        <div style={{ display: "flex" }}>
          <ul>
            {job.map((j) => {
              if (j.id <= 100) {
                return (
                  <li key={j.id} style={{ color: "yellow", fontSize: "12px" }}>
                    {j.name}
                    <span style={{ color: "green" }}> {j.status}</span>
                  </li>
                );
              }
            })}
            {/* <button>Previous</button>
            <button
              onClick={() => {
                next();
              }}
            >
              Next
            </button> */}
          </ul>

          {/* <ul>
            {job.map((j) => {
              return (
                <li key={j.id} style={{ color: "yellow", fontSize: "12px" }}>
                  {j.name}
                  <span style={{ color: "green" }}> {j.status}</span>
                </li>
              );
            })}
          </ul> */}
        </div>
      </header>
    </div>
  );
}

export default Home;
