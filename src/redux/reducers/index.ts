import { combineReducers } from "redux";

import jobs from './jobsReducer'
import detailJob from './detailReducer'
import jobsPerPage from "./jobsPerPageReducer";
import alertType from "./alertReducer";

export default combineReducers({
    jobs,
    detailJob,
    jobsPerPage,
    alertType
})