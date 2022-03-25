import { combineReducers } from "redux";
import { jobReducer } from "./jobReducer";

export const reducers = combineReducers({
  allJobs: jobReducer,
});
