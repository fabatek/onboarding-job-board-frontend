import axios from "axios"
import { Job, DEFAULT_LIMIT, API } from "../state/constants/jobConstant";

export const fetchJobsData = async () => {
  const {data } = await axios.get<Job[]>(API);
  return data;
}

export const fetchJobsDataSearch = async (title :String) => {
  const {data } = await axios.get<Job[]>(`${API}?title=${title}`);
  return data;
}

export const fetchJobsDataByPage = async (page: Number) => {
  const { data } = await axios.get<Job[]>(`${API}?page=${page}&limit=${DEFAULT_LIMIT}`);
  return data;
}

export const fetchJobsDataBySearch = async (text: String,page: Number) => {
  const { data } = await axios.get<Job[]>(`${API}?page=${page}&limit=${DEFAULT_LIMIT}&title=${text}`);
  return data;
}