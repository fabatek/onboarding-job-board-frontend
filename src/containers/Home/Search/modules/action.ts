import * as ActionType from "./constrant";
import api from "../../../util/api";
export const actFetchJob = () => {
  return (dispatch:any) => {
    dispatch(actFetchJobRequest());
    api
      .get(`https://6183cb0191d76c00172d1b6b.mockapi.io/api/products`)
      .then((result) => { dispatch(actFetchJobSuccess(result.data)); })
      .catch((error) => { dispatch(actFetchJobFailed(error)); });
  };
};

export const actFetchJobRequest = () => {
  return {
    type: ActionType.JOB_REQUEST,
  };
};

export const actFetchJobSuccess = (data:any) => {
  return {
    type: ActionType.JOB_SUCCESS,
    payload: data,
  };
};
export const actFetchJobFailed = (error:any) => {
  return {
    type: ActionType.JOB_FAILED,
    payload: error,
  };
};


