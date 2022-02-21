import { fetchJobsData, fetchJobsDataByPage, fetchJobsDataBySearch, fetchJobsDataSearch } from "../../api/jobApi"
import { Dispatch } from 'redux'
import { getJobsAction, getJobsLoading, GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING, SEARCH_JOBS,SEARCH_JOBS_TEXT } from "../constants/jobConstant";

export const getData = (page: Number) => async (dispatch: Dispatch<getJobsAction | getJobsLoading>) => {
  dispatch({ type: GET_JOBS_LOADING });
  try {
    const jobs = await fetchJobsData();
    const jobsOfPage = await fetchJobsDataByPage(page);
    dispatch({ type: GET_JOBS, payload: { jobsOfPage, jobs } });
  } catch (error) {
    dispatch({ type: GET_JOBS_ERROR, payload: "Get data error" })
  }
}

export const getDataBySearch = (text : String) => async (dispatch: Dispatch<getJobsAction | getJobsLoading>) => {
  dispatch({ type: GET_JOBS_LOADING });
  try {
    const jobsOfSearch = await fetchJobsDataSearch(text);
    dispatch({ type: SEARCH_JOBS, payload: {jobsOfSearch} });
  } catch (error) {
    dispatch({ type: GET_JOBS_ERROR, payload: "Get data error" })
  }
}

export const getSearchData = (text: String, page: Number) => async (dispatch: Dispatch<getJobsAction | getJobsLoading>) => {
  dispatch({ type: GET_JOBS_LOADING });
  try {
    const jobsOfSearchPage = await fetchJobsDataBySearch(text, page);
    dispatch({ type: SEARCH_JOBS_TEXT, payload: { jobsOfSearchPage} });
  } catch (error) {
    dispatch({ type: GET_JOBS_ERROR, payload: "Get data error" })
  }
}

