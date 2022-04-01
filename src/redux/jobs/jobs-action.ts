import axios from "axios";
import { Dispatch } from "react";
import {
  JobDispatchTypes,
  JOBS_FAIL,
  JOBS_LOADING,
  JOBS_SUCCESS,
  JOBS_FILTER,
} from "./jobs-action-types";

export const JOBS_URL = "https://623804ad0a54d2ceab6f951b.mockapi.io/api/jobs";

const getJobs =
  () =>
  async (dispatch: Dispatch<JobDispatchTypes>): Promise<void> => {
    try {
      dispatch({
        type: JOBS_LOADING,
      });

      const response = await axios.get(JOBS_URL);

      dispatch({
        type: JOBS_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: JOBS_FAIL,
      });
    }
  };

const getJobsFilter =
  (searchKey: string) =>
  async (dispatch: Dispatch<JobDispatchTypes>): Promise<void> => {
    try {
      dispatch({
        type: JOBS_LOADING,
      });

      const FILT_URL = searchKey ? `${JOBS_URL}?name=${searchKey}` : JOBS_URL;
      const response = await axios.get(FILT_URL);

      dispatch({
        type: JOBS_FILTER,
        payload: response.data,
      });
      console.log(FILT_URL);
    } catch (err) {
      dispatch({
        type: JOBS_FAIL,
      });
    }
  };

export { getJobs, getJobsFilter };
