import { all } from "@redux-saga/core/effects";
import fetchJobsSaga from "./jobsSaga";

export default function* rootSaga() {
  yield all([fetchJobsSaga()]);
}
