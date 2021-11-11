<<<<<<< HEAD

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { jobsReducer } from './reducer/reducer'

const store = createStore(
    jobsReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

=======

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { jobsReducer } from './reducer/reducer'

const store = createStore(
    jobsReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
export default store