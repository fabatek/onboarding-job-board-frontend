import {combineReducers} from "redux"
import {jobReducer,cityReducer} from "../Home/Search/modules/reducer";
const rootReducer = combineReducers({
    jobReducer,
    cityReducer
})

export default rootReducer;