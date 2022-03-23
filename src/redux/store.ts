import { applyMiddleware, createStore } from 'redux';
import rootReducers from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk)),
);

export type RootStore = ReturnType<typeof rootReducers>


export default store;