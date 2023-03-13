import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";
interface Job {
  id: number;
  name: string;
  status: string;
}

function Home() {
  const [job, setJob] = useState<Job[]>([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  const currentJobs = job.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
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

  const countAvailableJob = () => {
    const availableJobsCount = job.reduce((count, job) => {
      if (job.status) {
        return count + 1;
      }
      return count;
    }, 0);
    setCount(availableJobsCount);
  };

  useEffect(() => {
    getJobAPi();
    countAvailableJob();
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: "left" }}>Nhà tuyển dụng hàng đầu</h1>
      <h2>{count} Có Việc Làm IT Cho Developer "Chất"</h2>
      <div className="jobList">
        {currentJobs.map((j) => {
          return (
            <div className="jobList__job">
              <div className="job-content" key="j.id">
                <h3>{j.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {Array.from({ length: Math.ceil(job.length / jobsPerPage) }).map(
          (_, index) => (
            <button
              style={{ marginLeft: "20px", display: "inline-block" }}
              key={index}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
