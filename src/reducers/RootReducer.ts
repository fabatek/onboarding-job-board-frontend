import { combineReducers } from 'redux';
import JobsReducer from './JobReducer'

const RootReducer = combineReducers({
    jobs: JobsReducer
});

export default RootReducer;