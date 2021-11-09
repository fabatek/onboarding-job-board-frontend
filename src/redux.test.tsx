import { jobsReducer } from "./reducer/reducer";
import { FETCH_JOB_SUCCESS, FETCH_JOB_LOADING, FETCH_JOB_FAIL, SEARCH_JOB, SET_OFFSET } from "./action/actions";
import { Job } from './types/jobsType'
interface RootState {
    jobs: Job[],
    allJobs: Job[],
    loading: boolean,
    error: null,
    value: string,
    perpage: number;
    pagecount: number;
    offset: number;
}
describe('action test', () => {
    it('should handle FETCH_JOB_LOADING', () => {
        const expected = {
            type: FETCH_JOB_LOADING
        }
        expect(jobsReducer(undefined, expected)).toEqual({allJobs: [], error: null, jobs: [], loading: true, offset: 0, pagecount: 0, perpage: 10, value: ""});
    });
    it('should handle FETCH_JOB_SUCCESS', () => {
        const expected = (allJobs: RootState['allJobs']) => {
            return {
                type: FETCH_JOB_SUCCESS,
                payload: allJobs
            }
        }
        expect(jobsReducer(undefined, expected)).toEqual({allJobs: [], error: null, jobs: [], loading: false, offset: 0, pagecount: 0, perpage: 10, value: ""});
    });
    it('should handle FETCH_JOB_FAIL', () => {

        const expected = (error: RootState) => {
            return {
                type: FETCH_JOB_FAIL,
                error
            }
        }
        expect(jobsReducer(undefined, expected)).toEqual({allJobs: [], error: null, jobs: [], loading: false, offset: 0, pagecount: 0, perpage: 10, value: ""});
    });
    it('should handle SEARCH_JOB', () => {
        const expected = (value: RootState['value']) => {
            return {
                type: SEARCH_JOB,
                payload: {
                    value
                }
            }
        }
        expect(jobsReducer(undefined, expected)).toEqual({allJobs: [], error: null, jobs: [], loading: false, offset: 0, pagecount: 0, perpage: 10, value: ""});
    });
    
})