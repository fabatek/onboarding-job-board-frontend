import createSagaMiddleware from "@redux-saga/core";
import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import jobsReducer from "./slices/JobsSlice";

const rootReducer = combineReducers({
  jobs: jobsReducer,
})

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(sagaMiddleware),
  // devTools: true,
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
