import { fetchJobsData } from "../../api/jobApi"
import { Dispatch } from 'redux'
import { getJobsAction, getJobsLoading, GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING } from "../constants/jobConstant";

export const getData = (name: string) => async (dispatch: Dispatch<getJobsAction | getJobsLoading>) => {
  dispatch({ type: GET_JOBS_LOADING, loading: true });
  try {
    const jobs = await fetchJobsData(name);
    dispatch({ type: GET_JOBS, payload: jobs, loading: false });
  } catch (error) {
    dispatch({ type: GET_JOBS_ERROR, payload: "Get data error", loading: false })
  }
}