import { fetchJobsData ,fetchJobsDataByPage} from "../../api/jobApi"
import { Dispatch } from 'redux'
import { getJobsAction, getJobsLoading, GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING } from "../constants/jobConstant";

export const getData = (page : Number) => async (dispatch: Dispatch<getJobsAction | getJobsLoading>) => {
  dispatch({ type: GET_JOBS_LOADING });
  try {
    const jobs = await fetchJobsData();
    const jobsOfPage = await fetchJobsDataByPage(page);
    dispatch({ type: GET_JOBS, payload: {jobsOfPage,jobs} });
  } catch (error) {
    dispatch({ type: GET_JOBS_ERROR, payload: "Get data error" })
  }
}
