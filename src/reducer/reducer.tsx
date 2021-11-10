import { FETCH_JOB_FAIL, FETCH_JOB_SUCCESS, FETCH_JOB_LOADING, SEARCH_JOB, SET_OFFSET, SET_JOBS } from "../action/actions";
import { Job } from "../types/jobsType";
export const initialStare = {
    loading: false,
    allJobs: [],
    jobs: [],
    error: null,
    value: '',
    perpage: 10,
    pagecount: 0,
    offset: 0
}
export interface RootState {
    jobs: Job[],
    allJobs: Job[],
    loading: boolean,
    error: null,
    value: string,
    perpage: number;
    pagecount: number;
    offset: number;
}
export function jobsReducer(state = initialStare, action: any) {
    switch (action.type) {
        case FETCH_JOB_LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_JOB_SUCCESS: {
            const { perpage, offset } = state;
            return {
                ...state,
                loading: false,
                allJobs: action.payload,
                pagecount: action.payload.length / 10,
                jobs: action.payload.slice(offset, offset + perpage),
            }
        }

        case FETCH_JOB_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case SET_OFFSET:

            return {
                ...state,
                offset: action.payload
            }
        case SET_JOBS:
            return {
                ...state,
                loading: false,
                jobs: action.payload
            }
        case SEARCH_JOB:
            const { perpage } = state;
            let { value, offset } = action.payload;

            value = value ?? state.value;
            offset = offset ?? state.offset;


            const searchJobs = state.allJobs.filter((jobVal: Job) => {
                return !value || jobVal.jobName.toLowerCase().includes(value.toString().toLowerCase())
            }).slice(offset, offset + perpage);
            
            return {
                ...state,
                loading: false,
                jobs: searchJobs,
            };

        default:
            return state;
    }
}
