import { Dispatch } from 'redux';
import axios from 'axios';
import {
  JOBS_FAIL,
  JOBS_LOADING,
  JOBS_SUCCESS,
  JobDispatchTypes,
} from '../actions/JobsActionType';

export const GetJob = () => async (dispatch: Dispatch<JobDispatchTypes>) => {
  try {
    dispatch({
      type: JOBS_LOADING,
    });
    const res = await axios.get(
      `https://6239311d043817a543df0a3f.mockapi.io/api/jobs`
    );

    dispatch({
      type: JOBS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: JOBS_FAIL,
    });
  }
};
