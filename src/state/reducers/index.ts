import { combineReducers } from 'redux'
import { getJobsData } from './jobReducer'

export const reducers = combineReducers({
  getJobData: getJobsData
})

export type RootState = ReturnType<typeof reducers>