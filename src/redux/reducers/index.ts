import { combineReducers } from "redux";

import jobs from './jobsReducer'
import detailJob from './detailReducer'

export default combineReducers({
    jobs,
    detailJob
})