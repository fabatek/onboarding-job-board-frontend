import axios from "axios"
import { Job } from "../state/constants/jobConstant";

export const fetchJobsData = async (name: string) => {
  const { data } = await axios.get<Job[]>(`${process.env.REACT_APP_DATA_URL}/jobs`);
  const jobs = data.filter((job: Job) => job.title.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  return jobs;
}