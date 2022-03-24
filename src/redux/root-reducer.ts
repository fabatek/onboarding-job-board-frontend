import {combineReducers} from 'redux';
import jobsReducer from './jobs/jobs-reducer';

const rootReducers=combineReducers({
    job:jobsReducer,
});

export default rootReducers;