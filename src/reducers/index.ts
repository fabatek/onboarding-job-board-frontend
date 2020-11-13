import jobsReducer from './jobs'
import {combineReducers} from 'redux'
const allReducers = combineReducers({
    getJob: jobsReducer,
})

export default allReducers