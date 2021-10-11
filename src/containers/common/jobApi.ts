import api from "./api";

const URL_JOB = "/jobs";
//call api list jobs
export const getJobsApi = async () => {
  return await api.get(URL_JOB);
};

//call api job
export const getJobApi = async (id: number) => {
  return await api.get(`${URL_JOB}/${id}`);
};
