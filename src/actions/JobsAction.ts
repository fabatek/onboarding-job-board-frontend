import { Dispatch } from 'redux';
import axios from 'axios';
import {
  JOBS_FAIL,
  JOBS_LOADING,
  JOBS_SUCCESS,
  SEARCH_FILTER,
  JobDispatchTypes,
} from '../actions/JobsActionType';

export const GetJob =
  (searchTitle: string) =>
  async (dispatch: Dispatch<JobDispatchTypes>): Promise<void> => {
    try {
      dispatch({
        type: JOBS_LOADING,
      });
      const res = await axios.get(
        `https://6239311d043817a543df0a3f.mockapi.io/api/jobs`
      );

      searchTitle === ''
        ? dispatch({
            type: JOBS_SUCCESS,
            payload: res.data,
          })
        : dispatch({
            type: SEARCH_FILTER,
            payload: {
              search: searchTitle,
              jobs: res.data.filter(
                (i: { name: string | string[] }) =>
                  i.name.indexOf(searchTitle) >= 0
              ),
            },
          });
    } catch (e) {
      dispatch({
        type: JOBS_FAIL,
      });
    }
  };
