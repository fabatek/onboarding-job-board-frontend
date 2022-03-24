import { combineReducers } from "redux";
import jobReducer from "./JobReducer";

const RootReducer = combineReducers({ job: jobReducer });

export default RootReducer