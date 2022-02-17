import { fetchJobsData ,fetchJobsDataByPage} from "../../api/jobApi"
import { Dispatch } from 'redux'
import { getJobsAction, getJobsLoading, GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING ,GET_PAGINATION_JOBS} from "../constants/jobConstant";

export const getData = (name: string) => async (dispatch: Dispatch<getJobsAction | getJobsLoading>) => {
  dispatch({ type: GET_JOBS_LOADING });
  try {
    const jobs = await fetchJobsData(name);
    dispatch({ type: GET_JOBS, payload: jobs });

  } catch (error) {
    dispatch({ type: GET_JOBS_ERROR, payload: "Get data error" })
  }
}

export const getDataByPage = (page: Number) => async (dispatch: Dispatch<getJobsAction | getJobsLoading>) => {
  dispatch({ type: GET_JOBS_LOADING });
  try {
    const jobs = await fetchJobsDataByPage(page);
    dispatch({ type: GET_PAGINATION_JOBS, payload: jobs });

  } catch (error) {
    dispatch({ type: GET_JOBS_ERROR, payload: "Get data error" })
  }
}