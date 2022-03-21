import {createStore,compose, applyMiddleware}   from "redux"
import {reducers} from "./reducers/index"
import thunk from "redux-thunk"

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store  = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)

export default store

