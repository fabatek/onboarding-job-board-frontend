import { getJobsType, getJobType, searchJob } from "./type";
import { typeStates } from "../type";
import { getJobsApi, getJobApi } from "../../common/jobApi";
import { ThunkAction } from "redux-thunk";

export type actionJobs = getJobsType | getJobType | searchJob;

//define type JobsThunk
export type JobsThunkAction = ThunkAction<void, typeStates, any, actionJobs>;

//request jobs
export const requestJobsAction = (): JobsThunkAction => async (dispatch) => {
  try {
    const res = await getJobsApi();
    dispatch({
      type: "GET_JOBS",
      jobs: res?.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//request jobs
export const requestJobAction =
  (id: number): JobsThunkAction =>
  async (dispatch) => {
    try {
      const res = await getJobApi(id);
      dispatch({
        type: "GET_JOB",
        job: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

//search
export const searchTitleJob =
  (key: string): JobsThunkAction =>
  (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: "SEARCH_TITLE_JOBS",
        key,
      });
    }, 500);
  };
