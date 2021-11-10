import { Action } from "redux";
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
    offset: 0,
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
export function jobsReducer(state:RootState = initialStare, action: any) {
    switch (action.type) {
        case FETCH_JOB_LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_JOB_SUCCESS: {
            const { offset, perpage } = state;
            return {
                ...state,
                loading: false,
                allJobs: action.payload,
                pagecount: action.payload.length / 10,
                jobs: action.payload.slice(offset, offset + perpage)
            }
        }

        case FETCH_JOB_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case SET_OFFSET:
            const { perpage } = state;
            let { offset } = action.payload;
            offset = offset ?? state.offset;
            let size = Math.floor(state.allJobs.length / perpage);
            let arr = [];
            let i = 0;
            while (i < state.allJobs.length) {
                arr.push(state.allJobs.slice(i, i += size));

            }
            console.log(arr)

            return {
                ...state,
                offset: action.payload,
                jobs: arr[offset] || [],
            }
        // case SET_JOBS:
        //     return {
        //         ...state,
        //         loading: false
        //     }
        case SEARCH_JOB:
            let { value } = action.payload;
            value = value ?? state.value;

            const searchJobs = state.allJobs.filter((jobVal: Job) => {
                return !value || jobVal.jobName.toLowerCase().includes(value.toString().toLowerCase())
            });

            return {
                ...state,
                loading: false,
                jobs: searchJobs,
            };

        default:
            return state;
    }
}