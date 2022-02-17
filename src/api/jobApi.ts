import axios from "axios"
import { Job, DEFAULT_LIMIT, API } from "../state/constants/jobConstant";

export const fetchJobsData = async (name: string) => {
  const { data } = await axios.get<Job[]>(API);
  const jobs = data.slice(0, 100);
  return jobs;

}

export const fetchJobsDataByPage = async (page: Number) => {
  const { data } = await axios.get<Job[]>(`${API}?page=${page}&limit=${DEFAULT_LIMIT}`);
  return data;
}