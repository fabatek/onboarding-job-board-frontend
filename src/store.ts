
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { jobsReducer } from './reducer/reducer'

const store = createStore(
    jobsReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store