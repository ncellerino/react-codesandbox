import { all } from "redux-saga/effects";
import { loginSagas } from "./authSlice";

const rootSaga = function* () {
  yield all([loginSagas()]);
};

export default rootSaga;
