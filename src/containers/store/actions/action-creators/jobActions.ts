import axios from "axios";
import { Dispatch } from "redux";
import Job from "../../../models/jobModel";
import ActionTypes from "../action-types";
import { Action } from "../job.action";
export const getJobs =
  (perPage: number,page?: number) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionTypes.GET_JOBS_REQUEST,
      });

      const jobs = await axios.get<Job[]>(
        "https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs"
      );
      const jobsPage = await axios.get<Job[]>(
        `https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs?page=${
          page ? page : 1
        }&limit=${perPage}`
      );
      const [resultJobs, resultPage] = await Promise.all([jobs, jobsPage]);
      const pageNubmer = page ? page : 1;
      dispatch({
        type: ActionTypes.GET_JOBS_SUCCESS,
        payload: {
          jobs: resultJobs.data,
          jobsPage: resultPage.data,
          page:  pageNubmer,
        },
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypes.GET_JOBS_FAIL,
        payload: err.message,
      });
    }
  };
