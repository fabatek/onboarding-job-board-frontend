import { DefaultRootState } from 'react-redux';
import {JobAPI} from '../interface'
import {FETCH_JOBS} from '../actions'
const initialState = {
    "0-legeal-notice": '',
    "job-count": 0,
    jobs: []
}
interface Action{
    type: string
    jobs: Array<JobAPI>
}
export default function dataProducer(state:  DefaultRootState = initialState, action: Action){
    switch (action.type) {
        case FETCH_JOBS:
            state = action.jobs
            return {
                ...state,
            }
        default: 
            return state;
    }
}
