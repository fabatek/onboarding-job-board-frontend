import axios from "axios"
import { Job } from "../state/constants/jobConstant";

export const fetchJobsData = async (name: string) => {
  const { data } = await axios.get<Job[]>(`https://6201d6f6b8735d00174cb605.mockapi.io/api/job`);
  const jobs = data.filter((job: Job) => Number(job.id)<=100);
  return jobs;
  
}