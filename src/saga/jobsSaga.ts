import axios, { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { jobsActions } from "../store/slices/JobsSlice";
import { Job } from "../types/types";

const getJobs = () => {
  axios.get("https://612c9ef7ab461c00178b5dda.mockapi.io/api/jobs");
};

function* fetchJobsSaga() {
  try {
    const response: AxiosResponse<Job[]> = yield call(getJobs);
    yield put(
      jobsActions.fetchJobsSuccess({
        jobs: response.data,
      })
    );
  } catch (e) {
    yield put(jobsActions.fetchJobsFailed());
  }
}

export default function* jobsSaga() {
  yield takeLatest(jobsActions.fetchJobs, fetchJobsSaga);
}
