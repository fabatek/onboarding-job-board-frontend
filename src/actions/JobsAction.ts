import { Dispatch } from 'redux';
import axios from 'axios';
import {
  JOBS_FAIL,
  JOBS_LOADING,
  JOBS_SUCCESS,
  SEARCH_FILTER,
  JobDispatchTypes,
} from '../actions/JobsActionType';

const BASE_URL = 'https://6239311d043817a543df0a3f.mockapi.io/api/jobs';

export const getJob =
  (searchTitle: string) =>
  async (dispatch: Dispatch<JobDispatchTypes>): Promise<void> => {
    try {
      dispatch({
        type: JOBS_LOADING,
      });
      const res = await axios.get(BASE_URL + `?name=${searchTitle}`);

      searchTitle === ''
        ? dispatch({
            type: JOBS_SUCCESS,
            payload: res.data,
          })
        : dispatch({
            type: SEARCH_FILTER,
            payload: {
              search: searchTitle,
              jobs: res.data,
            },
          });
    } catch (e) {
      dispatch({
        type: JOBS_FAIL,
      });
    }
  };
