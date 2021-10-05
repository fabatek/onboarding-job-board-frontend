import { createStore, applyMiddleware } from "redux"; //combineReducers
import thunkMiddleware from "redux-thunk";
import rootReducer from "../Reducers";

export default function configureStore() {
  const middlewares = [thunkMiddleware];

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  return store;
}
