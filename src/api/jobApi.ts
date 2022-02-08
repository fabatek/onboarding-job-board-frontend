import axios from "axios"
import { Job } from "../state/constants/jobConstant";

export const fetchJobsData = async (name: string) => {
  // const { data } = await axios.get<Job[]>(`${process.env.REACT_APP_DATA_URL}/jobs`);
  const { data } = await axios.get<Job[]>(`https://6201d6f6b8735d00174cb605.mockapi.io/api/job`);
  const jobs = data.filter((job: Job) => job.title.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  return jobs;
}