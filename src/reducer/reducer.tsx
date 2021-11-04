import { FETCH_JOB_FAIL, FETCH_JOB_SUCCESS, FETCH_JOB_LOADING } from "../action/actions";
export const initialStare = {
    loading: false,
    Job: [],
    error: null
}
interface RootState {
    Job: [],
    loading: boolean,
    error: null
}
export function jobsReducer(state = initialStare, action: any) {
    switch (action.type) {
        case FETCH_JOB_LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_JOB_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                Job: action.payload
            }
        case FETCH_JOB_FAIL:
            return {
                ...state,
                loading: false,
                Job: action.error
            }
        default:
            return state;
    }
}
export const getJobs = (state: RootState) => state.Job;
export const getProductsPending = (state: RootState) => state.loading;
export const getProductsError = (state: RootState) => state.error;