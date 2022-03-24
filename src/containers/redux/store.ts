import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "./reducers/index";
import thunk from "redux-thunk";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

//Default RootStore reducer type
export type RootStore = ReturnType<typeof reducers>;
export default Store;
