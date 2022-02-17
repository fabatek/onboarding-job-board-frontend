import axios from "axios"
import { Job, DEFAULT_LIMIT, API } from "../state/constants/jobConstant";

export const fetchJobsData = async () => {
  const {data } = await axios.get<Job[]>(API);
  return data;
}

export const fetchJobsDataByPage = async (page: Number) => {
  const { data } = await axios.get<Job[]>(`${API}?page=${page}&limit=${DEFAULT_LIMIT}`);
  return data;
}