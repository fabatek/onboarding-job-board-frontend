import { applyMiddleware, createStore } from "redux"; 
import thunk from "redux-thunk";
import { jobsReducer } from "./reducer";

export const store = createStore(jobsReducer,applyMiddleware(thunk))