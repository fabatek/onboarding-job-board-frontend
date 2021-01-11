import { JobsDispatchType, JOBS_LOADING, JOBS_LOADING_FAIL, JOBS_LOADING_SUCCESS } from "../actions/JobsActionsType";

interface InitialState {
    loading: boolean,
    jobs?: any,
    job_count: number
};

const defaultState: InitialState = {
    loading: false,
    job_count: 0
};

const JobsReducer = (state: InitialState = defaultState, action: JobsDispatchType): InitialState => {
    
    switch (action.type) {
        case JOBS_LOADING_FAIL:
            return {
                loading: false,
                job_count: 0
            }
        case JOBS_LOADING:
            return {
                loading: true,
                job_count: 0
            }
        case JOBS_LOADING_SUCCESS:
            return {
                loading: false,
                jobs: action.payload.jobs,
                job_count: action.payload['job-count']
            }
        default:
            return state
    }
};

export default JobsReducer;