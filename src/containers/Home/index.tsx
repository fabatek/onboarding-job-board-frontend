import logo from "../../logo.svg";
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
    let count = 0;
    for (let i = 0; i < job.length; i++) {
      if (job[i].status) {
        count++;
      }
    }
    setCount(count);
  };

  useEffect(() => {
    getJobAPi();
    countAvailableJob();
  }, []);
  return (
    <div className="App">
      <h1 style={{ textAlign: "left" }}>Nhà tuyển dụng hàng đầu</h1>
      <h2>{count} Có Việc Làm IT Cho Developer "Chất"</h2>
    </div>
  );
}

export default Home;
