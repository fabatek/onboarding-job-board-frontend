import { Dispatch } from 'redux';
import axios from 'axios';
import {
  JOBS_FAIL,
  JOBS_LOADING,
  JOBS_SUCCESS,
  SEARCH_FILTER,
  JobDispatchTypes,
} from '../actions/JobsActionType';

export const BASE_URL = 'https://6239311d043817a543df0a3f.mockapi.io/api/jobs';

export const getJob =
  (searchTitle: string = '') =>
  async (dispatch: Dispatch<JobDispatchTypes>): Promise<void> => {
    try {
      dispatch({
        type: JOBS_LOADING,
      });

      if (searchTitle === '') {
        const res = await axios.get(BASE_URL);
        dispatch({
          type: JOBS_SUCCESS,
          payload: res.data,
        });
      } else {
        const res = await axios.get(`${BASE_URL}?name=${searchTitle}`);
        dispatch({
          type: SEARCH_FILTER,
          payload: res.data,
        });
      }
    } catch (e) {
      dispatch({
        type: JOBS_FAIL,
      });
    }
  };
