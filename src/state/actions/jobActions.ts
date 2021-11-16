import { fetchJobsData } from "../../api/jobApi"
import { Dispatch } from 'redux'
import { getJobsAction, GET_JOBS, GET_JOBS_ERROR } from "../constants/jobConstant";

export const getData = (name: string) => async (dispatch: Dispatch<getJobsAction>) => {
  try {
    const jobs = await fetchJobsData(name);
    dispatch({ type: GET_JOBS, payload: jobs });
  } catch (error) {
    dispatch({ type: GET_JOBS_ERROR, payload: "Get data error" })
  }
}