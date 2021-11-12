
import { off } from "process";
import { FETCH_JOB_FAIL, FETCH_JOB_SUCCESS, FETCH_JOB_LOADING, SEARCH_JOB, SET_OFFSET, SET_JOBS, setOffset } from "../action/actions";
import { Job } from "../types/jobsType";
export const initialStare = {
    loading: false,
    allJobs: [],
    jobs: [],
    searchJobs: [],
    error: null,
    value: '',
    perpage: 10,
    pagecount: 0,
    offset: 0
}
export interface RootState {
    jobs: Job[],
    allJobs: Job[],
    searchJobs: Job[],
    loading: boolean,
    error: null,
    value: string,
    perpage: number,
    pagecount: number,
    offset: number
}
export function jobsReducer(state: RootState = initialStare, action: any) {
    switch (action.type) {

        case FETCH_JOB_LOADING:
            return {
                ...state,
                loading: true
            }

        case FETCH_JOB_SUCCESS: {
            const allJobs = action.payload;
            let searchJobs = allJobs;
            const { offset, perpage } = state;
            const jobOnFirstPage = searchJobs.slice(offset, offset + perpage);
            return {
                ...state,
                loading: false,
                allJobs: action.payload,
                searchJobs: action.payload,
                pagecount: action.payload.length / 10,
                jobs: jobOnFirstPage
            }
        }

        case FETCH_JOB_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case SET_OFFSET:
            const fromIndex = action.payload * state.perpage;
            const toIndex = action.payload * state.perpage + state.perpage;
            return {
                ...state,
                offset: action.payload,
                jobs: state.searchJobs.slice(fromIndex, toIndex) || []
            }

        case SET_JOBS:
            return {
                ...state,
                loading: false,
                jobs: action.payload
            }
            
        case SEARCH_JOB:
            const { value } = action.payload;
            const searchResult = state.allJobs.filter((jobVal: Job) => {
                return !value || jobVal.jobName.toLowerCase().includes(value.toString().toLowerCase())
            });
            console.log(searchResult, 'ket qua')
            const searchPageCount = Math.ceil(searchResult.length / 10);
            console.log(searchResult.slice(state.offset, state.offset + state.perpage), "search")
            return {
                ...state,
                loading: false,
                searchJobs: searchResult,
                jobs: searchResult.slice(state.offset, state.offset + state.perpage),
                pagecount: searchPageCount
            };
        default:
            return state;
    }
}
