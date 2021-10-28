import { combineReducers } from "redux";

import jobs from './jobsReducer'
import detailJob from './detailReducer'
import jobsPerPage from "./jobsPerPageReducer";
import alertType from "./alertReducer";
import page from "./pageReducer";

export default combineReducers({
    jobs,
    detailJob,
    jobsPerPage,
    alertType,
    page
})